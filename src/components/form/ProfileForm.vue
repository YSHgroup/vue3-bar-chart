<script setup lang="ts">
import InputField from './InputField.vue'
import { useField } from 'vee-validate'
import { string } from 'yup'

// const schema = object({
//   firstName: string().required().label('First Name'),
//   lastName: string(),
//   email: string().email(),
//   phone: string()
// })

// const { handleReset, handleSubmit } = useForm({
//   validationSchema: toTypedSchema(schema)
// })

const { value: firstName, errorMessage: firstNameError } = useField('firstName', string().required().min(3).label('First Name'));
const { value: lastName, errorMessage: lastNameError } = useField('lastName', string().label('Last Name'));
const { value: email, errorMessage: emailError } = useField('email', string().email().required().label('E-mail'));
const { value: phone, errorMessage: phoneError } = useField('phone', string().label('Phone Number'));

</script>

<template>
  <div class="profile-form">
    <input-field
      label="First Name"
      name="first_name"
      v-model:model-value="firstName"
      :error-message="firstNameError"
      placeholder="Input at least 3 charaters."
    />
    <input-field
      label="Last Name"
      name="last_name"
      v-model:model-value="lastName"
      :error-message="lastNameError"
      placeholder="Input at least 3 charaters."
    />
    <input-field
      label="E-mail"
      name="email"
      type="email"
      v-model:model-value="email"
      :error-message="emailError"
      placeholder="somthing@email.com"
    />
    <input-field
      label="Phone"
      name="phone"
      type="tel"
      v-model:model-value="phone"
      :error-message="phoneError"
      placeholder="xx-xxx-xxxx"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'form_style';
</style>
