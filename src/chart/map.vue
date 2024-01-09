<script setup lang="ts">
defineOptions({ name: 'AuMapChart' })

import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import geoJson from './world.json'
import { type ObjectType } from 'abandonjs';

const props = withDefaults(defineProps<{
  geoName: string,
  // 指定图表的配置项和数据
  geo: ObjectType,
  options?: ObjectType
}>(),{
  geoName: 'world',
  geo: geoJson
})

const main = ref() // 使用ref创建虚拟DOM引用，使用时用main.value
const chart = ref()

function init(){
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(main.value)
  echarts.registerMap(props.geoName, props.geo as any)
  watch(
    () => [props.geo],
    ([newGeo]) => {
      echarts.registerMap(props.geoName, newGeo as any)
    },
    {
      deep: true,
      immediate: true,
    },
  )

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(props.options)

  chart.value = myChart
  window.addEventListener('resize', function(){
    myChart.resize()
  })
}

onMounted(() => {
  init()
})
defineExpose({ chart })
</script>

<template>
  <div
    ref="main"
    class="a-chart a-map-chart"
    style="width: 100%; height: 400px"
  ></div>
</template>
