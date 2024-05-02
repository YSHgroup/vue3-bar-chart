<script setup lang="ts">
import type { ChartSeries } from '@/package/models/types';
import ChartSimpleBar from './ChartSimpleBar.vue'
import { ChartBarCalculator } from '~/core/chartBarCalculator'


const props = defineProps({
  series: {
    type: Object as () => ChartSeries,
    required: true
  }
})
const keyGen = (value: string) => value.replace(/[./\\]/g, '').replace(/ /g, '_')
const chart = new ChartBarCalculator(props.series)
const widthList = chart.widthCalculator()

</script>

<template>
  <div class="bar-chart-section">
    <chart-simple-bar v-for="(item, index) in series" :class="'_' + (index + 1)" :width="widthList[index]"
      :text="item.name" :key="keyGen(item.name)" />
  </div>
</template>

<style scoped lang="scss"></style>