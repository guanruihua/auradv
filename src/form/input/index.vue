<script setup lang="ts">
defineOptions({
  name: 'AuInput',
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
  <input class="au-input au-control" v-model="val" />
</template>

<style lang="scss">
.au-input {
  color: #000;
}
</style>
