<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div id="footer-container">
    <ul class="wrapper">
      <li class="no-select"><a @click="openModal('terms')">使用条款</a></li>
      <li class="no-select"><span>|</span></li>
      <li class="no-select"><a @click="openModal('privacyPolicy')">隐私政策</a></li>
      <li class="no-select"><span>|</span></li>
      <li class="no-select"><a @click="openModal('disclaimer')">免责声明</a></li>
      <li class="no-select"><span>|</span></li>
      <li class="no-select"><a href="https://beian.miit.gov.cn" target="_blank">滇ICP备2025056169号-1</a></li>
      <li class="no-select"><span>|</span></li>
      <li class="no-select"><a href="https://beian.mps.gov.cn/#/" target="_blank">滇公网安备53010202002178号</a></li>
      <li class="no-select"><span>|</span></li>
      <li class="no-select"><a @click="openModal('contact')">联系方式</a></li>
<!--      <li class="no-select"><span>|</span></li>-->
      <!--      <li class="no-select"><span>本网站是一个非魔兽世界官方的粉丝站点，站内所有《魔兽世界》相关的内容均归暴雪娱乐公司所有</span></li>-->
    </ul>
  </div>
</template>

<style scoped>
#footer-container {
  line-height: 2.6rem;
  background-color: var(--color-footer);
  font-size: 0.8rem;
}

.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  padding: 0 0.5rem;
}

@media (max-width: 430px) {
  #footer-container {
    line-height: 1.7rem;
    font-size: 0.7rem;
  }

  li {
    padding: 0 0.3rem;
  }
}
</style>
