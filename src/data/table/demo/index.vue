<script setup lang="ts">
import { AuTable, AuTableColumn } from '..'
const dataSource = [
  { id: '1', value: '111' },
  { id: '2', value: '1121' },
  { id: '3', value: '1113' },
  { id: '4', value: '1114' }
  // { id: '5', value: '111' },
  // { id: '6', value: '111' },
  // { id: '7', value: '111' },
  // { id: '8', value: '111' },
  // { id: '9', value: '111' },
  // { id: '10', value: '111' },
  // { id: '11', value: '111' },
  // { id: '12', value: '111' },
  // { id: '13', value: '111' },
]
</script>

<template>
  <!-- <au-table :data-source="dataSource">
    <au-table-column prop="id" label="id" />
    <au-table-column prop="value" label="value" />
  </au-table> -->
  <au-table :data-source="dataSource">
    <template #default="row">
      <au-table-column prop="id" label="id" :row="row"/> 
      <au-table-column prop="value" label="value" :row="row" />
    </template>
  </au-table>
</template>
