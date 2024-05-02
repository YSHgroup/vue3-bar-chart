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

    <span>
      {{ text }}
    </span>
  </div>
</template>

<style scoped></style>