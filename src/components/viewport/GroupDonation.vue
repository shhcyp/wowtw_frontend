<script setup></script>

<template>
  <div class="container wrapper">
    <h1 class="center-heading">资助本站</h1>
    <p>资助本站即可成为付费会员，解锁所有职业所有天赋装备搭配表，邀请好友成为付费会员有返现</p>
    <p class="portal center-text">
      <!-- 先注册再购买，未登录跳转登录页，已登录跳转购买页 -->
      <!-- <RouterLink :to="`/donation`">> 立即前往 ></RouterLink> -->
    </p>
  </div>
</template>

<style scoped>
.container {
  /* background-color: var(--color-background-soft); */
  border-bottom: none;
}

p {
  margin-top: 13px;
}

@media (min-width: 768px) {
  .container {
    height: 17rem;
  }

  p {
    text-align: center;
  }
}
</style>