<script setup>
import BarFilter from '../module/BarFilter.vue'
import { onMounted, watch, onUnmounted } from 'vue'
import { useFilterStore } from '@/stores/filter'
import { storeToRefs } from 'pinia'
import { useBrowserWidthListenStore } from '@/stores/browserWidthListen'

const { classData, classIndex, talentIndex } = storeToRefs(useFilterStore())

const { innerWidth, isPhone } = storeToRefs(useBrowserWidthListenStore())
const { addResizeListener, removeResizeListener, updateDeviceState } = useBrowserWidthListenStore()

onMounted(() => {
  addResizeListener()
  updateDeviceState()
})

watch(innerWidth, () => {
  updateDeviceState()
})

onUnmounted(() => {
  removeResizeListener()
})
</script>

<template>
  <!-- 职业分类按钮 -->
  <div class="container wrapper">
    <div id="class-filter-container">
      <BarFilter @click="classIndex = index" :class="{ active: classIndex === index }"
        v-for="(item, index) in classData" :key="item.id">
        <template #bar-icon>
          <img :src="item.icon" class="class-icon">
        </template>
        <template v-if="isPhone" #bar-name>{{ item.abbreviation }}</template>
        <template v-else #bar-name>{{ item.name }}</template>
      </BarFilter>
    </div>
  </div>
  <!-- 天赋分类按钮 -->
  <div class="container wrapper">
    <div id="talent-filter-container">
      <BarFilter @click="talentIndex = index" :class="{ active: talentIndex === index }"
        v-for="(item, index) in classData[classIndex].talents" :key="item.id">
        <template #bar-icon>
          <img :src="item.icon" class="talent-icon">
        </template>
        <template #bar-name>{{ item.name }}</template>
      </BarFilter>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 1.3rem 1rem;
}

#class-filter-container,
#talent-filter-container {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
}

.class-icon {
  border-radius: 100%;
}

.talent-icon {
  border-radius: 0.3rem;
}

@media (max-width: 520px) {
  #class-filter-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  #talent-filter-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 430px) {
  #class-filter-container {
    font-size: 0.87rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  #talent-filter-container {
    font-size: 0.87rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
