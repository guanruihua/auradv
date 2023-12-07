<script setup lang="ts">
import { withDefaults } from 'vue'
import type { AuTableProps } from './table'
import { useColumn } from './hook'

defineOptions({
  name: 'AuTable',
  inheritAttrs: false
})

import { isEffectArray, isEffectObject } from 'asura-eye'

const props = withDefaults(defineProps<AuTableProps>(), {
  dataSource: () => [],
  columns: () => []
})

const { columnRef } = useColumn(props)
</script>

<template>
  <div class="au-table" ref="au-table" :style="props.style">
    <table :border="0" :cellspacing="0">
      <thead v-if="isEffectArray(dataSource)">
        <tr>
          <th v-for="(column, index) in columnRef" :key="index">
            <slot :col="column" :name="`header-${column.prop}`">
              {{ column.label }}
            </slot>
          </th>
        </tr>
      </thead>
      <tbody v-if="isEffectArray(dataSource)">
        <tr v-for="(row, num) in dataSource" :key="num">
          <td v-for="(column, index) in columnRef" :key="index">
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
// $border: 1px solid #000;
$border: none;

.au-table {
  display: block;
  width: 100%;
  border-radius: 12px;

  table {
    width: 100%;
    border: $border;
    border-radius: 12px;
    border-collapse: collapse;
    border-spacing: 0;
  }
  thead,
  tbody {
    width: 100%;
  }

  th,
  td {
    text-align: left;
    padding: 12px 12px;
    &:first-child {
      padding-left: 24px;
    }
    &:last-child {
      padding-right: 24px;
    }
  }

  th {
    border-bottom: none;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  th:last-child,
  td:last-child {
    border-right: none;
  }
  tbody > tr {
    background: transparent;
    td {
      background: transparent;
    }
    &:last-child {
      // td {
      //   padding-bottom: 16px;
      // }
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    &:nth-child(2n + 1) {
      background: rgba(240, 240, 240, 0.5);
    }
    &:active,
    &:hover {
      background: rgb(240, 240, 240);
    }
  }
  tbody > tr:first-child > td {
    border-top: $border;
  }

  tbody > tr:last-child > td {
    border-bottom: none;
    &:first-child {
      border-bottom-left-radius: 12px;
    }
    &:last-child {
      border-bottom-right-radius: 12px;
    }
  }
}
</style>
