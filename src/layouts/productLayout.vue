<template>
    <product-header />
    <slot></slot>
    
  <product-footer />
  </template>
  <script setup>
  import ProductHeader from '../components/ProductHeader.vue'
  import ProductFooter from '../components/ProductFooter.vue';
  </script>