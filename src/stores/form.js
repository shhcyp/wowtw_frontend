import { defineStore } from 'pinia'

// form.js
import { ref } from 'vue';

export const useLoginFormStore =  defineStore('loginForm', () => {
  const loginFormData = ref({
    username: '',
    password: '',
  });

  function updateUsername(newUsername) {
    loginFormData.value.username = String(newUsername);
  }

  function updatePassword(newPassword) {
    loginFormData.value.password = String(newPassword);
  }

  return {
    loginFormData,
    updateUsername,
    updatePassword,
  };
})
