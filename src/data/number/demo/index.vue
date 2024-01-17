<script setup lang="ts">
import { AuNumber } from '..'
import { AuButton } from '@/form'
import {ref} from 'vue'
const valueRef = ref(100)
</script>

<template>
  <au-number :value="valueRef"/>
  <au-button @click="valueRef = 30">set 30</au-button>  
  <au-button @click="valueRef = 300">set 300</au-button>  
  <au-button @click="valueRef = 30000_0000">set 300000000</au-button>  
  <au-button @click="valueRef = 10000_0000">set 100000000</au-button>  
</template>
