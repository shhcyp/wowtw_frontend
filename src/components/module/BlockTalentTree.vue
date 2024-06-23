<script setup>
</script>

<template>
  <div id="talent-tree-image-container">
    <div id="first-image-container">
      <slot name="first-image"></slot>
    </div>
    <div id="center-image-container">
      <slot name="center-image"></slot>
    </div>
    <div id="last-image-container">
      <slot name="last-image"></slot>
    </div>
  </div>
</template>

<style scoped>
#talent-tree-image-container {
  flex: 1;
  background-color: var(--color-gear-backgroud);
  padding: 2rem 0;
  border-radius: 0.5rem;

  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, auto);
}

#first-image-container,
#last-image-container {
  width: 77%;
  border-radius: 0.3rem;
  overflow: hidden;
}

@media (max-width: 768px) {
  #talent-tree-image-container {
    padding: 1.7rem 0;
    /* grid-row-gap: 0.85rem; */
    grid-gap: 0.85rem;
    place-content: center;
    grid-template-columns: 1fr;
  }

  #first-image-container,
  #last-image-container {
    width: 87%;
  }
}

@media (max-width: 430px) {
  #talent-tree-image-container {
    padding: 1rem 0;
    grid-row-gap: 0.5rem;
    grid-template-columns: 1fr;
  }

  #first-image-container,
  #last-image-container {
    width: 91.3%;
  }
}
</style>
