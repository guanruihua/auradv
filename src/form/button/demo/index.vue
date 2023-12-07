<script setup lang="ts">
import { AuButton } from '..'
const list: string[] = ['default', 'primary', 'success', 'info', 'warming', 'danger']
</script>

<template>
  <au-button v-for="name in list" :type="name" style="border: 1px solid red;">{{ name }}</au-button>
</template>
