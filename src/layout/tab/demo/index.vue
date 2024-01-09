<script setup lang="ts">
import { AuTab } from '..'
const items = [
  {
    title: 'Tab-a',
    prop: 'tab-a'
  },
  {
    title: 'Tab-b',
    prop: 'tab-b'
  },
]
</script>

<template>
  <au-tab :items="items"></au-tab>
</template>