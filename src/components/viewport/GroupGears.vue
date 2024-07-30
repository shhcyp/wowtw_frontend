<script setup>
import {ref} from 'vue'
import BlockGear from '../module/BlockGear.vue'
import {useInfoGroupsStore} from '@/stores'
import {storeToRefs} from 'pinia'

const gearsContainer = ref(null)

const {infoGroupData, presentTalent} = storeToRefs(useInfoGroupsStore())

const isCopied = ref(false)
const alertMessage = ref('')
const chosenIndex = ref('')

// 复制天赋
const copyToClipboard = (content, index) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(content)
        .then(() => {
          isCopied.value = true
          chosenIndex.value = index
          alertMessage.value = '复制成功'
          setTimeout(() => {
            alertMessage.value = ''
          }, 2000) // 2秒后隐藏提示消息
        })
        .catch(() => {
          fallbackCopyToClipboard(content)
        })
  } else {
    fallbackCopyToClipboard(content)
  }
}

const fallbackCopyToClipboard = (text) => {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    document.execCommand('copy')
    isCopied.value = true
    alertMessage.value = '复制成功'
    setTimeout(() => {
      alertMessage.value = ''
    }, 2000) // 2秒后隐藏提示消息
  } catch (err) {
    isCopied.value = false
    alertMessage.value = '复制失败'
  }

  document.body.removeChild(textArea)
}

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
        <div @click="copyToClipboard(tree.string, index)" v-for="(tree, index) in infoGroup.details" :key="tree.id" id="talent-tree-string" style="cursor: pointer">
          <div   class="flex-row space-between" >
            <h4 style="text-align: left; cursor: pointer">{{ tree.talentName }}</h4>
            <span v-if="chosenIndex === index" style="font-size: 0.87rem; color: var(--c-good)">{{ alertMessage}}</span>
          </div>
          <div class="flex-grow flex-center-center" id="talent-string" style="cursor: pointer">{{ tree.string }}</div>
          <span class="flex-column" id="notice" style="cursor: pointer">单击复制</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-bottom: none;
}

#gears {
  columns: 3 auto;
}

#talent-tree-string {
  padding: 1.3rem;
  margin-bottom: 3rem;
  width: 100%;
  background-color: var(--color-gear-backgroud);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

#talent-string {
  text-align: justify;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  padding: 0.7rem 0 0.3rem 0;
  cursor: pointer;
}

#notice {
  font-size: 0.87rem;
  align-items: end;
}

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
</style>
