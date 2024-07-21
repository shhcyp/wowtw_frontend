<script setup></script>

<template>
  <div class="container wrapper no-select" id="legend-container">
    <h3 id="legends-title">特殊标记</h3>
    <ul id="legends">
      <li class="legend">
        <img class="icon-legend" src="/legends/chromietime.webp" alt="">
        <span>克罗米时间线</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/socket.webp" alt="">
        <span>额外插槽</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/alliance.webp" alt="">
        <span>限联盟</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/horde.webp" alt="">
        <span>限部落</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/grandfathered.webp" alt="">
        <span>绝版</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/rare.webp" alt="">
        <span>极稀有</span>
      </li>
      <li class="legend">
        <img class="icon-legend" src="/legends/group.webp" alt="">
        <span>配套标记</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  padding: 1.3rem 0 1.3rem 1.7rem;
}

#legend-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

}

#legends-title {
  padding-bottom: 0.7rem;
  text-align: left;
}

#legends {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.37rem;
}

.legend {
  margin-right: 1.7rem;
}

.icon-legend {
  width: 1.7rem;
  height: 1.7rem;
  margin: 0 1rem 0 0;
}

@media (max-width: 768px) {
  #legends {
    font-size: 0.87rem;
  }

  .legend {
    margin-right: 1rem;
  }

  #legends-title {
    padding-bottom: 0.3rem;
  }
}

@media (max-width: 520px) {
  #legends {
    display: grid;
    grid-template-columns: 0.35fr 0.29fr 0.26fr;
    grid-template-rows: 2rem 2rem;
    place-items: end start;
    font-size: 0.87rem;
  }

  .legend {
    margin-right: 0;
  }

  #legends-title {
    padding-bottom: 0;
  }

  .icon-legend {
    width: 1.3rem;
    height: 1.3rem;
    margin: 0 0.7rem 0 0;
  }
}
</style>