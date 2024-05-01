<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import DemoChart from './components/DemoChart.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <demo-chart />
  </main>
</template>

<style scoped></style>
