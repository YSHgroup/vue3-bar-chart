<script setup lang="ts">
import type { ChartOperator } from '../../core/chartService';
import { computed, ref } from 'vue';

interface Props {
  chart: ChartOperator
  class: string
  color?: string
  text: string
  index: number
}
const props = withDefaults(defineProps<Props>(), {
})

const indexClass = ref(props.class)
const background = computed(() => props.chart.backgroundSetter(props.index))

</script>

<template>
  <div class='vbc-description'>
    <div :class='["vbc-description-panel", indexClass]'  :style="{ ...background }"></div>
    <span class='vbc-description-text'> - {{ text }}</span>
  </div>
</template>

<style scoped>

</style>