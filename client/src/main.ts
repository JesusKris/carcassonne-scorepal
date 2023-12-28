import './assets/index.css'
/* import './assets/lindsay-becker.eot'
import './assets/lindsay-becker.otf'
import './assets/lindsay-becker.svg'
import './assets/lindsay-becker.ttf'
import './assets/lindsay-becker.woff'
import './assets/lindsay-becker.woff2' */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
