<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type Ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { type ObjectType } from 'abandonjs'
import { isArray } from 'asura-eye'
import { routes } from './router'
import { type MenuItemType, AuMenu } from '@/layout'
const showRoutes: Ref<ObjectType[]> = ref<ObjectType[]>([])

// import * as Cmm  from '../src'
// console.log(Cmm)
const init = () => {
  if (isArray(routes)) {
    const newList: ObjectType[] = []
    routes.forEach(item => {
      if (item.path !== '/') {
        newList.push(item as ObjectType)
      }
    })
    showRoutes.value = newList
  }
}
onMounted(init)

</script>

<template>
  <div class="wrapper">
    <div class="aside">
      <au-menu>      
        <RouterLink 
          v-for="item in showRoutes"
          :key="(item.name as string)"
          :to="(item.path as string)">
          {{ item.name }}
        </RouterLink>
      </au-menu>
    </div>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<style>
body {
  background: #fafafa;
  background: rgb(59, 59, 59);
}
</style>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
}
.main{
  padding: 10px 24px;
}

@media (min-width: 1024px) {}
</style>
