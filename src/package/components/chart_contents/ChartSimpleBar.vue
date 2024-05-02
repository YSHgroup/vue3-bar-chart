<script setup lang="ts">
import type { ChartOperator } from '@/package/core/chartService';
import { ref } from 'vue';

interface Props {
  chart: ChartOperator
  class: string
  color?: string
  text: string
  width: string
  data: number
}

const props = withDefaults(defineProps<Props>(), {
})
const indexClass = ref(props.class)
console.log('---->', props.chart)
</script>

<template>
  <div :class="['chart-simple-bar', indexClass]" :style="{ backgroundColor: color, width }">

    <p class="chart-datalabels">
      {{ chart.outputDataLabel(text, data) }}
    </p>
  </div>
</template>

<style scoped></style>