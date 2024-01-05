<script setup lang="ts">
defineOptions({
  name: 'AuButton',
  inheritAttrs: false
})
const { type = 'default' } = withDefaults(defineProps<{
  type?: 'default' | 'primary' | 'success' | 'info' | 'warming' | 'danger' | string,
  plain?: boolean,
}>(), {
  type: 'default'
})

</script>

<template>
  <button v-bind="$attrs" :class="[`au-button`, type, { plain }]">
    <slot> Click </slot>
  </button>
</template>

<style lang="scss">
.au-button {
  display: inline-flex;
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
  transition: all .5s ease;

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

  &.primary {
    color: #fff;
    background-color: #509eff;
    border-color: #509eff;

    &:hover {
      color: #509eff;
      background-color: #edf5ff;
    }

    &.plain {
      color: #509eff;
      background-color: #edf5ff;

      &:hover {
        color: #fff;
        background-color: #509eff;
      }
    }
  }

  &.success {
    color: #fff;
    background-color: #70c341;
    border-color: #70c341;

    &:hover {
      color: #70c341;
      background-color: #f1f9eb;
    }

    &.plain {
      color: #70c341;
      background-color: #f1f9eb;

      &:hover {
        color: #fff;
        background-color: #70c341;
      }
    }
  }

  &.info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover {
      color: #909399;
      background-color: #f4f4f5;
    }

    &.plain {
      color: #909399;
      background-color: #f4f4f5;

      &:hover {
        color: #fff;
        background-color: #909399;
      }
    }
  }

  &.warming {
    color: #fff;
    background-color: #e1a23b;
    border-color: #e1a23b;

    &:hover {
      color: #e1a23b;
      background-color: #fcf6ec;
    }

    &.plain {
      color: #e1a23b;
      background-color: #fcf6ec;

      &:hover {
        color: #fff;
        background-color: #e1a23b;
      }
    }
  }

  &.danger {
    color: #fff;
    background-color: #ee6a69;
    border-color: #ee6a69;

    &:hover {
      color: #ee6a69;
      background-color: #fdf0f0;
    }

    &.plain {
      color: #ee6a69;
      background-color: #fdf0f0;

      &:hover {
        color: #fff;
        background-color: #ee6a69;
      }
    }
  }
}
</style>
