<script setup lang="ts">
import { useRouter } from 'vue-router'
defineOptions({
  name: 'AuHeader'
})
const router = useRouter()
</script>

<template>
  <div class="au-header">
    <slot >
      {{ router.currentRoute.value.name }}
    </slot>
  </div>
</template>

<style lang="scss">
.au-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #777;
}
</style>
