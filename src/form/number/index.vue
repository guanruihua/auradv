<script setup lang="ts">
defineOptions({
  name: 'AuInputNumber',
  inheritAttrs: false
})
import { ref } from 'vue'
// const props = defineProps({
//   val: {
//     type: String,
//     default: '',
//   }
// })
// console.log(props)
const val = ref('')
</script>

<template>
  <input class="au-input-number au-control" v-model="val" type="number" />
</template>

<style lang="scss">
.au-input-number {
  color: #000;
}
</style>
