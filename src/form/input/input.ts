import type { ExtractPropTypes } from 'vue'
import type Input from './input.vue'

export type InputProps = ExtractPropTypes<{
  val?: string
}>

export type InputInstance = InstanceType<typeof Input>