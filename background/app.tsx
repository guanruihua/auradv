import { defineComponent } from 'vue'
import {
  type MenuItemType,
  AuMenu,
  AuHeader,
  AuFooter,
  AuContent,
  AuMain
} from '@/layout'
import { RouterView } from 'vue-router'
import './index.scss'
import { onMounted, ref } from 'vue'
import { type Ref } from 'vue'
import { isArray } from 'asura-eye'
import { routes } from './router'

export default defineComponent({
  name: 'App',
  components: {},
  props: {},
  setup() {
    const showRoutes: Ref<MenuItemType[]> = ref<MenuItemType[]>([])
    const init = () => {
      if (isArray(routes)) {
        const newList: MenuItemType[] = []
        routes.forEach((item) => {
          if (item.path !== '/') {
            newList.push(item as unknown as MenuItemType)
          }
        })
        showRoutes.value = newList
      }
    }
    onMounted(init)
    // document.body.className = 'dark'

    return { showRoutes, init }
  },
  render() {
    return (
      <div class="wrapper">
        <AuMenu class="aside" routes={routes} />
        <AuMain class="main">
          <AuHeader></AuHeader>
          <AuContent>
            <RouterView />
          </AuContent>
          <AuFooter></AuFooter>
        </AuMain>
      </div>
    )
  }
})
