<script setup lang="ts">
defineOptions({
  name: 'AuMain'
})
</script>

<template>
  <div class="au-main">
    <slot />
  </div>
</template>

<style lang="scss">
.au-main {
  position: relative;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 40px 1fr 40px;
  gap: 1px;
}
</style>
