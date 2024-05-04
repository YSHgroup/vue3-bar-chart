<script setup lang="ts">
import StackedBarChart from '@/package/components/StackedBarChart.vue'
import type { ChartOptions } from '@/package/models/interfaces';
import type { ChartSeries } from '@/package/models/types';
import { thousandSeparatorFomatter } from '@/package/utils/stringParsing';
import backImage from '@/assets/line_back.jpg'

const series: ChartSeries = [
  {
    name: 'Amount paid',
    data: 50000
  },
  {
    name: 'Open Order',
    data: 30000
  },
  {
    name: 'Available Credit',
    data: 20000
  }
]

const chartOptions: ChartOptions = {
  title: 'Credit Balance',
  dataLabel: {
    formatter: ({ name, data }) => {
      return `${name} - $${thousandSeparatorFomatter(data!)} USD`
    }
  },
  tonal: {
    formatter: ({ data }) => `$${thousandSeparatorFomatter(data!)}`
  },
  background_image: [null, backImage, null]
}

</script>

<template>
  <div>
    <stacked-bar-chart title="Credit Balance" width="900" style="padding: 1rem;" height="300" border :series
      :chartOptions>
      <template v-slot:header="{ title }">
        <h2 class="text-title">{{ title }}</h2>
      </template>
    </stacked-bar-chart>
  </div>
</template>

<style scoped></style>