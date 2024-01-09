import { ref, onMounted, onUnmounted } from 'vue'
import { isArray } from 'asura-eye'

export function debounce(func, delay){
  let timer = null

  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export const watchClass = (className, cb) => {
  onMounted(() => {
    const targetNode = document.querySelector(className)
    if (!targetNode) {
      return
    }
    // console.log(className, targetNode)
    // 创建一个 MutationObserver 实例
    const observer = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          // 当目标节点的 class 发生变化时，执行回调函数
          // console.log('目标节点的 class 发生了变化')
          // nextTick(() => {
          cb && cb()
          // })
        }
      }
    })

    // 配置 MutationObserver 监听的选项
    const config = { attributes: true, attributeFilter: ['class']}

    // 开始观察目标节点
    observer.observe(targetNode, config)

    onUnmounted(() => {
      observer.disconnect()
    })
  })
}
export const watchSize = (className, cb) => {
  const owk = className + '_origin_w'
  const ohk = className + '_origin_h'
  onMounted(() => {
    const targetNode = document.querySelector(className)
    if (!targetNode) {
      return
    }
    // console.log(className, targetNode)
    const resizeObserver = new ResizeObserver(
      debounce(entries => {
        // console.log(entries)
        for (const entry of entries) {
          const { width, height } = entry.contentRect
          const ow = Number(sessionStorage.getItem(owk))
          const oh = Number(sessionStorage.getItem(ohk))
          if (ow !== width || oh !== height) {
            sessionStorage.setItem(owk, width)
            sessionStorage.setItem(ohk, height)
            // console.log('Width:', width, 'Height:', height)
            // nextTick(() => {
            cb && cb()
            // })
          }
          // 在这里执行你想要的操作
        }
      }, 300),
    )

    resizeObserver.observe(targetNode)

    onUnmounted(() => {
      resizeObserver.disconnect()
    })
  })
}

export function useWatchClass(...className){
  const selfKey = ref(0)
  const cb = () => {
    selfKey.value += 1
  }
  const listener = className => {
    watchClass(className, cb)
    watchSize(className, cb)
  }
  if (isArray(className)) {
    className.forEach(listener)
  }

  return selfKey
}
