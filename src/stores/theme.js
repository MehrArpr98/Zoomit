/* import { defineStore } from 'pinia'

export default defineStore('theme', {
  state: () => ({
    theme: 'light'
  }),
  actions: {
    setTheme(newThem) {
      const hour = new Date().toString().split(' ')[4].split(':')[0]

      if (newThem === 'system') this.theme = (hour < 18 && hour > 6 ) ? 'light' : 'dark' 
      else this.theme = newThem

      document.body.setAttribute('data-theme', this.theme)
    }
  }
}) */
