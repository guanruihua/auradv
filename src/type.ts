import type { CSSProperties, StyleValue } from 'vue'
import type { ObjectType } from 'abandonjs'

export type StyleType = StyleValue
export type ClassNameType = string | ObjectType<boolean>

export type ComponentProps = {
  style?: CSSProperties,
  class?: ClassNameType
}