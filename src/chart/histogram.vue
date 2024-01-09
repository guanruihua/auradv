<script setup lang="ts">
defineOptions({ name: 'AHistogramChart' })
import AChart from './index.vue'
const options = {
  xAxis: { type: 'value' },
  yAxis: {
    type: 'category',
    data: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
  },
  // xAxis: {
  //   type: 'category',
  //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  // },
  // yAxis: {
  //   type: 'value',
  // },
  series: [
    {
      data: [ 150, 230, 224, 218, 135, 147, 260 ],
      type: 'bar',
    },
  ],
}
</script>

<template>
  <a-chart :options="options" />
</template>
