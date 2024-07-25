<script setup>
import {onMounted, onUnmounted} from 'vue'
import IconXmark from '@/components/module/IconXmark.vue'

defineProps({
  isModalOpen: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['close-modal'])
const closeModal = () => {
  emits('close-modal')
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
  <div v-if="isModalOpen" id="modal-overlay">
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 6;
}

#modal {
  background: var(--color-background-mute);
  border-radius: 0.37rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  position: relative;
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
  padding: 2.7rem 3.7rem;
}
</style>