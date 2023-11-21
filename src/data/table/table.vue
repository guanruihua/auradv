<script setup lang="ts">
import { type Ref } from 'vue'

defineOptions({
  name: 'AuTable',
  inheritAttrs: false
})

import { ref, watch } from 'vue'
import { isEffectArray, isEffectObject } from 'asura-eye'

const props = defineProps({
  dataSource: {
    type: Array<any>
  },
  columns: {
    type: Array<any>
  },
  style: {
    type: Object
  }
})
const showDataSource: Ref<any[]> = ref<any[]>(props.dataSource as any[])
const showColumns = ref<any[]>(props.columns as any[])

watch(
  () => props.dataSource,
  () => {
    showDataSource.value = props.dataSource as any[]
  }
)
watch(
  () => props.columns,
  () => {
    showColumns.value = props.columns as any[]
  }
)
</script>

<template>
  <div class="au-table" :style="props.style">
    <table :border="0" :cellspacing="0">
      <thead v-if="isEffectArray(showDataSource)">
        <tr>
          <th v-for="(column, index) in showColumns" :key="index">
            <slot :col="column" :name="`header-${column.prop}`">
              {{ column.label }}
            </slot>
          </th>
        </tr>
      </thead>
      <tbody v-if="isEffectArray(showDataSource)">
        <tr v-for="(row, num) in showDataSource" :key="num">
          <td v-for="(column, index) in showColumns" :key="index">
            <slot v-if="isEffectObject(row)" :row="row" :index="index" :name="column.prop || index">
              {{ row[column.prop] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
$border: 1px solid #000;

.au-table {
  display: inline-block;
  padding: 8px;
  border-radius: 12px;

  table {
    border: 1px solid #000;
    border-radius: 12px;
  }

  th,
  td {
    padding: 4px 11px;
    box-sizing: border-box;
    border-right: $border;
    border-bottom: $border;
  }

  th {
    border-bottom: none;
  }

  th:last-child,
  td:last-child {
    border-right: none;
  }

  tbody > tr:first-child > td {
    border-top: $border;
  }

  tbody > tr:last-child > td {
    border-bottom: none;
  }
}
</style>
