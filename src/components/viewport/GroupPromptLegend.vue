<script setup></script>

<template>
  <div class="container wrapper" id="legend-container">
    <h3 id="legends-title">版本缩写</h3>
    <ul id="legends">
      <li class="legend">
        <img class="icon-legend" src="/legends/chromietime.webp" alt="">
        <span>燃烧的远征（TBC）</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/socket.webp" alt="">
        <span>巫妖王之怒（WLK）</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/alliance.webp" alt="">
        <span>大地的裂变（CTM）</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/horde.webp" alt="">
        <span>熊猫人之谜（MOP）</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/grandfathered.webp" alt="">
        <span>德拉诺之王（WOD）</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/grandfathered.webp" alt="">
        <span>军团再临（LEG）</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#legend-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#legends-title {
  padding-bottom: 0.7rem;
}

#legends {
  /* min-width: 1366px; */
  width: 90%;
  display: grid;
  grid-auto-flow: row;
  place-items: end center;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 3rem;

  margin-left: 1rem;
}

.icon-legend {
  width: 1.7rem;
  height: 1.7rem;
  margin: 0 1rem 0 0;
}

@media (max-width: 1366px) {
  #legends {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 2.3rem 2.3rem;
    place-items: end start;
  }
}

@media (max-width: 1024px) {
  #legends {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 2.3rem 2.3rem;
    place-items: end start;
  }
}

@media (max-width: 820px) {
  #legends {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2.3rem 2.3rem;
    place-items: end start;
  }
}

@media (max-width: 630px) {
  #legends {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2rem 2rem 2rem;
    place-items: end start;
    font-size: 0.87rem;
    /* margin-left: 2rem; */
  }

  .icon-legend {
    width: 1.3rem;
    height: 1.3rem;
    margin: 0 0.7rem 0 0;
  }
}
</style>