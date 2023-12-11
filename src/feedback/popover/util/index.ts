/* eslint-disable*/
import { getCurrentInstance, type CSSProperties } from 'vue'

export const getRect = (key: string) => {
  const dom: any = getCurrentInstance()?.refs[key]
  if (dom) {
    return (dom as HTMLDivElement).getBoundingClientRect()
  }
  return document.body.getBoundingClientRect()
}

export const getXY = (placement = 'top') => {
  const box = getRect('au-popover')
  const pop = getRect('popoverWrapper')
  let triangleXY: CSSProperties = {}
  let popoverXY: CSSProperties = {}
  if (placement === 'right') {
    triangleXY = {
      top: box.height / 2 - 8 + 'px',
      right: -8 + 'px',
      'border-top-color': 'transparent',
      // 'border-right-color': 'transparent',
      'border-bottom-color': 'transparent',
      'border-left-color': 'transparent'
    }
    popoverXY = {
      top: box.height / 2 - pop.height / 2 + 'px',
      left: box.width + 8 + 'px',
    }
  } else if (placement === 'bottom') {
    triangleXY = {
      top: box.height + 10 - 8 * 2 + 'px',
      left: box.width / 2 - 8 + 'px',
      'border-top-color': 'transparent',
      'border-right-color': 'transparent',
      // 'border-bottom-color': 'transparent',
      'border-left-color': 'transparent'
    }
    popoverXY = {
      top: box.height + 10 + 'px',
      left: box.width / 2 - pop.width / 2 + 'px',
    }
  } else if (placement === 'left') {
    triangleXY = {
      top: box.height / 2 - 8 + 'px',
      left: - 8 + 'px',
      'border-top-color': 'transparent',
      'border-right-color': 'transparent',
      'border-bottom-color': 'transparent',
      // 'border-left-color': 'transparent'
    }
    popoverXY = {
      top: box.height / 2 - pop.height / 2 + 'px',
      left: -pop.width - 8 + 'px',
    }
  } else {
    // top
    triangleXY = {
      top: - 8 + 'px',
      left: box.width / 2 - 8 + 'px',
      // 'border-top-color': 'transparent',
      'border-right-color': 'transparent',
      'border-bottom-color': 'transparent',
      'border-left-color': 'transparent'
    }
    popoverXY = {
      top: - 8 - pop.height + 'px',
      left: box.width / 2 - pop.width / 2 + 'px',
    }
  }
  return {
    popoverXY,
    triangleXY,
  }
}