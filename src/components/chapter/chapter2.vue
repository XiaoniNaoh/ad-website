<template>
    <h3>第二次尝试</h3>
    
    <p><button @click="increment" v-if="count === 0">点击</button></p>
    <p><button @click="increment">点击</button></p>
    <p><button @click="increment" :disabled="flag">点击</button></p>
    <div>{{ count }}</div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const count = ref(0)
  const flag = computed(() => count.value >= 5)
  
  function increment() {
    count.value++
  }
  </script>
  