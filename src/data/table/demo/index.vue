<script setup lang="ts">
import { AuTable, AuTableColumn } from '..'
const dataSource = [
  { id: '1', value: '111' },
  { id: '2', value: '111' },
  // { id: '3', value: '111' },
  // { id: '4', value: '111' },
  // { id: '5', value: '111' },
  // { id: '6', value: '111' },
  // { id: '7', value: '111' },
  // { id: '8', value: '111' },
  // { id: '9', value: '111' },
  // { id: '10', value: '111' },
  // { id: '11', value: '111' },
  // { id: '12', value: '111' },
  // { id: '13', value: '111' }
]
</script>

<template>
  <au-table :data-source="dataSource">
    <template #default="scope">
      <th v-if="(scope as any).title">
        {{ scope }}
      </th>
      <td v-else>
        {{ scope }}
      </td>
    </template>
  </au-table>
  
  <au-table :data-source="dataSource">
    <au-table-column prop="id" label="id">
      <template #default="scope">
        {{ scope.row }}
      </template>
    </au-table-column>
    <au-table-column prop="value" label="value" >
      <template #default="scope">
        {{ scope.row }}
      </template>
    </au-table-column>
  </au-table>
</template>
