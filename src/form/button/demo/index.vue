<script setup lang="ts">
import { AuButton } from '..'
import { AuGrid, AuFlex } from '@/layout'
const list: string[] = [
  'default',
  'primary',
  'success',
  'info',
  'warming',
  'danger'
]
</script>

<template>
  <au-grid :layout="[1]">
    <au-flex>
      default:
      <au-button v-for="name in list" :type="name">{{ name }}</au-button>
    </au-flex>
    <au-flex>
      plain:
      <au-button plain v-for="name in list" :type="name">{{ name }}</au-button>
    </au-flex>
  </au-grid>
</template>