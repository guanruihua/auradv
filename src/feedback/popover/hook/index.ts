/* eslint-disable*/
import { onMounted, getCurrentInstance, ref } from 'vue'
import { log } from '0log'
import { } from 'abandonjs'
import type { AuPopoverProps } from '../popover';

const getRect = (key: string) => {
  const dom: any = getCurrentInstance()?.refs[key]
  if (dom) {
    return (dom as HTMLDivElement).getBoundingClientRect()
  }
}
export function usePopover(props: AuPopoverProps) {
  const hasError = ref<boolean>(false)

  const init = () => {
    const g = document.body.getBoundingClientRect()
    const box = getRect('au-popover')
    const pop = getRect('popoverWrapper')

    log(
      g, box, pop
    )
  }

  onMounted(() => {
    init()
  })

  return {
    hasError
  }
}