import './assets/main.scss'
import 'floating-vue/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import FloatingVue from 'floating-vue'
import router from './router'
import { RouterView, RouterLink } from 'vue-router'

const app = createApp(App)

app.use(FloatingVue)
app.use(router)

// Globally register
app.component('RouterView', RouterView)
app.component('RouterLink', RouterLink)

app.mount('#app')
