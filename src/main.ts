// src/main.ts
import routes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  {
    routes,
  },
)
