<script setup lang="ts">
defineOptions({
  name: 'AuMenu',
  inheritAttrs: false,
})
</script>

<template>
  <div class="au-menu">
    <slot/>
  </div>
</template>

<style lang="scss">
.au-menu {
  min-height: 100vh;
  // border-right: 1px solid #eee;
  padding-top: 20px;
  padding-bottom: 20px;

  a {
    display: block;
    height: 32px;
    line-height: 32px;
    min-width: 10vw;
    color: #fff;
    font-weight: bold;
    padding: 0 32px;
    margin-bottom: 10px;
    &.active,
    &:focus,
    &:active,
    &:hover{
      background-color: #999999;
    }
  }
}
</style>