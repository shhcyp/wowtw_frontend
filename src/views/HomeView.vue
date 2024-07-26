<script setup>
import AnimateOt from '@/components/module/BlockAnimateOt.vue'
import MatchCharts from '@/components/module/BlockMatchCharts.vue'
import BlockWOWTW from '@/components/module/BlockWOWTW.vue'
import BlockHowToPlay from '@/components/module/BlockHowToPlay.vue'
import BlockGuild from '@/components/module/BlockGuild.vue'
import BlockMatch from '@/components/module/BlockMatch.vue'
import BlockResource from '@/components/module/BlockResource.vue'
import BlockBusiness from '@/components/module/BlockBusiness.vue'
import DialogModalHomePage from '@/components/module/DialogModalHomePage.vue'
import BlogPost from '@/components/module/BlogPost.vue'
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div id="home-container">
    <TheLayout>
      <template #page-header>
        <div id="page-header">
          <div id="welcome">欢迎来到时光漫游</div>
          <div @click="openModal('mcypTW')" class="home-portal">> 网站简介 ></div>
          <div id="welcome-placeholder"></div>
          <AnimateOt></AnimateOt>
          <div class="short-row-wrapper" id="welcome-subtitle">
            针对《魔兽世界》时光漫游系统的攻略网站，助你成为队伍中最靓的仔
          </div>
        </div>
      </template>
      <template #page-main>
        <div id="page-main">
          <MatchCharts class="main-details" id="part-I"></MatchCharts>
          <BlockWOWTW class="main-details" id="part-II"></BlockWOWTW>
          <BlockHowToPlay class="main-details" id="part-III"></BlockHowToPlay>
          <div class="main-details" id="part-IV">
            <BlockResource></BlockResource>
<!--            ???-->

            <BlockBusiness></BlockBusiness>
            <BlockGuild></BlockGuild>
            <BlockMatch></BlockMatch>
          </div>
        </div>
        <DialogModalHomePage>
          <BlogPost v-if="homeModalStore.postPath === 'mcypTW'"></BlogPost>
          <BlogPost v-else-if="homeModalStore.postPath === 'roamingCup'"></BlogPost>
          <BlogPost v-else-if="homeModalStore.postPath === 'wowTW'"></BlogPost>
          <BlogPost v-else-if="homeModalStore.postPath === 'twFun'"></BlogPost>
          <BlogPost v-else-if="homeModalStore.postPath === 'webResources'"></BlogPost>
          <BlogPost v-else-if="homeModalStore.postPath === 'membershipPolicy'"></BlogPost>
          <BlogPost v-else-if="homeModalStore.postPath === 'guild'"></BlogPost>
        </DialogModalHomePage>
      </template>
    </TheLayout>
  </div>
</template>

<style scoped>
#home-container {
  background-color: var(--c-white);
//user-select: none;
}

#welcome {
  padding: 10rem 0 1rem 0;
  font-size: 2.7rem;
  line-height: 2.7rem;
  font-weight: bolder;
  color: var(--c-theme-wowtw);
}

#welcome-placeholder {
  height: 7rem;
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

@media (max-width: 820px) {
  #part-IV {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin-bottom: 0;
  }
}

@media (max-width: 430px) {
  #welcome {
    padding: 7rem 0 0.7rem 0;
    font-size: 2.3rem;
    line-height: 2.3rem;
  }

  #welcome-placeholder {
    height: 3.7rem;
  }

  #welcome-subtitle {
    width: 80%;
    margin: 0 auto;
    padding: 0;
  }
}
</style>
