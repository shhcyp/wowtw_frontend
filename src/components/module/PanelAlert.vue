<script setup>
defineProps({
  switchGreen: Boolean
})
</script>

<template>
  <div>
        <span :class="{ 'in-green': switchGreen }" class="alert" id="alert-message">
            <slot></slot>
        </span>
  </div>
</template>

<style scoped>
#alert-message {
  display: inline-block;
  width: 100%;
  font-size: 12px;
}
</style>
