<script setup lang="ts">
import { defineComponent } from 'vue'
import { AuInput } from '..'

const name = 'au-form'
defineComponent({
  name
})
</script>

<template>
  <div>
    {{ name }}
    <au-input/>
  </div>
</template>
