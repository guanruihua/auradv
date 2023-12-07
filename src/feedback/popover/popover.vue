<script setup lang="ts">
import type { AuPopoverProps } from './popover'
import { withDefaults } from 'vue'
import { usePopover } from './hook'
defineOptions({
  name: 'au-popover'
})
const props = withDefaults(defineProps<AuPopoverProps>(), {})
usePopover(props)

</script>

<template>
  <div class="au-popover" ref="au-popover">
    <div class="content" ref="popoverWrapper">
      <slot name="content"> content </slot>
    </div>
    <slot></slot>
    <div class="triangle" />
  </div>
</template>

<style lang="scss" scope>
.au-popover {
  position: relative;
  display: inline-block;
  border-radius: 12px;
  padding: 10px 12px;
  color: #fff;
  background: gainsboro;
  &>.triangle{
    position: absolute;
    top: 35px;
    left: 18px;
    width: 0;
    height: 0;
    z-index: 9999;
    border-color: #eee;
    border-width: 8px;
    border-style: solid;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
  }
  & > .content {
    position: absolute;
    top: 50px;
    left: 0;
    color: #000;
    padding: 12px 18px;
    background: #eee;
    border: none;
    border-radius: 12px;
  }
}
</style>
