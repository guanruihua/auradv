/* eslint-disable*/
import type { ObjectType } from 'abandonjs'
import type { AuTableProps } from '../table'
import { onMounted, watch, ref, getCurrentInstance } from 'vue'

const Default_Col_Width = 180

export function useColumn(props: AuTableProps): any {
  // if (props.columns.length < 3) {
  //   return [props.columns, []]
  // }
  
  const getTableWidth = () => {
    const dom: any = getCurrentInstance()?.refs['au-table']
    if (dom && dom.offsetWidth > 0) {
      return dom.offsetWidth
    }
    return window.innerWidth || document.body.clientWidth
  }

  const widthRef = ref<number>(getTableWidth())

  // const uid = location.href + JSON.stringify(props.columns) + (window.innerWidth || document.body.clientWidth)
  const uid = location.href + JSON.stringify(props.columns)

  const columnRef = ref<AuTableProps['columns']>(props.columns || [])
  const hiddenColumnRef = ref<AuTableProps['columns']>([])
  const selectColRef = ref<ObjectType<boolean>>({})
  const needFold = ref<boolean>(false)

  const checkNeedFold = () => {
    let totalWidth: number = 0
    props.columns.forEach(item => {
      totalWidth += item.width || Default_Col_Width
    })
    const result = totalWidth > widthRef.value
    needFold.value = result
    return result
  }

  const setColumn = (record?: ObjectType<boolean>) => {
    const columns = [...props.columns]
    const len = columns.length

    if (!checkNeedFold()) {
      return;
    }

    const newSelectCol: ObjectType<boolean> = {}
    const newColumn = []
    const hiddenColumn = []

    const getRestWidth = () => {
      if (record) {
        if (Object.values(record).filter(_ => _).length < 1) {
          record[0] = true
        }
        return widthRef.value
      }
      return widthRef.value -
        (columns[0].width || Default_Col_Width) -
        (columns[len - 1].width || Default_Col_Width)
    }

    let restWidth = getRestWidth()

    for (let i = 0; i < len; i++) {
      const item = columns[i]
      if (!record && (i === 0 || i === len - 1)) {
        newColumn.push(item)
        newSelectCol[i] = true
        continue
      }
      const item_w = item.width || Default_Col_Width
      if (
        (!record && restWidth > item_w) ||
        (record && record[i] && restWidth > item_w)
      ) {
        newColumn.push(item)
        newSelectCol[i] = true
        restWidth -= item_w
      } else {
        newSelectCol[i] = false
        hiddenColumn.push(item)
      }
    }

    columnRef.value = newColumn
    hiddenColumnRef.value = hiddenColumn
    selectColRef.value = newSelectCol
    // 缓存
    localStorage.setItem(uid, JSON.stringify(newSelectCol))
  }

  const switchColumn = () => {
    setColumn(selectColRef.value)
  }

  watch(
    () => props.columns,
    () => {
      setColumn()
    }
  )

  const init = () => {

    const w = getTableWidth()
    if (Math.abs(w - widthRef.value) < Default_Col_Width) {
      return
    }
    if (w !== widthRef.value) {
      widthRef.value = w
    }
    const cache = localStorage.getItem(uid + 'b')
    if (w === widthRef.value && cache) {
      try {
        setColumn(JSON.parse(cache))
      } catch (error) {
        setColumn()
        localStorage.removeItem(uid)
      }
    } else {
      setColumn()
    }
  }

  onMounted(() => {
    init()
    window.addEventListener('resize', () => {
      init()
    })
  })

  return { needFold, columnRef, hiddenColumnRef, selectColRef, switchColumn }
}