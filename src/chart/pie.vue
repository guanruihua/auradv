<script setup lang="ts">
defineOptions({ name: 'APieChart' })
import AChart from './index.vue'

defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
  data: {
    type: Array,
    default: () => ([
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' },
      { value: 30, name: 'Video Ads1' },
      { value: 36, name: 'hhh Ads1' },
      { value: 100, name: 'llll Ads1' },
    ]),
  },
})

const getOptions = data => ({
  tooltip: { trigger: 'item' },

  // legend: {
  //   orient: 'vertical',
  //   // left: 'right',
  //   top: '40%',
  //   right: '5%',

  //   textStyle: {
  //     align: 'left',
  //     verticalAlign: 'middle',
  //     rich: {
  //       name: {
  //         color: 'rgba(0,0,0,0.5)',
  //         fontSize: 12,
  //       },
  //       value: {
  //         color: 'rgba(0,0,0,0.5)',
  //         fontSize: 12,
  //       },
  //       rate: {
  //         color: 'rgba(0,0,0,0.9)',
  //         fontSize: 12,
  //       },
  //     },
  //   },
  //   formatter: name => {
  //     if (data.length) {
  //       const item = data.filter(item => item.name === name)[0]
  //       return `{name|${name} | }{rate| ${item.value / 100}%} {value| ${item.value
  //       }} `
  //     }
  //   },
  // },
  graphic: {
    type: 'text',
    left: 'center',
    top: 'center',
    style: {
      // text: '总数',
      text: '总数' + '\n\n' + data.reduce((n, i) => (n += i.value), 0),

      textAlign: 'center',
      fill: '#333',
      width: 30,
      height: 30,
      fontSize: 14,
    },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: [ '30%', '49%' ],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 2,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      data,
    },
  ],
})
</script>

<template>
  <a-chart style="height: 450px" :options="getOptions(data)" />
</template>
