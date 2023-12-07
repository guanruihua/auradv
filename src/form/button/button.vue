<script setup lang="ts">
import { useAttrs } from 'vue'
defineOptions({
  name: 'AuButton',
  inheritAttrs: false
})
const { type = 'default' } = withDefaults(defineProps<{
  type?: 'default' | 'primary' | 'success' | 'info' | 'warming' | 'danger' | string
}>(), {
  type: 'default'
})

const props = useAttrs()

console.log(props)
</script>

<template>
  <button v-bind="props" :class="`au-button au-button-${type}`">
    <slot> Click </slot>
  </button>
</template>

<style lang="scss">
.au-button {
  color: var(--g-txt-color);
  padding: 8px 15px;
  border-radius: 12px;
  background: transparent;
  outline: none;
  border: none;
}
</style>
