import { defineComponent } from 'vue'
import { isNumber } from 'asura-eye'
import './index.scss'

const getStyle = (type: string, layout: any[]) => {
  const myLayout = layout
    .map((item) => {
      if (isNumber(item)) {
        return item + 'fr'
      }
      return item
    })
    .join(' ')
  if (['col', 'column'].includes(type)) {
    return {
      gridTemplateColumns: myLayout
    }
  }
  if (['row'].includes(type)) {
    return {
      gridTemplateRows: myLayout
    }
  }
  return {}
}

export const AuGrid = defineComponent({
  name: 'AuGrid',
  props: {
    type: {
      type: String,
      default: 'col'
    },
    layout: {
      type: Array,
      default: () => []
    }
  },
  setup() {},
  render() {
    return (
      <div class="au-grid" style={getStyle(this.type, this.layout)}>
        {this.$slots.default()}
      </div>
    )
  }
})
