<script setup lang="ts">
import type { AuPopoverProps } from './popover'
import { withDefaults } from 'vue'
import { usePopover } from './hook'
defineOptions({
  name: 'au-popover'
})
const props = withDefaults(defineProps<AuPopoverProps>(), {
  placement: 'top'
})
const { popoverXY, triangleXY } = usePopover(props)
</script>

<template>
  <div class="au-popover" ref="au-popover">
    <div class="content" ref="popoverWrapper" :style="[popoverXY]">
      <slot name="content">Content</slot>
    </div>
    <span class="inner">
      <slot></slot>
    </span>
    <div class="triangle" :style="[triangleXY]" />
  </div>
</template>

<style lang="scss" scope>
.au-popover {
  position: relative;
  border-radius: 12px;

  & > .triangle {
    position: absolute;
    width: 0;
    height: 0;
    z-index: 9999;
    border-color: #eee;
    border-width: 8px;
    border-style: solid;
  }
  & > .content {
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
    z-index: 9999;
    padding: 18px;
    background: #eee;
    border: none;
    border-radius: 12px;
  }
}
</style>
