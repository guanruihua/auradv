<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type Ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { type ObjectType } from 'abandonjs'
import { isArray } from 'asura-eye'
import { routes } from './router'
import { type MenuItemType, AuMenu, AuHeader } from '@/layout'
const showRoutes: Ref<ObjectType[]> = ref<ObjectType[]>([])

// import * as Cmm  from '../src'
// console.log(Cmm)
const init = () => {
  if (isArray(routes)) {
    const newList: ObjectType[] = []
    routes.forEach((item) => {
      if (item.path !== '/') {
        newList.push(item as ObjectType)
      }
    })
    showRoutes.value = newList
  }
}
onMounted(init)
// document.body.className = 'dark'
// document.body.className = 'dark'
</script>

<template>
  <div class="wrapper">
    <div class="aside">
      <au-menu>
        <router-link
          v-for="item in (showRoutes as any)"
          :key="item.name"
          :to="item.path" >
          {{ item.name }}
        </router-link>
      </au-menu>
    </div>
    <div class="main">
      <au-header >
        aaa
      </au-header>
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  background: #fafafa;
  /* background: rgb(59, 59, 59); */
}
</style>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
}

.main {
  padding: 10px 24px;
}

@media (min-width: 1024px) {}
</style>

