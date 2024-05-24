<script setup lang="ts"></script>

<template>
  <div class="toggle-btn">
    <label class="switch">
      <span role="label">Toggle Button</span>
      <div class="toggle-box"></div>
    </label>
  </div>
</template>

<style scoped lang="scss">
.toggle-btn {
  padding: 5px;
  width: 350px;
  max-width: 100%;
  
  .toggle-box {
    width: 100%;
    height: 36px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 3px;
  }
}
</style>
