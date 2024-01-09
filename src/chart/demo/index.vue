<script setup lang="ts">
import { AuMapChart } from '..'
const options = {
  tooltip: {
    trigger: 'item',
    showDelay: 0,
    transitionDuration: 0.2
  },
  visualMap: {
    left: 'right',
    min: 500000,
    max: 38000000,
    inRange: {
      color: [
        '#313695',
        '#4575b4',
        '#74add1',
        '#abd9e9',
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#f46d43',
        '#d73027',
        '#a50026'
      ]
    },
    text: ['High', 'Low'],
    calculable: true
  },
  toolbox: {
    show: true,
    orient: 'horizontal',
    // right: 'right',
    top: 'top',
    feature: {
      // dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  select: { disabled: true },
  series: [
    {
      name: 'World Map',
      type: 'map',
      roam: true,
      map: 'world',
      // nameProperty: 'pid',
      nameProperty: 'NAME',
      emphasis: { label: { show: false } },
      data: []
      // data: [
      //   { name: 'Alabama', value: 4822023 },
      // ...
      // ],
    }
  ]
}
</script>

<template>
  <au-map-chart :options="options" style="width: 600px; height: 400px" />
</template>
