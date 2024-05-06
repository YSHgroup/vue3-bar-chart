<script setup lang="ts">
import type { ChartOperator } from '@/package/core/chartService';
import { computed, onMounted, onUnmounted, ref } from 'vue';

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
const show = ref(false)
const indexClass = ref(props.class)
const background = computed(() => props.chart.backgroundSetter(props.index))

onMounted(() => {
  show.value = true
})
onUnmounted(() => {
  show.value = false
})

</script>

<template>
  <div class="chart-simple-bar-box" :style="{ width }">
    <Transition name="slide">
      <div v-if="show" :class="['chart-simple-bar', indexClass]" :style="{ ...background }"
        v-tooltip="text + ' - ' + `$${data}`">

        <p class="chart-datalabels">
          {{ chart.outputDataLabel({ name: text, data }) }}
        </p>
      </div>
    </Transition>
  </div>

</template>

<style scoped></style>