<script setup>
import {onMounted, onUnmounted, watch} from 'vue'
import IconXmark from '@/components/module/IconXmark.vue'
import {useHomeModalStore} from '@/stores/index.js'
import {storeToRefs} from 'pinia'

const homeModalStore = useHomeModalStore()
// const {isModalOpen, isContentLoaded, postPath} = storeToRefs(homeModalStore)

const closeModal = () => {
  homeModalStore.closeHomeModal()
}

const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})

</script>

<template>
  <div v-if="homeModalStore.isModalOpen" id="modal-overlay">
    <div class="wrapper" id="modal">
      <div class="flex-center-center" id="close-button" @click="closeModal">
        <IconXmark></IconXmark>
      </div>
      <div class="flex-column-align-center space-between" id="modal-content">
        <slot></slot>
      </div>
    </div>

  </div>
</template>

<style scoped>
#modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;

  transition: none;
}

#modal {
  background: var(--color-background-mute);
  border-radius: 0.37rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  position: relative;
  width: 77vw; /* 最大宽度限制，确保适应屏幕 */
  height: 77vh; /* 最大高度限制，确保适应屏幕 */
  overflow: hidden; /* 防止弹窗本身的溢出 */
}

#close-button {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 1rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
}

#close-button:hover {
  background-color: var(--c-gray-a);
}

#modal-content {
  margin: 3rem 3.7rem;
  padding: 1rem;
  height: calc(77vh - 6.4rem); /* 除去 padding 和关闭按钮的高度 */
  overflow-y: auto; /* 当内容溢出时添加垂直滚动条 */
  -webkit-overflow-scrolling: touch; /* 移动端惯性滚动 */
}

@media (max-width: 1024px) {
  #modal {
    width: 87vw; /* 最大宽度限制，确保适应屏幕 */
    height: 77vh; /* 最大高度限制，确保适应屏幕 */
  }

}
</style>