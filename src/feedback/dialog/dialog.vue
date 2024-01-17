<script setup lang="ts">
import type { StyleType, ClassNameType } from '@/type'
import { withDefaults } from 'vue'
defineOptions({
  name: 'AuDialog',
  inheritAttrs: false
})
const props = withDefaults(
  defineProps<{
    open?: boolean
    close?: () => void
    cancel?: () => void
    confirm?: () => void
    style?: StyleType
    class?: ClassNameType
  }>(),
  {
    open: false
  }
)
</script>

<template>
  <transition>
    <div
      v-show="open"
      class="au-dialog"
      :style="{ display: props.open ? 'block' : 'none' }"
    >
      <div class="au-dialog-box" :class="props.class" :style="props.style">
        <div class="au-dialog-header">
          <slot name="header">
            <div class="au-dialog-header-title">Title</div>
            <button class="au-dialog-header-close-logo" @click="props.close">
              X
            </button>
          </slot>
        </div>
        <div class="au-dialog-content">
          <slot></slot>
        </div>
        <div class="au-dialog-footer">
          <slot name="footer">
            <button @click="props.cancel">Cancel</button>
            <button @click="props.confirm">Confirm</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
$padding: 24px;

.au-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999999;
  overflow: hidden;
  // transition: display 3s;

  &-box {
    position: absolute;
    top: 16vh;
    left: 0;
    right: 0;

    width: 400px;
    margin: auto;

    background: #fff;
    border-radius: 12px;
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: $padding;

    &-title {
      display: block;
      font-weight: bold;
    }
    button {
      cursor: pointer;
    }
    &-close-logo {
      display: block;
      border: none;
      background: transparent;
    }
  }

  &-content {
    padding-left: $padding;
    padding-right: $padding;
  }
  &-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    padding: $padding;
    gap: 10px;

    button {
      padding: 6px 10px;
      border: 1px solid #4c4d4f;
      background: transparent;
      border-radius: 12px;
      cursor: pointer;
      &:hover {
        background: gray;
      }
    }
  }
}
</style>
