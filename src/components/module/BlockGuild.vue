<script setup>

</script>

<template>
  <div class="container-light flex-column-align-center">
    <div class="title-light">互动/资助</div>
    <br>

    <!--    <div id="gild-placeholder"></div>-->

    <!--    <div class="theme">打赏/资助</div>-->
    <!--    <div class="theme">暂时没有互动，会长AFK了 : ( </div>-->

    <!--    <div id="help-qrcode"><img src="/homepage/little.webp" alt="qrcode"></div>-->
    <!--    <div class="subtitle-light-no-padding-top">收益将用于网站运营、公会活动基金、公益团打手补贴</div>-->

    <div class="theme">支援站长的双拼学习小游戏（部分内容收费）</div>
    <a href="https://sprity.cn/pages/game.html" target="_blank" id="guild-portal">> https://sprity.cn ></a>
    <div class="subtitle-light-little-padding">
      双拼输入法简单易学，是一种极有性价比的输入方式，适合所有想要提升打字速度的用户
    </div>

    <br>

    <div class="theme">其他平台（求关注）</div>
    <div class="subtitle-light-little-padding" style="user-select: text; -webkit-user-select: text; -moz-user-select: text;">
      抖音：shhcyp，昵称：McypJS ｜ 小红书：11564105357，昵称：McypJS ｜ B站：McypJS
    </div>

    <br>

    <div class="theme">游戏内公会</div>
    <div class="subtitle-light-little-padding"  style="user-select: text; -webkit-user-select: text; -moz-user-select: text;">名称：WOWTW，会长：Hithere，微信号：SHHCYP</div>
    <div class="subtitle-light-no-padding-top">联盟可直接查找器申请，部落需在同名社区联系管理员加公会</div>

  </div>
</template>

<style scoped>
#gild-placeholder {
  height: 7rem;
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