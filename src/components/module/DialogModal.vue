<script setup>
import {onMounted} from "vue";

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:isOpen', 'update:confirm', 'update:cancel'])

const cancel = () => {
  emit('update:isOpen', false)
  emit('update:cancel')
}

const confirm = () => {
  emit('update:confirm')
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    cancel()
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div v-if="isOpen" id="modal-overlay">
    <div id="modal">
      <div class="flex-column-align-center space-between" id="modal-content">
        <slot></slot>
        <div id="bar-container">
          <div @click="confirm" class="pointer padding" id="confirm-button">确定</div>
          <div @click="cancel" class="pointer padding" id="cancel-button">取消</div>
        </div>
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

  z-index: 40;
}

#modal {
  background: var(--color-background-mute);
  border-radius: 0.37rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

#modal-content {
  padding: 1rem 3rem;
  height: 100%;
}

#bar-container {
  width: 100%;
  padding: 0.7rem 1rem 0.3rem 1rem;
  display: flex;

  justify-content: space-around;
}

@media (max-width: 430px) {
  #modal-content {
    padding: 1rem;
  }

  #modal-content {
    width: 100%;
    padding: 1.7rem 3.8rem;
  }

}
</style>