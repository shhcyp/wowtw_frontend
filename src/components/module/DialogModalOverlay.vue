<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div v-if="isOpen" id="modal-overlay">
    <div id="modal">
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 6;
}

#modal {
  background: var(--color-background-mute);
  border-radius: 0.37rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

#modal-content {
  padding: 2.7rem 3.7rem;
  height: 100%;
}
</style>