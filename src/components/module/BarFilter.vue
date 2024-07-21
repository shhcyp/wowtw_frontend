<script setup>
</script>

<template>
  <ul id="bar-filter">
    <li id="icon-container">
      <slot name="bar-icon"></slot>
    </li>
    <li>
      <span id="bar-name">
        <slot name="bar-name"></slot>
      </span>
    </li>
  </ul>
</template>

<style scoped>
#bar-filter {
  display: flex;
  align-items: center;
  padding: 0.35rem 1rem 0.35rem 0.5rem;
  margin: 0.1rem;
  border-radius: 0.36rem;
  cursor: pointer;
}

#bar-name {
  cursor: pointer;
}

#bar-filter:hover {
  background-color: var(--color-hover);
  color: var(--color-opposite);
}

#icon-container {
  margin-right: 0.7rem;
  width: 1.9rem;
  height: 1.9rem;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

@media (max-width: 430px) {
  #icon-container {
    width: 1.5rem;
    height: 1.5rem;
  }
}

@media (max-width: 375px) {
  #bar-filter {
    padding: 0.3rem;
    margin: 0;
  }
}
</style>
