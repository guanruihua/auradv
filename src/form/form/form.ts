import type { ExtractPropTypes } from 'vue'
import type Form from './form.vue'

export type FormProps = ExtractPropTypes<{
  val?: string
}>

export type InputInstance = InstanceType<typeof Form>