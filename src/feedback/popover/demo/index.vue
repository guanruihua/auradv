<script setup lang="ts">
import { AuPopover } from '..'
</script>

<template>
  <div class="container">
    <div class="content">
      <div v-for="pl in ['top', 'right', 'bottom','left']" :class="pl" key="pl">
        <au-popover :placement="pl">
          <div class="p-inner" style="color: #fff; background: green">{{ pl }}</div>
        </au-popover>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  div {
    text-align: center;
    border-radius: 12px;
  }
  .p-inner{
    padding: 12px;
  }
}
.content {
  position: relative;
  width: 400px;
  height: 400px;
  background: gray;
  border-radius: 12px;
}
.content > div {
  position: absolute;
  width: 100px;
  height: 50px;
  // background: rgb(108, 68, 68);
  margin: auto;
}
.top {
  top: 0;
  left: 0;
  right: 0;
}

.right {
  right: 0;
  top: 0;
  bottom: 0;
}
.bottom {
  bottom: 0;
  left: 0;
  right: 0;
}
.left {
  left: 0;
  top: 0;
  bottom: 0;
}
</style>
