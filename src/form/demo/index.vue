<script setup lang="ts">
import { defineComponent } from 'vue'
import { AuInput, AuForm } from '..'

const name = 'au-form'
defineComponent({
  name
})
</script>

<template>
  <au-form>
    <au-input/>
  </au-form>
</template>
