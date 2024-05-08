import type { RouteRecordRaw } from 'vue-router'
import DemoChart from '../pages/DemoChart.vue'
import DemoForm from '../pages/DemoForm.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/form'
  },
  {
    path: '/chart',
    name: 'Demo Chart',
    component: DemoChart,
    meta: {
      title: 'Simple Bar Chart'
    }
  },
  {
    path: '/form',
    name: 'Form validation',
    component: DemoForm,
    meta: {
      title: 'Form validation'
    }
  }
]
