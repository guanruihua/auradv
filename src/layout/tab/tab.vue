<script setup lang="ts">
defineOptions({ name: 'AuTabs' })
import { onMounted, watch, ref } from 'vue'
import { isEffectArray } from 'asura-eye'
import { type ObjectType } from 'abandonjs'

const props = withDefaults(defineProps<{ items?: any[] }>(), {
  items: () => []
})

const active = ref()
watch(
  () => [props.items],
  () => {
    if (isEffectArray<ObjectType>(props.items)) {
      active.value = props.items[0].prop || ''
    }
  },
  {
    immediate: true,
    deep: true
  }
)

onMounted(() => {
  if (isEffectArray<any>(props.items)) {
    active.value = props.items[0].prop || ''
  }
})
</script>

<template>
  <div class="au-tabs">
    <div
      class="au-tabs-title"
      :style="[{ gridTemplateColumns: `repeat(${items.length},1fr)` }]"
    >
      <div
        v-for="(item, i) in items"
        :key="i"
        :class="[{ active: item.prop === active }]"
        @click="() => (active = item.prop)"
      >
        <slot :name="'title-icon-' + item.prop">
          <a-icon
            v-if="item.icon"
            :icon="item.icon"
            style="font-size: 20px; margin-right: 10px"
            v-bind="item.iconProps || {}"
          />
        </slot>
        <slot :name="'title-' + item.prop">
          {{ item.title }}
        </slot>
      </div>
    </div>
    <div class="au-tabs-content">
      <div v-for="(item, i) in items" :key="i">
        <slot v-if="item.prop === active" :name="item.prop">
          {{ item.prop }}
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$c: var(--c);
$oc: var(--oc);
$ob: var(--ob);
$ac: var(--ac);
$ab: var(--ab);

.au-tabs {
  border-radius: 12px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  &-title {
    transition: all 0.3s;
    display: grid;
    text-align: center;
    font-size: 16px;
    border-bottom: 3px solid $c;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      font-weight: bold;
      background-color: $ob;
      color: $oc;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      cursor: pointer;

      &:hover {
        color: $c;
      }

      &.active {
        background-color: $ab;
        color: $ac;

        &:hover {
          color: #f7f9ff;
        }
      }
    }
  }

  &-content {
    transition: all 0.3s;
    padding: 10px;
  }
}
</style>
