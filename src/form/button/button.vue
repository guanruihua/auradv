<script setup lang="ts">
defineOptions({
  name: 'AuButton',
  inheritAttrs: false
})
const { type = 'default' } = defineProps<{
  type?: 'default' | 'primary' | 'success' | 'info' | 'warming' | 'danger' | string
}>()
</script>

<template>
  <button :class="`au-button au-button-${type}`">
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
