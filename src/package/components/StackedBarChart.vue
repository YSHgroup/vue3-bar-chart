<script setup lang="ts">
import '~/styles/index.scss'

import BarChartSection from '~/components/chart_contents/BarChartSection.vue'
import { styleSizeSuffixer } from '~/utils'
import type { ChartSeries } from '../models/types';
import type { ChartOptions } from '../models/interfaces';

interface Props {
  series: ChartSeries
  title: string
  width: string
  height: string
  chartOptions?: ChartOptions
  border?: boolean
  style?: Object
}

withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  border: false
})


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
      <bar-chart-section :series />
    </div>

    <div id="vbc-footer" aria-roledescription="Vue3 Stacked Bar Chart Footer">
    </div>
  </div>
</template>

<style scoped lang="scss"></style>