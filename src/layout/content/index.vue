<script setup lang="ts">
defineOptions({
  name: 'AuContent'
})
// defineProps({
//   // fix: {
//   //   type: Boolean,
//   //   default: true
//   // }
// })
</script>

<template>
  <div :class="['au-content']">
    <slot />
  </div>
</template>

<style lang="scss">
.au-content {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  &:has(.au-header) {
    padding-top: 41px;
  }

  &:has(.au-footer) {
    padding-bottom: 41px;
  }
}
</style>
