<script setup lang="ts">
const scope = defineProps({
  prop: {
    type: String
  },
  label: {
    type: [Object, String]
  },
  title: {
    type: Boolean
  }
})
console.log(scope)

defineOptions({
  name: 'AuTableColumn',
  inheritAttrs: false
})
</script>

<template>
  <th v-if="(scope as any).title">
    <slot :row="scope">
      {{ scope.label }}
    </slot>
  </th>
  <td v-else>
    <slot :row="scope">
      {{ scope }}
    </slot>
  </td>
</template>

<style lang="scss"></style>
