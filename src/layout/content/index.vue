<script setup lang="ts">
defineOptions({
  name: 'AuContent'
})
defineProps({
  // fix: {
  //   type: Boolean,
  //   default: true
  // }
})
</script>

<template>
  <div :class="['au-content']">
    <slot />
  </div>
</template>

<style lang="scss">
.au-content {
  position: relative;
}
</style>
