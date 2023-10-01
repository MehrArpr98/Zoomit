<template>
    <component :is="layout === 'defaultLayout' ? defaultLayout : layout === 'productLayout' ? productLayout : div">
      <router-view />
    </component>
  </template>
  
  <script setup>
  
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import defaultLayout from './defaultLayout.vue'
  import productLayout from './productLayout.vue'
  
  const route = useRoute()
  
  const layout = computed(() => {
    const layout = route?.meta?.layout

    if (layout) {
      return `${layout}Layout`
    }
    return 'div'
  })
  </script>