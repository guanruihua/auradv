<script setup lang="ts">
defineOptions({
  name: 'AuFooter'
})
defineProps({
  fix: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div :class="['au-footer', { fix }]">
    <slot />
  </div>
</template>

<style lang="scss">
.au-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  height: 32px;
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #777;

  &.fix {
    position: absolute;
    bottom: 0;
  }
}
</style>
