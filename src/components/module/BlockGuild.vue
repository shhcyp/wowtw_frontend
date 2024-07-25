<script setup>
const emits = defineEmits(['open-modal-guild', 'open-modal-wowlogs'])

const openModalGuild = () => {
  emits('open-modal-guild')
}

const openModalWOWLogs = () => {
  emits('open-modal-wowlogs')
}
</script>

<template>
  <div class="container-dark">
    <div class="title-dark">站外基地</div>

    <div class="temp-placeholder"></div>
    <div class="theme">游戏内公会</div>
    <div class="subtitle-dark">名称：WOWTW，服务器：灰谷</div>
    <div @click="openModalGuild" class="home-portal">> 了解更多 ></div>
    <br/>
    <div class="theme">WarcraftLogs公会</div>
    <div class="subtitle-dark">名称：WOWTW，区域：美服</div>
    <div @click="openModalWOWLogs" class="home-portal">> 了解更多 ></div>
    <br/>
  </div>
</template>

<style scoped>

</style>