<script setup lang="ts">
import NavComponent from './layout/NavComponent.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <NavComponent msg="Navigation" />
    </div>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
