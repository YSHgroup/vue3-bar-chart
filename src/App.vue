<script setup lang="ts">
import NavComponent from './components/NavComponent.vue'
import DemoChart from './components/DemoChart.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <NavComponent msg="Navigation" />
    </div>
  </header>

  <main>
    <demo-chart />
  </main>
</template>

<style scoped></style>
