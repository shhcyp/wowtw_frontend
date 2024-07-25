<script setup>
import {ref} from 'vue'
import router from '@/router/index.js'
import AnimateOt from '@/components/module/BlockAnimateOt.vue'
import MatchCharts from '@/components/module/BlockMatchCharts.vue'
import BlockWOWTW from '@/components/module/BlockWOWTW.vue'
import BlockHowToPlay from '@/components/module/BlockHowToPlay.vue'
import BlockGuild from '@/components/module/BlockGuild.vue'
import BlockMatch from '@/components/module/BlockMatch.vue'
import BlockResource from '@/components/module/BlockResource.vue'
import BlockBusiness from '@/components/module/BlockBusiness.vue'
import DialogModalHomePage from '@/components/module/DialogModalHomePage.vue'
import WOWTWDetail from '@/components/module/BlockAboutWOWTWDetail.vue'
import MCYPTWDetail from '@/components/module/BlockAboutMCYPTWDetail.vue'
import MatchChartsDetail from '@/components/module/BlockAboutMatchChartsDetail.vue'
import HowToPlayDetail from '@/components/module/BlockAboutHowToPlayDetail.vue'
import ResourceDetail from '@/components/module/BlockAboutResourceDetail.vue'
import MatchDetail from '@/components/module/BlockAboutMatchDetail.vue'
import BusinessDetail from '@/components/module/BlockAboutBusinessDetail.vue'
import GuildDetail from '@/components/module/BlockAboutGuildDetail.vue'
import WOWlogsDetail from '@/components/module/BlockAboutWOWlogsDetail.vue'

const isModalOpen = ref(false)
const target = ref('')

const preventDefault = (e) => {
  e.preventDefault()
}

const openModal = (value) => {
  isModalOpen.value = true
  target.value = value
  document.body.style.overflow = 'hidden'  // 禁止滚动
  document.addEventListener('touchmove', preventDefault, {passive: false})
}

const closeModal = () => {
  target.value = ''
  isModalOpen.value = false
  document.body.style.overflow = 'auto'  // 恢复滚动
  document.removeEventListener('touchmove', preventDefault, {passive: false})
}

router.beforeEach((to, from, next) => {
  document.body.style.overflow = 'auto'  // 在导航时恢复滚动
  document.removeEventListener('touchmove', preventDefault, {passive: false})
  next()
})

</script>

<template>
  <div id="home-container">
    <TheLayout>
      <template #page-header>
        <div id="page-header">
          <div id="welcome">欢迎来到时光漫游</div>
          <AnimateOt></AnimateOt>
          <div @click="openModal('aboutMCYPTW')" class="home-portal">> 了解更多 ></div>
          <div class="short-row-wrapper" id="welcome-subtitle">
            针对《魔兽世界》时光漫游系统的攻略网站，助你成为队伍中最靓的仔
          </div>
        </div>
      </template>
      <template #page-main>
        <div id="page-main">
          <MatchCharts @open-modal="openModal('matchCharts')" class="main-details" id="part-I"></MatchCharts>
          <BlockWOWTW @open-modal="openModal('aboutWOWTW')" class="main-details" id="part-II"></BlockWOWTW>
          <BlockHowToPlay @open-modal="openModal('howToPlay')" class="main-details" id="part-III"></BlockHowToPlay>
          <div class="main-details" id="part-IV">
            <BlockResource @open-modal="openModal('resource')"></BlockResource>
            <BlockMatch @open-modal="openModal('match')"></BlockMatch>
            <BlockBusiness @open-modal="openModal('business')"></BlockBusiness>
            <BlockGuild @open-modal-guild="openModal('guild')" @open-modal-wowlogs="openModal('wowlogs')"></BlockGuild>
          </div>
        </div>
        <DialogModalHomePage :is-modal-open="isModalOpen" @close-modal="closeModal">
          <MCYPTWDetail v-if="target === 'aboutMCYPTW'"></MCYPTWDetail>
          <MatchChartsDetail v-if="target === 'matchCharts'"></MatchChartsDetail>
          <WOWTWDetail v-if="target === 'aboutWOWTW'"></WOWTWDetail>
          <HowToPlayDetail v-if="target === 'howToPlay'"></HowToPlayDetail>
          <ResourceDetail v-if="target === 'resource'"></ResourceDetail>
          <MatchDetail v-if="target === 'match'"></MatchDetail>
          <BusinessDetail v-if="target === 'business'"></BusinessDetail>
          <GuildDetail v-if="target === 'guild'"></GuildDetail>
          <WOWlogsDetail v-if="target === 'wowlogs'"></WOWlogsDetail>
        </DialogModalHomePage>
      </template>
    </TheLayout>
  </div>
</template>

<style scoped>
#home-container {
  background-color: var(--c-white);
  user-select: none;
}

#page-header {
//background-color: var(--c-white-soft2); background-color: var(--c-white);
}

#welcome {
  padding: 10rem 0;
  font-size: 2.7rem;
  line-height: 2.7rem;
  font-weight: bolder;
  color: var(--c-theme-wowtw);
}

#welcome-subtitle {
  color: var(--c-text-light-1);
  padding-bottom: 1rem;
}

#page-main {
  padding-top: 1rem;
}

.main-details {
  margin-bottom: 1rem;
}

#part-I,
#part-II,
#part-III {
  padding: 1rem 0;
}

#part-IV {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
}

</style>
