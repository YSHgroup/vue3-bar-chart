<script setup lang="ts">
import ChartSimpleBar from './ChartSimpleBar.vue'
import { ChartBarCalculator } from '~/core/chartBarCalculator'

import type { ChartData } from '~/models/interfaces'

const props = defineProps({
  data: {
    type: Object as () => ChartData,
    required: true
  }
})
const keyGen = (value: string) => value.replace(/[./\\]/g, '').replace(/ /g, '_')
const chart = new ChartBarCalculator(props.data.chartText, props.data.axisValue)
const widthList = chart.widthCalculator()

</script>

<template>
  <div class="bar-chart-section">
    <chart-simple-bar v-for="(item, index) in data.chartText" :class="'_' + (index + 1)" :width="widthList[index]"
      :text="item" :key="keyGen(item)" />
  </div>
</template>

<style scoped lang="scss"></style>