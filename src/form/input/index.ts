import type { ExtractPropTypes } from 'vue'
import type Input from './index.vue'

export { default as AuInput } from './index.vue'
export type InputProps = ExtractPropTypes<{
  val?: string
}>

export type InputInstance = InstanceType<typeof Input>
