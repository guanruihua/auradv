<script setup lang="ts">
defineOptions({ name: 'AChart' })
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  // 指定图表的配置项和数据
  options: {
    type: Object,
    default: () => ({}),
  },
})
const widthRef = ref('100%')
const main = ref() // 使用ref创建虚拟DOM引用，使用时用main.value
const chart = ref(null)

function init(){
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(main.value)
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
    class="a-chart"
    :style="{ width: widthRef, height: '400px' }"
  ></div>
</template>

<style>
.a-chart {
  /* box-shadow: 2px 0 8px rgba(0, 21, 41, 0.35); */
  /* border-radius: 12px; */
  /* padding: 15px 8px; */
  /* margin-bottom: 12px; */
  background: transparent;
  /* overflow: hidden; */
}
</style>
