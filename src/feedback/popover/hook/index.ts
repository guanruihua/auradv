/* eslint-disable*/
import { onMounted, ref, type CSSProperties, watch, getCurrentInstance } from 'vue'
import { log } from '0log'
import type { AuPopoverProps } from '../popover';
import { getXY } from '../util';

export function usePopover(props: AuPopoverProps): any {
  const { placement = 'top' } = props
  const hasError = ref<boolean>(false)
  const popoverXY = ref<CSSProperties>({ left: '0px', top: '0px' })
  const triangleXY = ref<CSSProperties>({ left: '0px', top: '0px' })

  const init = () => {
    const XY = getXY(placement)
    popoverXY.value = XY.popoverXY
    triangleXY.value = XY.triangleXY
    // log(popoverXY.value)
    // log('init time: '+ new Date().getTime())
  }

  watch(() => [
    // getCurrentInstance()?.refs['au-popover'],
    // (getCurrentInstance()?.refs['au-popover'] as any)?.getBoundingClientRect(),
    // getCurrentInstance()?.refs['popoverWrapper'],
    (getCurrentInstance()?.refs['popoverWrapper'] as any)?.getBoundingClientRect(),
    document.body.getBoundingClientRect()
  ], () => {
    init()
  }, {
    deep: true,
    immediate: true,
  })

  onMounted(() => {
    init()
  })

  return {
    hasError,
    popoverXY,
    triangleXY
  }
}