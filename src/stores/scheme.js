import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSchemeStore = defineStore('scheme', () => {
  const scheme = ref('light')
  const isdark = ref('false')
  function toggleScheme() {
    scheme.value = scheme.value === 'light' ? 'dark' : 'light'
    isdark.value = scheme.value !== 'light'
    console.log(scheme.value);
  }

  return { scheme, isdark, toggleScheme }
})
