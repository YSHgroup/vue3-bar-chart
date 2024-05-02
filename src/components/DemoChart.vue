<script setup lang="ts">
import StackedBarChart from '@/package/components/StackedBarChart.vue'
import type { ChartOptions } from '@/package/models/interfaces';
import type { ChartSeries } from '@/package/models/types';
import { thousandSeparatorFomatter } from '@/package/utils/stringParsing';

const series: ChartSeries = [
  {
    name: 'Confirmed Fuel Uplift',
    data: 50000
  },
  {
    name: 'Open Order Exposure',
    data: 30000
  },
  {
    name: 'Available Credit',
    data: 20000
  }
]

const chartOptions: ChartOptions = {
  dataLabel: {
    formatter: (name, data) => {
      return `${name} - $${thousandSeparatorFomatter(data!)} USD`
    }
  },
  tonal: {
    formatter: (name, data) => `$${thousandSeparatorFomatter(data!)}`
  }
}
</script>

<template>
  <div>
    <stacked-bar-chart title="Credit Balance" :series width="900" height="300" border />
  </div>
</template>

<style scoped></style>