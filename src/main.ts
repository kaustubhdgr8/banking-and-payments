import './styles/index.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import en from './locales/en.json'
import fr from './locales/fr.json'
import hi from './locales/hi.json'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messgaes: { en, fr, hi }
})
const vuetify = createVuetify({
  components,
  directives
})

app.use(router)
app.use(createPinia())
app.use(vuetify)
app.use(i18n)

app.mount('#app')
