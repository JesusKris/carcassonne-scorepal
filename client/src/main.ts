import './assets/index.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import estLocale from "./locales/est.json" 
import enLocale from "./locales/en.json"

// we need to check localstorage/indexedDB for settings, if no settings, create default ones

const messages = {
    en: {
        ...enLocale
    },
    est: {
        ...estLocale
    }
}


const i18n = createI18n({
    locale: "en",
    fallbackLocale: "est",
    messages: messages,
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
