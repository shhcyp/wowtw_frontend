<script setup>
import IconScreenNav from './IconScreenNav.vue'
import ListNavigation from './ListNavigation.vue'
</script>

<template>
  <div class="right" id="list-nav-bars">
    <div v-if="false" id="bar-for-visitor">
      <RouterLink :to="`/register`">注册</RouterLink>
      <RouterLink :to="`/login`">登录</RouterLink>
    </div>
    <div class="z39" id="screen-nav-bar">
      <IconScreenNav></IconScreenNav>
    </div>
  </div>

  <div id="screen-nav-container">
    <ListNavigation></ListNavigation>
  </div>
</template>

<style scoped>
#list-nav-bars {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#screen-nav-bar {
  z-index: 7;
}

#bar-for-visitor a {
  line-height: 1;
  padding: 0.85rem 0.93rem;
}
</style>