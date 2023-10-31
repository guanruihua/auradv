<script setup lang="ts">
defineOptions({
  name: 'AuForm',
  inheritAttrs: false,
})
</script>

<template>
  <form class="au-form">
    <slot/>
  </form>  
</template>

<style lang="scss">
// @prefix:"au-form";

.au-form{
  display: flex;
  flex-wrap: wrap;
}

</style>
