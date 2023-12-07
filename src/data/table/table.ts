import type { ObjectType } from 'abandonjs'
import type { ComponentProps } from '@/type'
import Table from './table.vue'

export const AuTable  = Table

export default Table

export type ColumnType = {
  width?: number
} & ObjectType

export interface AuTableProps extends ComponentProps{
  columns: ColumnType[]
  dataSource: ObjectType[]
}

