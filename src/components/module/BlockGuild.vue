<script setup>

</script>

<template>
  <div class="container-light flex-column-align-center">
    <div class="title-light">快捷互动</div>

    <div id="gild-placeholder"></div>

    <div class="theme">打赏/资助</div>

    <div id="help-qrcode"><img src="/homepage/little.webp" alt="qrcode"></div>
    <div class="subtitle-light-no-padding-top">收益将用于网站运营、公会活动基金、公益团打手补贴</div>

    <div class="theme">游戏内公会</div>
    <div class="subtitle-light-little-padding">名称：WOWTW，会长：Hithere</div>
    <div class="subtitle-light-no-padding-top">联盟可直接查找器申请，部落需在同名社区联系管理员加公会</div>

    <div class="theme">WarcraftLogs公会</div>
    <a href="https://cn.warcraftlogs.com/guild/autojoin/743554/X8Z34vCH" target="_blank" id="guild-portal">> 自动加入 ></a>
  </div>
</template>

<style scoped>
#gild-placeholder {
  height: 10rem;
}

#help-qrcode {
  width: 170px;
  height: 170px;
  margin: 0.7rem;
}

#guild-portal {
  color: var(--color-portal);
  padding: 0.7rem;
}

@media (max-width: 1920px) {
  #gild-placeholder {
    height: 13rem;
  }
}

@media (max-width: 430px) {
  #gild-placeholder {
    height: 0;
  }
}
</style>