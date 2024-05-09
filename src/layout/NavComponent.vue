<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="layout-navigation">
    <h1 class="logo">{{ msg }}</h1>
    <div class="nav-items">
      <h3>
        <router-link to="/" title="Homepage">Home</router-link>
      </h3>
      <h3>
        <router-link to="/chart" title="Simple bar Chart">Chart</router-link>
      </h3>
      <h3>
        <router-link to="/form" title="Form handler">Form</router-link>
      </h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.4rem;
}

h3 {
  font-size: 1.3rem;
}

a {
  width: 100%;
  display: block;
  color: var(--nav-text-color);
}
</style>
