<script setup lang="ts">
import { AuButton } from '..'
import { AuGrid, AuFlex } from '@/layout'
const list: string[] = [
  'default',
  'primary',
  'success',
  'info',
  'warming',
  'danger'
]
</script>

<template>
  <div class="btn">浮雕阴影</div>
  <div class="btn">浮雕阴影</div>
  <div class="btn2"></div>
  <au-grid :layout="[1]">
    <au-flex>
      default:
      <au-button v-for="name in list" :type="name">{{ name }}</au-button>
    </au-flex>
    <au-flex>
      plain:
      <au-button plain v-for="name in list" :type="name">{{ name }}</au-button>
    </au-flex>
  </au-grid>
</template>

<style lang="scss">
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 120px;
  height: 120px;
  margin: 12px;
  // background: #e9ecef;
  color: #333;
  font-size: 18px;
  font-weight: 600;

  box-shadow:
    7px 7px 12px rgba(0, 0, 0, 0.4),
    -7px -7px 12px rgba(255, 255, 255, 0.9);
}

.btn:nth-child(2) {
  box-shadow:
    inset -7px -7px 12px rgba(255, 255, 255, 0.9),
    inset 7px 7px 12px rgba(0, 0, 0, 0.4);
}
.btn2 {
  width: 220px;
  height: 90px;
  border-radius: 90px;
  margin: 10px;
  box-shadow:
    0 -3px 4px #999,
    inset 0 3px 5px #333,
    0 4px 4px #ffe,
    inset 0 -3px 5px #ddd;
}
</style>
