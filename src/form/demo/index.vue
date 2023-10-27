<script>
export default {
  name: 'AuForm'
}
</script>

<script setup>
import { AuInput } from '..'
const name = 'au-form'
</script>

<template>
  <div>
    {{ name }}
    <au-input/>
  </div>
</template>
