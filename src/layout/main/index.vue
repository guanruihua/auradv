<script setup lang="ts">
import { type CSSProperties, onMounted, ref } from 'vue'

defineOptions({
  name: 'AuMain'
})
const auMainDom = ref()
const myStyle = ref<CSSProperties>({
  'grid-template-rows': '40px 1fr 40px'
})
const init = () => {
  if (!auMainDom.value) return
  const len = auMainDom.value.childNodes.length
  const firstDom = auMainDom.value.childNodes[0] as HTMLDivElement
  const lastDom = auMainDom.value.childNodes[len - 1] as HTMLDivElement
  const rows = ['40px', '1fr', '40px']
  if (!firstDom.className || firstDom.className !== 'au-header') {
    rows[0] = ''
  } else {
    const { height } = firstDom.getBoundingClientRect()
    rows[0] = height + 'px'
  }
  if (!lastDom.className || lastDom.className !== 'au-footer') {
    rows[2] = ''
  } else {
    const { height } = lastDom.getBoundingClientRect()
    rows[2] = height + 'px'
  }
  myStyle.value['grid-template-rows'] = rows.join(' ')
}
onMounted(init)
</script>

<template>
  <div ref="auMainDom" class="au-main" :style="myStyle">
    <slot />
  </div>
</template>

<style lang="scss">
.au-main {
  position: relative;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 40px 1fr 40px;
  gap: 1px;
}
</style>
