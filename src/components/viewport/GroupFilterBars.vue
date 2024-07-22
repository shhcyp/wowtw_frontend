<script setup>
import BarFilter from '../module/BarFilter.vue'
import DialogModalOverlay from '@/components/module/DialogModalOverlay.vue'
import {onMounted, watch, onUnmounted, ref} from 'vue'
import {useFilterStore} from '@/stores/filter'
import {storeToRefs} from 'pinia'
import {useBrowserWidthListenStore} from '@/stores/browserWidthListen'
import {infoGroupService} from '@/apis/infoGroup.js'
import {useInfoGroupsStore} from '@/stores'
import {useUserStore} from '@/stores'

const {classData, classIndex, talentIndex} = storeToRefs(useFilterStore())

const {innerWidth, isPhone} = storeToRefs(useBrowserWidthListenStore())

const {addResizeListener, removeResizeListener, updateDeviceState} = useBrowserWidthListenStore()

const userStore = useUserStore()

const store = useInfoGroupsStore()
const {infoGroupData, presentTalent} = storeToRefs(useInfoGroupsStore())

const isOverlayShow = ref(false)

onMounted(() => {
  console.log(classIndex.value)
  console.log(talentIndex.value)
  // if (classIndex.value && talentIndex.value)
  // classIndex.value = null

  if (typeof addResizeListener === 'function') {
    addResizeListener()
  } else {
    console.warn('addResizeListener method is not defined.')
  }

  if (typeof updateDeviceState === 'function') {
    updateDeviceState()
  } else {
    console.warn('updateDeviceState method is not defined.')
  }

  // if (typeof store.resetPresentTalent === 'function') {
  //   store.resetPresentTalent()
  // } else {
  //   console.warn('resetPresentTalent method is not defined.')
  // }
})

watch(innerWidth, () => {
  if (typeof updateDeviceState === 'function') {
    updateDeviceState()
  } else {
    console.warn('updateDeviceState method is not defined.')
  }
})

onUnmounted(() => {
  // classIndex.value = null

  if (typeof removeResizeListener === 'function') {
    removeResizeListener()
  } else {
    console.warn('removeResizeListener method is not defined.')
  }
})

const handleClassClick = (index) => {
  classIndex.value = index
  talentIndex.value = null
  console.log(classIndex.value)
}

// 请求装备、天赋数据
const handleTalentClick = async (index, talentId) => {
  if (classIndex.value === null || !classData.value[classIndex.value]) {
    console.error('classIndex is null or out of range');
    return
  }

  talentIndex.value = index
  console.log(talentIndex.value)

  // 检查是否已经有缓存数据且登陆
  if (store.infoGroupData[talentId] && userStore.isLogin) {
    console.log('Using cached data', infoGroupData.value)
    presentTalent.value = talentId
  } else {
    isOverlayShow.value = true
    document.body.style.overflow = 'hidden'
    // 如果没有缓存数据，则发起请求
    try {
      const result = await infoGroupService(talentId)
      store.setInfoGroupData(talentId, result.data.data)
      console.log('Fetched data', infoGroupData.value)
      presentTalent.value = talentId
    } catch (error) {
      console.log('Error fetching data:', error)
      isOverlayShow.value = false
    } finally {
      isOverlayShow.value = false
      document.body.style.overflow = 'auto'  // 恢复滚动
    }
  }
}
</script>

<template>
  <!-- 职业分类按钮 -->
  <div class="container wrapper no-select">
    <div id="class-filter-container">
      <BarFilter @click="handleClassClick(index)" :class="{ active: classIndex === index }"
                 v-for="(item, index) in classData" :key="item.id">
        <template #bar-icon>
          <img :src="item.icon" class="class-icon" alt="">
        </template>
        <template v-if="isPhone" #bar-name>{{ item.abbreviation }}</template>
        <template v-else #bar-name>{{ item.name }}</template>
      </BarFilter>
    </div>
  </div>
  <!-- 天赋分类按钮 -->
  <div class="container wrapper no-select" v-if="classIndex !== null && classData[classIndex]">
    <div id="talent-filter-container">
      <BarFilter @click="handleTalentClick(index, item.talentId)" :class="{ active: talentIndex === index }"
                 v-for="(item, index) in classData[classIndex].talents" :key="item.id">
        <template #bar-icon>
          <img :src="item.icon" class="talent-icon" alt="">
        </template>
        <template #bar-name>{{ item.name }}</template>
      </BarFilter>
    </div>
  </div>

  <DialogModalOverlay :is-open="isOverlayShow">
    <span>翻找中......请稍候......</span>
  </DialogModalOverlay>
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
    grid-template-columns: repeat(4, 1fr);
  }

  #talent-filter-container {
    font-size: 0.87rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
