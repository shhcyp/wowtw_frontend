import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBrowserWidthListenStore = defineStore('browserWidthListen', () => {
    const innerWidth = ref(window.innerWidth)

    const showBarNav = ref(null)
    const isPhone = ref(null)

    function handleResize() {
      innerWidth.value = window.innerWidth
    }

    function addResizeListener() {
      window.addEventListener('resize', handleResize)
    }

    function removeResizeListener() {
      window.removeEventListener('resize', handleResize)
    }

    function updateInnerWidthState() {
      if (innerWidth.value >= 768) {
        showBarNav.value = true
      } else {
        showBarNav.value = false
      }
    }

    function updateDeviceState() {
      if(innerWidth.value <= 520) {
          isPhone.value = true
      } else {
          isPhone.value = false
      }
}

  return { innerWidth, showBarNav, isPhone, 
    addResizeListener, removeResizeListener, updateInnerWidthState, updateDeviceState }
})
