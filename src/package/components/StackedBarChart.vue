<script setup lang="ts">
import '~/styles/index.scss'

import BarChartSection from '~/components/chart_contents/BarChartSection.vue'
import { styleSizeSuffixer } from '~/utils'
import type { ChartData } from '../models/interfaces';

interface Props {
  title: string,
  width: string,
  height: string,
  border?: boolean,
  style?: Object,
}

withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  border: false
})

const data: ChartData = {
  axisValue: [50000, 30000, 20000],
  chartText: ['Confirmed Fuel Uplift', 'Open Order Exposure', 'Available Credit']
}
</script>

<template>
  <div id="vue-3-bar-chart" :style="{
    ...style,
    width: styleSizeSuffixer(width),
    height: styleSizeSuffixer(height),
    border: border ? '2px solid var(--vbc-c-divider-light-1)' : undefined
  }">
    <div id="vbc-header" aria-roledescription="Vue3 Stacked Bar Chart Header">
      <h3>{{ title }}</h3>
    </div>

    <div id="vbc-body" aria-roledescription="Vue3 Stacked Bar Chart Body">
      <bar-chart-section :data />
    </div>

    <div id="vbc-footer" aria-roledescription="Vue3 Stacked Bar Chart Footer">
    </div>
  </div>
</template>

<style scoped lang="scss"></style>