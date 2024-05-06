<script setup lang="ts">
import type { ChartOperator } from '@/package/core/chartService';
import { computed, ref } from 'vue';

interface Props {
  chart: ChartOperator
  class: string
  color?: string
  text: string
  width: string
  data: number
  index: number
}

const props = withDefaults(defineProps<Props>(), {
})
const indexClass = ref(props.class)
const background = computed(() => props.chart.backgroundSetter(props.index))

</script>

<template>
  <div :class="['chart-simple-bar', indexClass]" :style="{ ...background, width }"
    v-tooltip="text + ' - ' + `$${data}`">

    <p class="chart-datalabels">
      {{ chart.outputDataLabel({ name: text, data }) }}
    </p>
  </div>

</template>

<style scoped></style>