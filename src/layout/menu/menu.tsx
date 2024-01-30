import { defineComponent, ref, onMounted } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import './index.scss'

export default defineComponent({
  name: 'AuMenu',
  props: {
    routes: {
      type: Array,
      default: () => []
    },
    hiddenPath: {
      type: Array,
      default: () => ['/']
    },
    hiddenName: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const router = useRouter()

    const nowRouter = ref({})

    router.beforeEach((to) => {
      nowRouter.value = to
    })
    onMounted(() => {
      nowRouter.value = router.currentRoute.value
    })
    return { nowRouter }
  },
  render() {
    return (
      <div class="au-menu">
        {this.routes.map((item) => {
          if (
            this.hiddenName.includes(item.name) ||
            this.hiddenPath.includes(item.path)
          )
            return
          return (
            <div class={{ active: item.name === this.nowRouter.name }}>
              <RouterLink
                class={{ active: item.name === this.nowRouter.name }}
                to={item.path}
              >
                {item.name}
              </RouterLink>
              {item.children && (
                <AuMenu
                  routes={item.children}
                  hiddenName={this.hiddenName}
                  hiddenPath={this.hiddenPath}
                />
              )}
            </div>
          )
        })}
      </div>
    )
  }
})
