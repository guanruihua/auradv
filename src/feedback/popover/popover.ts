import type { ComponentProps } from '@/type'
import Popover from './popover.vue'

export const AuPopover = Popover
export type Trigger = 'click' | 'focus' | 'hover'

export interface AuPopoverProps extends ComponentProps {
  /**
   * @description 
   * @default 'hover'
   */
  trigger?: Trigger | Trigger[]
}