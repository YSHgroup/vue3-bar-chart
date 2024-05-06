import './assets/main.scss'
import 'floating-vue/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import FloatingVue from 'floating-vue'

import {
  // Directives
  vTooltip,
  vClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

const app = createApp(App)
app.use(FloatingVue)
// app.directive('tooltip', vTooltip)
app.mount('#v-bar-chart')
