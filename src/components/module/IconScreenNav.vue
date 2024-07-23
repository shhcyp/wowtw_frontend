<script setup>
import {onMounted, watch} from 'vue'
import {useSwitchStore} from '@/stores/switch'
import {storeToRefs} from 'pinia'
import {hideScrollBar, showScrollBar} from '@/utils/scrollbar'

// 图标开关逻辑
const {currenBoolean} = storeToRefs(useSwitchStore())
const {toggleBoolean} = useSwitchStore()

// 图标的动画
onMounted(() => {
  const openBottom = document.getElementById('screennav-bread-bottom-open')
  const closeBottom = document.getElementById('screennav-bread-bottom-close')

  const openTop = document.getElementById('screennav-bread-top-open')
  const closeTop = document.getElementById('screennav-bread-top-close')

  watch(currenBoolean, () => {
    if (currenBoolean.value) {
      openBottom.beginElement()
      openTop.beginElement()
    } else {
      closeBottom.beginElement()
      closeTop.beginElement()
    }

    if (!currenBoolean.value) {
      showScrollBar()
      // 横竖屏限制
      // unlockOrientation(!currenBoolean)
    } else {
      hideScrollBar()
      // 横竖屏限制
      // lockLandscape(!currenBoolean)
    }
  })
})
</script>

<template>
  <div @click="toggleBoolean" id="screennav-button">
    <svg width="18" height="18" viewBox="0 0 18 18">
      <polyline id="screennav-bread-bottom" fill="none" stroke="currentColor" stroke-width="1.2"
                stroke-linecap="round" stroke-linejoin="round" points="2 12, 16 12"
                class="screennav-bread screennav-bread-bottom">
        <animate id="screennav-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s"
                 begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                 values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate>
        <animate id="screennav-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s"
                 begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                 values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate>
      </polyline>
      <polyline id="screennav-bread-top" fill="none" stroke="currentColor" stroke-width="1.2"
                stroke-linecap="round" stroke-linejoin="round" points="2 5, 16 5"
                class="screennav-bread screennav-bread-top">
        <animate id="screennav-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s"
                 begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                 values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate>
        <animate id="screennav-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s"
                 begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                 values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate>
      </polyline>
    </svg>
  </div>
</template>

<style scoped>
#screennav-button {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>