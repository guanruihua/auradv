import type { ExtractPropTypes,  } from 'vue'
import type Menu from './menu.vue'

export interface MenuItemType{
  label: string
  value: string
  icon?: string
}

export type MenuProps = ExtractPropTypes<{
  onSelect?(value: MenuItemType):void
  items?: MenuItemType[]
}>

export type MenuInstance = InstanceType<typeof Menu>