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
      showBarNav.value = innerWidth.value >= 768;
    }

    function updateDeviceState() {
      isPhone.value = innerWidth.value <= 520;
}

  return { innerWidth, showBarNav, isPhone, 
    addResizeListener, removeResizeListener, updateInnerWidthState, updateDeviceState }
})
