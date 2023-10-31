<script setup lang="ts">
defineOptions({
  name: 'AuTableColumn',
  inheritAttrs: false
})

const scope = defineProps({
  prop: {
    type: String,
    default: '',
  },
  label: {
    type: [Object, String]
  },
  title: {
    type: Boolean
  },
  row: {
    type: Object,
    // default: ()=>({})
  }
})

</script>

<template>
  <th v-if="scope.row && (scope.row as any).title">
    {{ scope.label }}
  </th>
  <td v-else>
    {{ scope.row && (scope.row as any).row[scope.prop] }}
  </td>
</template>
