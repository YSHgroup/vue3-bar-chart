<script setup lang="ts">
import '~/styles/index.scss'

import { styleSizeSuffixer } from '~/utils/stringParsing';

interface Props {
  width: string,
  height: string,
  border?: boolean,
  style?: Object
}

withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  border: false
})

</script>

<template>
  <div id="vue-3-bar-chart" :style="{
    ...style,
    width: styleSizeSuffixer(width),
    height: styleSizeSuffixer(height),
    border: border ? '2px solid var(--vbc-c-divider-light-1)' : undefined
  }">

  </div>
</template>

<style scoped lang="scss"></style>