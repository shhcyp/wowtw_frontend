<script setup>

</script>

<template>
  <div class="container-light flex-column-align-center">
    <div class="title-light">站外互动</div>

    <div id="gild-placeholder"></div>

    <div class="theme">游戏内公会</div>
<!--    <div class="subtitle-light">（魔兽世界时空漫游粉丝基地）</div>-->
    <div class="subtitle-light">名称：WOWTW，会长：Hithere</div>
    <br/>
    <div class="theme">WarcraftLogs公会</div>
    <a href="https://cn.warcraftlogs.com/guild/autojoin/743554/X8Z34vCH" target="_blank" id="guild-portal">> 自动加入 ></a>
  </div>
</template>

<style scoped>
#gild-placeholder {
  height: 17rem;
}

#guild-portal {
  color: var(--color-portal);
  padding: 1rem;
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