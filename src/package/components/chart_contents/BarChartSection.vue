<script setup lang="ts">
import { computed } from 'vue';
import ChartSimpleBar from './ChartSimpleBar.vue'
import { ChartOperator } from '@/package/core/chartService';

import type { ChartSeries } from '@/package/models/types';
import type { ChartOptions } from '@/package/models/interfaces';


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
const sumOfData = computed(() => props.series.reduce((sum, curr) => sum + curr.data, 0))

</script>

<template>
  <div class="bar-chart-section">
    <chart-simple-bar v-for="(item, index) in series" :class="'_' + (index + 1)" :width="widthList[index]"
      :text="item.name" :data="item.data" :key="keyGen(item.name)" :index :chart />

    <span class="vbc-tonal-label">{{ chart.outputTonalLabel({ sum: sumOfData }) }}</span>
  </div>
</template>

<style scoped lang="scss"></style>