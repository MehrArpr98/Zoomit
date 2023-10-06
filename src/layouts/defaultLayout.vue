<template>
  <Header />
  <slot></slot>
  <Footer />
</template>
<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

document.body.setAttribute('data-layout', 'default')
</script>

