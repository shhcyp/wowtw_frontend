<script setup>
defineProps({
  extraInfoDisplay: Boolean
})
</script>

<template>
  <ul id="gear">
    <li class="flex-row" id="main-block">
      <ul class="flex-column-align-center" id="left-part-main-info">
        <li class="flex-center-center" id="gear-icon-contrainer">
          <!-- 装备图标 -->
          <slot name="gear-icon"><img src="/ruby/illimited_iamond.webp"></slot>
        </li>
        <!-- 装备栏位 -->
        <li id="gear-part">
          <slot name="gear-part">部位</slot>
        </li>
      </ul>
      <ul class="flex-column" id="right-part-main-info">
        <li class="flex-row-align-center" id="gear-name-container">
          <!-- *装备名称 -->
          <slot name="gear-name">
            <h3 id="gear-name">熔火先锋的碎石手套</h3>
          </slot>
          <div class="flex-row-align-center" id="marks">
            <!-- *装备标记 -->
            <slot name="mark-icon">
              <!-- <div v-for="item in 2" :key="item.id" id="mark-icon-container">
                <img src="/legends/chromietime.webp">
              </div> -->
            </slot>
          </div>
        </li>
        <!-- 装备出处 -->
        <li id="gear-drop">
          <slot name="gear-drop">位掉落出处 - 掉落BOSS</slot>
        </li>
      </ul>
    </li>
    <!-- 额外信息 -->
    <li v-if="extraInfoDisplay" class="flex-row" id="extra-info-container">
      <span id="left-extra-info">其他</span>
      <ul id="right-extra-info-list">
        <!-- *详细装备额外信息 -->
        <slot name="extra-info">
          <!-- <li v-for="item in 5" :key="item.id" class="flex-row-align-center" id="extra-info">
            <div class="flex-center-center" id="extra-info-icon-container">
              <img src="#">
            </div>
            <span id="extra-info-desc">文字说明</span>
          </li> -->
        </slot>
      </ul>
    </li>
  </ul>
</template>

<style>
#gear {
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  /* width: 47.777%; */
  /* flex: 1; */
  /* background: #434343; */
  background: var(--color-gear-backgroud);
  padding: 0.5rem 0;
  border-radius: 0.3rem;
  margin-bottom: 1rem;

  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); */
}

#main-block {
  margin-left: 0.7rem;
  margin-right: 0.7rem;
}

#left-part-main-info {
  margin-right: 1rem;
  justify-content: space-between;
}

#gear-icon-contrainer {
  width: 2.3rem;
  height: 2.3rem;
  margin-bottom: 0.7rem;
}

#right-part-main-info {
  flex: 1;
  margin-right: 0.7rem;
  justify-content: space-between;
}

#gear-name-container {
  justify-content: space-between;
}

#gear-name {
  /* margin-right: 1rem; */
  font-size: 1.1rem;
  text-shadow: 0 0px 1px rgba(0, 0, 0, 0.1);
}

#gear-drop {
  /* max-width: 220px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#marks {
  flex-direction: row-reverse;
}

#mark-icon-container {
  width: 1.37rem;
  height: 1.37rem;
  margin-left: 0.5rem;
}

/* 额外信息 */

#extra-info-container {
  margin-left: 0.35rem;
  padding-left: 0.35rem;
  margin-right: 0.35rem;
  padding-right: 0.35rem;
  padding-top: 0.37rem;
  margin-top: 0.37rem;
  border-top: 1px solid var(--color-border);
}

#left-extra-info {
  width: 2.3rem;
  text-align: center;
  margin-right: 1rem;
}

#right-extra-info-list {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, auto);
}

@media (max-width: 680px) {
  #right-extra-info-list {
    grid-template-columns: repeat(4, auto);
  }
}

@media (max-width: 680px) {
  #right-extra-info-list {
    grid-template-columns: repeat(3, auto);
  }
}

@media (max-width: 375px) {
  #right-extra-info-list {
    grid-template-columns: repeat(2, auto);
  }
}

#extra-info-icon-container {
  width: 1.3rem;
  height: 1.3rem;
  /* background-color: black; */
  margin-right: 0.5rem;
}

#extra-info-desc {
  font-size: 0.8rem;
}

@media (max-width: 1024px) {
  #gear {
    /* width: 47.777%; */
    /* flex: 1; */
    /* padding: 0.7rem; */
    /* margin-bottom: 1rem; */
  }
}
</style>
