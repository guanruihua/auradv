import type { ComponentProps } from '@/type'
import Popover from './popover.vue'

export const AuPopover = Popover
export type Trigger = 'click' | 'focus' | 'hover'
export type Placement = 'top' | 'right' |'bottom' | 'left' | string

export interface AuPopoverProps extends ComponentProps {
  /**
   * @description 
   * @default 'hover'
   */
  trigger?: Trigger | Trigger[]
  placement?: Placement
}