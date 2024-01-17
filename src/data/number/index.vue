<script setup lang="ts">
defineOptions({ name: 'AuNumber' })
import { ref, withDefaults, watch } from 'vue'
import { isNumber } from 'asura-eye'
import type { AuNumberProps } from './type'
const props = withDefaults(defineProps<AuNumberProps>(), { value: 0 })
const valueRef = ref(0)
watch(
  () => props.value,
  (newVal, oldVal = 0) => {
    if (isNumber(oldVal) && isNumber) {
      valueRef.value = oldVal + 1

      const run = () => {
        const gap = Math.abs(valueRef.value - newVal)
        const len = gap.toString().length
        // const num = Number(new Array(len - 1).fill(7).join(''))
        const num = Number(String().padStart(len - 1, '7'))

        if (oldVal < newVal && valueRef.value < newVal) {
          if (gap < 20) {
            valueRef.value++
            requestAnimationFrame(run)
            return
          }
          valueRef.value += num
          requestAnimationFrame(run)
        }
        if (oldVal > newVal && valueRef.value > newVal) {
          if (gap < 20) {
            valueRef.value--
            requestAnimationFrame(run)
            return
          }
          valueRef.value -= num
          requestAnimationFrame(run)
        }
      }
      run()
    } else if (isNumber(newVal)) {
      valueRef.value = newVal
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <span class="au-number">{{ valueRef }}</span>
</template>
