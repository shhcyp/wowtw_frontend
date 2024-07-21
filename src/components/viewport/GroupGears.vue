<script setup>
import {ref} from 'vue'
import BlockGear from '../module/BlockGear.vue'
import BlockTalentTree from '@/components/module/BlockTalentTree.vue'
import {infoGroupsStore} from '@/stores'
import {storeToRefs} from 'pinia'

const gearsContainer = ref(null)

const {infoGroupData, presentTalent} = storeToRefs(infoGroupsStore())

console.log('test2', infoGroupData.value[presentTalent.value])
</script>

<template>
  <div v-if="presentTalent && infoGroupData[presentTalent]">
    <div v-for="infoGroup in infoGroupData[presentTalent]" :key="infoGroup.id" class="container wrapper">
      <h3 style="text-align: left" class="margin-bottom-1rem">{{ infoGroup.title }}</h3>

      <!--装备模板-->
      <div v-if="infoGroup.title !== '天赋'" ref="gearsContainer" id="gears">
        <BlockGear v-for="gears in infoGroup.details" :key="gears.id" :extraInfoDisplay="gears.isExtra">
          <template #gear-icon>
            <img :src="gears.icon" alt="">
          </template>
          <template #gear-part>
            {{ gears.part }}
          </template>
          <template #gear-name>
            <h3 id="gear-name" :class="gears.quality">{{ gears.name }}</h3>
          </template>
          <template #mark-icon>
            <div v-for="icon in gears.marks" :key="icon.id" class="flex-row-align-center" id="mark-icon-container">
              <img :src="icon.icon" alt="">
            </div>
          </template>
          <template #gear-drop>
            {{ gears.drop }}
          </template>
          <template #extra-info>
            <li v-for="extra in gears.extras" :key="extra.id" class="flex-row-align-center" id="extra-info">
              <div class="flex-center-center" id="extra-info-icon-container">
                <img :src="extra.icon" alt="">
              </div>
              <span id="extra-info-desc" :class="extra.quality"> {{ extra.description }} </span>
            </li>
          </template>
        </BlockGear>
      </div>

      <!--天赋模板-->
      <div v-else>
        <BlockTalentTree v-for="tree in infoGroup.details" :key="tree.id">
          <template #talent-name>
            <h4 style="text-align: left" class="margin-bottom-1rem">{{ tree.talentName }}</h4>
          </template>
          <template #first-image>
            <img v-if="tree.specializationTrees.length > 0" :src="tree.specializationTrees[0].treeImage" alt="">
          </template>
          <template #center-image>
            <img v-if="tree.specializationTrees.length > 1" :src="tree.specializationTrees[1].treeImage" alt="">
          </template>
          <template #last-image>
            <img v-if="tree.specializationTrees.length > 2" :src="tree.specializationTrees[2].treeImage" alt="">
          </template>
        </BlockTalentTree>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-bottom: none;
}

/* #gear-group-title {
  margin-bottom: 1rem;
} */

#gears {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;

  /* column-gap: 1rem; */
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */

  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem; */
}


/* @media (max-width: 5120px) {
  #gears {
    -webkit-column-count: 9;
    -moz-column-count: 9;
    column-count: 9;
  }
}

@media (max-width: 3200px) {
  #gears {
    -webkit-column-count: 7;
    -moz-column-count: 7;
    column-count: 7;
  }
}

@media (max-width: 2560px) {
  #gears {
    -webkit-column-count: 6;
    -moz-column-count: 6;
    column-count: 6;
  }
}

@media (max-width: 1920px) {
  #gears {
    -webkit-column-count: 5;
    -moz-column-count: 5;
    column-count: 5;
  }
}

@media (max-width: 1366px) {
  #gears {
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
  }
}

@media (max-width: 1240px) {
  #gears {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
} */

@media (max-width: 932px) {
  #gears {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
}

@media (max-width: 680px) {
  #gears {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
  }
}

/* @media (max-width: 430px) {
  #gears {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
  }
} */
</style>
