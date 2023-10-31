<script setup lang="ts">
import { isEffectArray } from 'asura-eye'
const props = defineProps({
  dataSource: {
    type: Array
  }
})

console.log(props)

defineOptions({
  name: 'AuTable',
  inheritAttrs: false
})
</script>

<template>
  <div class="au-table">
    <table :border="0" :cellspacing="0">
      <thead>
        <tr>
          <slot :title="true" />
        </tr>
      </thead>
      <tbody v-if="isEffectArray(props.dataSource)">
        <tr v-for="(record, i) in props.dataSource" :key="i">
          <slot :row="record" :title="false" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
$border: 1px solid #000;
.au-table {
  padding: 20px 10px;
  background: #fff;

  table {
    border: 1px solid #000;
    border-radius: 4px;
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
