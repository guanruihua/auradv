<script setup lang="ts">
import { AuButton } from '..'
const list: any[] = ['default', 'primary', 'success', 'info', 'warming', 'danger']
</script>

<template>
  <au-button v-for="name in list" :type="name">{{ name }}</au-button>
</template>
