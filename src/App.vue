<template>
  <Header />

  <RouterView />
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: var(--grey-3);
}

@media (min-width: 768px) {
  ::-webkit-scrollbar-track {
    border: 1px solid var(--grey-6);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
  }
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
}
</style>
