<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  errorMessage: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  }
})
const modelValue = defineModel('modelValue')

</script>

<template>
  <div class="form-input">
    <label :for="name">{{ label }}: </label>
    <input :id="name" v-model="modelValue" :type="type || 'text'" :placeholder="placeholder" autocomplete="on">
    <pre>{{ errorMessage }}</pre>
  </div>
</template>

<style scoped lang="scss">
.form-input {
  display: block;
  padding: 5px;
  width: 300px;
  max-width: 100%;

  label {
    display: block;
  }

  input {
    padding: 8px;
    font-size: 16px;
    outline: unset;
    border: 1px solid grey;
    border-radius: 3px;
    width: 100%;

    &:focus {
      border: 1px solid blue;
      box-shadow: 0 0 2px 2px dodgerblue;
    }
  }
}
</style>