<script setup lang="ts">
defineOptions({
  name: 'AuButton',
  inheritAttrs: false
})
const { type = 'default' } = withDefaults(
  defineProps<{
    type?:
      | 'default'
      | 'primary'
      | 'success'
      | 'info'
      | 'warming'
      | 'danger'
      | string
    plain?: boolean
  }>(),
  {
    type: 'default'
  }
)
</script>

<template>
  <button v-bind="$attrs" :class="[`au-button`, type, { plain }]">
    <slot> Click </slot>
  </button>
</template>

<style lang="scss">
.au-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  line-height: 32px;
  padding: 0 15px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  color: #65676b;
  background: transparent;
  outline: none;
  border: none;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  transition: color 0.5s ease, background-color 0.5s ease;

  &.default {
    &:hover {
      color: #509eff;
      border-color: #509eff;
      background-color: #edf5ff;
    }

    &.plain {
      &:hover {
        background-color: #fff;
      }
    }
  }

  @mixin btn-style($color, $nextColor) {
    color: $color;
    background-color: $nextColor;
    border-color: $nextColor;

    &:hover {
      color: $nextColor;
      background-color: $color;
    }

    &.plain {
      color: $nextColor;
      background-color: $color;

      &:hover {
        color: $color;
        background-color: $nextColor;
      }
    }
  }

  &.primary {
    @include btn-style(#fff, #509eff);
  }

  &.success {
    @include btn-style(#fff, #70c341);
  }

  &.info {
    @include btn-style(#fff, #909399);
  }

  &.warming {
    @include btn-style(#fff, #e1a23b);
  }

  &.danger {
    @include btn-style(#fff, #ee6a69);
  }
}
</style>
