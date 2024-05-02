<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  class: string
  color?: string
  text: string
  width: string
}

const props = withDefaults(defineProps<Props>(), {
})
const indexClass = ref(props.class)

</script>

<template>
  <div :class="['chart-simple-bar', indexClass]" :style="{ backgroundColor: color, width }">

    <p class="chart-datalabels">
      {{ text }}
    </p>
  </div>
</template>

<style scoped></style>