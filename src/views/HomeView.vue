<script setup>
import AnimateOt from '@/components/module/BlockAnimateOt.vue'
import BlockWOWTW from '@/components/module/BlockWOWTW.vue'
import BlockHowToPlay from '@/components/module/BlockHowToPlay.vue'
import BlockGuild from '@/components/module/BlockGuild.vue'
import BlockMatch from '@/components/module/BlockMatch.vue'
import BlockResource from '@/components/module/BlockResource.vue'
import BlockBusiness from '@/components/module/BlockBusiness.vue'
import {useHomeModalStore} from '@/stores/index'
import {visitService} from '@/apis/user.js'
import {onMounted} from 'vue'

onMounted(async () => {
  if (localStorage.length <= 1) {
    await visitService()
  }
})

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
<!--          <div class="short-row-wrapper" id="welcome-subtitle">-->
<!--            通知：由于工信部及运营商新规，短信验证码功能报备中，暂时无法注册，新会员可通过网页底端联系方式进行人工注册！团本装备搭配内容更新中，请用户暂时等待！法师塔搭配已为最新，请放心食用！-->
<!--          </div>-->
<!--          <div class="flex-grow"></div>-->
          <AnimateOt></AnimateOt>
          <div class="flex-row-align-center" id="welcome-link">
            <div @click="openModal('mcypTW')" id="about-mcyptw">网站简介</div>
            <div @click="openModal('terms')" id="terms">使用条款</div>
          </div>
          <div class="short-row-wrapper" id="welcome-subtitle">
            专注《魔兽世界》时空漫游装备搭配（【漫游团本】 + 【法师塔】），助你成为最靓的仔
          </div>
          <div class="short-row-wrapper" id="welcome-subtitle">
            法师塔装备搭配已完结(天赋除外)，团本装备目前为旧版，新版更新中...
          </div>
          <a href="https://www.bilibili.com/video/BV1ZF4m1w7Si/?spm_id_from=333.999.0.0" target="_blank" id="battle-portal">> 战斗效果（黑暗神殿）></a>
        </div>
      </template>
      <template #page-main>
        <div id="page-main">
          <div class="main-details" id="part-IV">
            <BlockGuild></BlockGuild>
            <BlockResource></BlockResource>
            <BlockBusiness></BlockBusiness>
            <BlockMatch></BlockMatch>
          </div>
          <BlockWOWTW class="main-details" id="part-II"></BlockWOWTW>
          <BlockHowToPlay class="main-details" id="part-III"></BlockHowToPlay>
<!--          <div class="main-details" id="part-IV">-->
<!--            <BlockResource></BlockResource>-->
<!--            <BlockBusiness></BlockBusiness>-->
<!--            <BlockMatch></BlockMatch>-->
<!--            <BlockGuild></BlockGuild>-->
<!--          </div>-->
        </div>
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
  height: 60vh;
  background-image: url("/homepage/portal1.webp");
  background-size: cover; /* 背景图片的大小，可以使用 cover, contain 或者具体的尺寸 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
  background-position: center; /* 背景图片的位置 */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#welcome {
  padding: 10rem 0 1rem 0;
  font-size: 3.7rem;
  line-height: 2.7rem;
  font-weight: bolder;
  color: white;
}

#welcome-link {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

#about-mcyptw {
  color: black;
  cursor: pointer;
  width: 7rem;
  height: 2.7rem;
  line-height: 2.7rem;
  text-align: center;
  background-color: white;
  border-radius: 2.7rem 2.7rem;
  margin-right: 1rem;
}

#terms {
  color: black;
  cursor: pointer;
  width: 7rem;
  height: 2.7rem;
  line-height: 2.7rem;
  text-align: center;
  background-color: white;
  border-radius: 2.7rem 2.7rem;
  margin-right: 1rem;
}

#battle-portal {
  color: var(--color-portal);
  padding-bottom: 1rem;
  font-weight: bold;
}

#welcome-subtitle {
  margin: 1rem 0;
  color: white;
}

#page-main {
  padding-top: 1rem;
}

.main-details {
  margin-bottom: 1rem;
}

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

@media (max-width: 865px) {
  #part-IV {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin-bottom: 0;
  }
}

@media (max-width: 768px) {
  #page-header {
    height: 60vh;
  }

  #welcome {
    font-size: 3rem;
  }
}

@media (max-width: 430px) {
  #page-header {
    height: 55vh;
  }

  #welcome {
    padding: 7rem 0 0.7rem 0;
    font-size: 2.3rem;
    line-height: 2.3rem;
  }

  #welcome-link {
    margin-top: 1rem;
  }

  #about-mcyptw {
    font-size: 0.87rem;
    width: 6rem;
    height: 2.3rem;
    line-height: 2.3rem;
    border-radius: 2.3rem 2.3rem;
    margin-right: 0.7rem;
  }

  #terms {
    font-size: 0.87rem;
    width: 6rem;
    height: 2.3rem;
    line-height: 2.3rem;
    border-radius: 2.3rem 2.3rem;
    margin-right: 0.7rem;
  }

  #welcome-subtitle {
    font-size: 0.87rem;
    width: 97%;
    margin: 0.5rem 0;
  }
}
</style>
