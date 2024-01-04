<script setup lang="ts">
defineOptions({
  name: 'au-header'
})
defineProps({
  fix: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div :class="['au-header', { fix }]">
    <slot />
  </div>
</template>

<style lang="scss">
.au-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  &.fix {
    position: absolute;
    top: 0;
  }
}
</style>
