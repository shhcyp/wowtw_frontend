<script setup>
import { ref, onMounted } from 'vue'
import BlockGear from '../module/BlockGear.vue'
import { useFilterStore } from '@/stores/filter'
import { storeToRefs } from 'pinia'

const { classData, classIndex, talentIndex } = storeToRefs(useFilterStore())
const gearsContainer = ref(null)

// onMounted(() => {
//   const itemsArray = Array.from(gearsContainer.value.children);
//   const columnCount = parseInt(getComputedStyle(gearsContainer.value).columnCount);
//   const columns = Array.from({ length: columnCount }, () => []);

//   itemsArray.forEach((item, index) => {
//     columns[index % columnCount].push(item);
//   });

//   gearsContainer.value.innerHTML = '';

//   columns.forEach(column => {
//     column.forEach(item => {
//       gearsContainer.value.appendChild(item);
//     });
//   });
// });
</script>

<template>
  <div v-for="gearsGroup in classData[classIndex].talents[talentIndex].gearsGroup" :key="gearsGroup.id"
    class="container wrapper">
    <h3 class="margin-bottom-1rem">{{ gearsGroup.title }}</h3>
    <div ref="gearsContainer" id="gears">
      <BlockGear v-for="gears in gearsGroup.gears" :key="gears.id" :extraInfoDisplay="gears.isExtraInfo">
        <template #gear-icon>
          <!-- <img src="@/assets/ruby/illimited_iamond.webp"> -->
          <img :src="gears.icon">
        </template>
        <template #gear-part>
          {{ gears.part }}
        </template>
        <template #gear-name>
          <h3 id="gear-name" :class="gears.quality">{{ gears.name }}</h3>
        </template>
        <template #mark-icon>
          <div v-for="icon in gears.mark" :key="icon.id" class="flex-row-align-center" id="mark-icon-container">
            <img :src="icon.icon">
          </div>
        </template>
        <template #gear-drop>
          {{ gears.drop }}
        </template>
        <template #extra-info>
          <li v-for="extraInfo in gears.extraInfo" :key="extraInfo.id" class="flex-row-align-center" id="extra-info">
            <div class="flex-center-center" id="extra-info-icon-container">
              <img :src="extraInfo.icon">
            </div>
            <span id="extra-info-desc">{{ extraInfo.desc }}</span>
          </li>
        </template>
      </BlockGear>
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
