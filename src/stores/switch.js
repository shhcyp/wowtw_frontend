import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSwitchStore = defineStore('switch', () => {
  const currenBoolean = ref(false)
  const toggleBoolean = () => {
    currenBoolean.value = currenBoolean.value !== true
  }

  return { currenBoolean, toggleBoolean }
})
