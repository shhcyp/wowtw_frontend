import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInputStore = defineStore('input', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

    const inputName = ref(null)

    // const formData = ref({
    //     username: '',
    //     password: ''
    // })

    const inputData = ref(null)

    function clearContent() {
        inputData.value = ''
    }

  return { inputTitle, inputName, inputData, clearContent }
})