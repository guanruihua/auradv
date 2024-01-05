import { defineComponent } from 'vue'
import './index.scss'

export const AuFlex = defineComponent({
  name: 'AuFlex',
  props: {
    type: {
      type: String,
      default: 'col'
    },
    layout: {
      type: Array,
      default: () => []
    }
  },
  setup() {},
  render() {
    return <div class="au-flex">{this.$slots.default()}</div>
  }
})
