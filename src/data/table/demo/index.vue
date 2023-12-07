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
  { id: '13', value: '111' }
]
const columns = [
  { prop: 'id', label: 'head id' },
  { prop: 'value', label: 'head Value 1' },
  { prop: 'value', label: 'head Value 2' },
  { prop: 'value', label: 'head Value 3' },
  { prop: 'value', label: 'head Value 4' },
  { prop: 'value', label: 'head Value 5' },
  { prop: 'value', label: 'head Value 6' },
  { prop: 'value', label: 'head Value 7' },
  { prop: 'value', label: 'head Value 8' },
  { prop: 'value', label: 'head Value 9' },
  { prop: 'value', label: 'head Value 10' },
  { prop: 'value', label: 'head Value 11' },
  { prop: 'value', label: 'head Value 12' },
  { prop: 'value', label: 'head Value 13' }
]
</script>

<template>
  <div>
    <!-- aaaa -->
    <au-table style="background: #fff" :data-source="dataSource" :columns="columns">
      <template #header-id> id </template>
      <template #id="scope"> No.{{ scope.row.id }} </template>
    </au-table>
  </div>
</template>
