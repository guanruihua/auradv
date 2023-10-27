<script setup lang="ts">
defineOptions({
  name: 'AuInput',
  inheritAttrs: false,
})
const name = 'au-input'
const props = defineProps({
  val: {
    type: String,
    default: '',
  }
})
console.log(props)
</script>

<template>
  <div>
    {{ name }}
  </div>  
</template>
