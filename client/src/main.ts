import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// we need to check localstorage/indexedDB for settings, if no settings, create default ones

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
