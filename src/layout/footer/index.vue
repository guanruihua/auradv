<script setup lang="ts">
import { useRouter } from 'vue-router'
defineOptions({
  name: 'AuFooter'
})
const router = useRouter()
</script>

<template>
  <div class="au-footer">
    <slot>
      {{ router.currentRoute.value.query }}
      {{ router.currentRoute.value.params }}
    </slot>
  </div>
</template>

<style lang="scss">
.au-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: auto;
  width: 100%;
  height: 32px;
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #777;
}
</style>
