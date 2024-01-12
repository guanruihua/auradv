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
@import url(./table.scss);
</style>
