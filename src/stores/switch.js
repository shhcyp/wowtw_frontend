import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSwitchStore = defineStore('switch', () => {
  const currenBoolean = ref(false)
  function toggleBoolean() {
    currenBoolean.value = currenBoolean.value === true ? false : true
    // console.log(currenBoolean.value);
  }

  return { currenBoolean, toggleBoolean }
})
