<script setup lang="ts">
// import type { AuTabProps } from './tab'
import { defineComponent, h } from 'vue'
// defineOptions({
//   name: 'AuTab',
//   inheritAttrs: false
// })
// const props = withDefaults(defineProps<AuTabProps>(), {
//   names: () => []
// })
// export default {
//   name: 'au-tab',
//   // inheritAttrs: false,
//   render() {
//     return h('h2', null, '123123')
//     // return h('h2', {}, '123123')
//   }
// }
defineComponent({
  name: 'au-tab',
  // inheritAttrs: false,
  render() {
    // return '123123'
    return h('h2', null, '123123')
    // return h('h2', {}, '123123')
  }
})
</script>

<!-- <template>
  <div class="au-tab">
    <div class="au-tab-header">
      <slot></slot>
    </div>
    <div class="au-tab-content">
      <slot></slot>
    </div>
  </div>
</template> -->
