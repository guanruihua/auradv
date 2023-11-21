<script setup lang="ts">
import { AuTable } from '..'
const dataSource = [
  { id: '1', value: '111' },
  { id: '2', value: '1121' },
  { id: '3', value: '1113' },
  { id: '4', value: '1114' },
  { id: '5', value: '111' },
  { id: '6', value: '111' },
  { id: '7', value: '111' },
  { id: '8', value: '111' },
  { id: '9', value: '111' },
  { id: '10', value: '111' },
  { id: '11', value: '111' },
  { id: '12', value: '111' },
  { id: '13', value: '111' },
]
const columns = [
  { prop: 'id', label: 'head id' },
  { prop: 'value', label: 'head Value' }
]
</script>

<template>
  <au-table style="background: #fff;" :data-source="dataSource" :columns="columns">
    <template #head-id>
      id
    </template>
    <template #id="scope">
      No.{{ scope.row.id }}
    </template>
  </au-table>
</template>
