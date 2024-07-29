<script setup>
import BlockTalentTree from '@/components/module/BlockTalentTree--.vue'
// import { useFilterStore } from '@/stores/filter'
// import { storeToRefs } from 'pinia'

// const { classData, classIndex, talentIndex } = storeToRefs(useFilterStore())
</script>

<template>
  <div class="container wrapper">
    <h3 class="margin-bottom-1rem">item.title</h3>
    <BlockTalentTree>
      <template #first-image>
        <img src="" alt="">
      </template>
      <template #center-image>
        <!-- <img :src="item.image.first"> -->
      </template>
      <template #last-image>
        <img src="" alt="">
      </template>
    </BlockTalentTree>
  </div>
</template>

<style scoped>
.container {
  border-bottom: none;
}
</style>
