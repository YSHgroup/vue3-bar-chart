<script setup lang="ts">
import { reactive } from 'vue';
import InputField from './InputField.vue';

const inputValues = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})
</script>

<template>
  <div class="profile-form">
    <input-field label="First Name" name="first_name" v-model:model-value="inputValues.firstName"
      placeholder="Input at least 3 charaters." />
    <input-field label="Last Name" name="last_name" v-model:model-value="inputValues.lastName"
      placeholder="Input at least 3 charaters." />
    <input-field label="E-mail" name="email" type="email" v-model:model-value="inputValues.email"
      placeholder="somthing@email.com" />
    <input-field label="Phone" name="phone" type="tel" v-model:model-value="inputValues.phone"
      placeholder="xx-xxx-xxxx" />
  </div>
</template>

<style scoped lang="scss">
@import 'form_style'
</style>