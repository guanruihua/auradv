import { defineComponent } from 'vue'
import {
  type MenuItemType,
  AuMenu,
  AuHeader,
  AuFooter,
  AuContent
} from '@/layout'
import { RouterLink, RouterView } from 'vue-router'
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
    // console.log(this.showRoutes)
    return (
      <div class="wrapper">
        <div class="aside">
          <AuMenu>
            {this.showRoutes.map((item: any) => {
              return (
                <RouterLink key={item.name} to={item.path}>
                  {item.name}
                </RouterLink>
              )
            })}
          </AuMenu>
        </div>
        <AuContent class="main">
          <AuHeader> heeder </AuHeader>
          <RouterView />
          <AuFooter> footer </AuFooter>
        </AuContent>
      </div>
    )
  }
})
