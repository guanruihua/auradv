<script setup lang="ts">
import { ref } from 'vue'
import { AuDialog } from '..'

const open = ref(false)
const close = () => {
  open.value = false
}
const confirm = () => {
  open.value = false
}
const cancel = () => {
  open.value = false
}
</script>

<template>
  <button @click="open = true" :style="{ padding: '5px 10px' }">open</button>
  <au-dialog
    :open="open"
    :style="{ background: '#fff', width: 300 }"
    :close="close"
    :confirm="confirm"
    :cancel="cancel"
  >
    <div>temp</div>
  </au-dialog>
</template>
