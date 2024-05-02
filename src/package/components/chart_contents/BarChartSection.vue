<script setup lang="ts">
import type { ChartSeries } from '@/package/models/types';
import ChartSimpleBar from './ChartSimpleBar.vue'
import type { ChartOptions } from '@/package/models/interfaces';
import { ChartOperator } from '@/package/core/chartService';


const props = defineProps({
  chart: {
    type: ChartOperator,
    required: true
  },
  series: {
    type: Object as () => ChartSeries,
    required: true
  },
  chartOptions: {
    type: Object as () => ChartOptions,
    required: false
  }
})

const keyGen = (value: string) => value.replace(/[./\\]/g, '').replace(/ /g, '_')
const widthList = props.chart.widthCalculator()


</script>

<template>
  <div class="bar-chart-section">
    <chart-simple-bar v-for="(item, index) in series" :class="'_' + (index + 1)" :width="widthList[index]"
      :text="item.name" :data="item.data" :key="keyGen(item.name)" :chart />
  </div>
</template>

<style scoped lang="scss"></style>