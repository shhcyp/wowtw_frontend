<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-dark">
    <div id="block-raids">
      <div v-for="item in 3" :key="item" class="raid">
        <div id="raid-title">
          <div style="padding-left: 1.3rem;" class="flex-row-align-center justify-center">
            <div class="box-size-regular flex-center-center" id="raid-icon"><img src="/legends/group_a.webp" alt=""></div>
            <div id="raid-name">黑暗神殿</div>
            <div class="flex-grow"></div>
          </div>
          <div style="margin-top: 1rem" class="flex-row-align-center">
            <span style="color: var(--c-gray); padding-left: 1.1rem;">名次 - 战队 - 成员 - 得分</span>
            <div class="flex-grow"></div>
            <div @click="openModal('temp')" style="padding-right: 1.3rem" class="home-portal">> 更多排行 ></div>
          </div>
        </div>
<!--        临时显示-->
            <div style="text-align: left; padding: 3rem">暂无数据</div>
<!--        <div v-for="item in 3" :key="item.id" class="" id="winner">-->
<!--          <div style="padding-left: 1.3rem;">-->
<!--            <div class="flex-center-center box-size-regular " id="winner-rank">-->
<!--              <img src="/legends/group_a.webp" alt="">-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="flex-row-align-center" id="winner-team">-->
<!--            <div class="flex-center-center box-size-light" id="team-icon"><img src="/legends/group_a.webp" alt="">-->
<!--            </div>-->
<!--            <span class="no-wrap">拒绝黄赌毒赌毒</span>-->
<!--          </div>-->
<!--          <div class="flex-row-align-center" id="winner-members">-->
<!--            <div class="member flex-row-align-center">-->
<!--              &lt;!&ndash;is leader&ndash;&gt;-->
<!--              <div v-if="true" class="flex-center-center box-size-tiny margin-right-tiny"><img-->
<!--                  src="/legends/group_a.webp" alt=""></div>-->
<!--              &lt;!&ndash; talent icon&ndash;&gt;-->
<!--              <div class="box-size-tiny flex-center-center"><img src="/legends/group_a.webp" alt=""></div>-->
<!--              <span class="no-wrap">诺兹多姆-七个字七个字七</span>-->
<!--            </div>-->
<!--            <div class="member flex-row-align-center">-->
<!--              <div v-if="true" class="flex-center-center box-size-tiny margin-right-tiny"><img src="" alt=""></div>-->
<!--              &lt;!&ndash;tank&ndash;&gt;-->
<!--              <div class="box-size-tiny flex-center-center"><img src="/legends/group_a.webp" alt=""></div>-->
<!--              <span class="no-wrap">诺兹多姆-七个字七个字七</span>-->
<!--            </div>-->
<!--            <div class="member flex-row-align-center">-->
<!--              <div v-if="true" class="flex-center-center box-size-tiny margin-right-tiny"><img src="" alt=""></div>-->
<!--              &lt;!&ndash;healer&ndash;&gt;-->
<!--              <div class="box-size-tiny flex-center-center"><img src="/legends/group_a.webp" alt=""></div>-->
<!--              <span class="no-wrap">诺兹多姆-七个字七个字七</span>-->
<!--            </div>-->
<!--            <div class="member flex-row-align-center">-->
<!--              <div v-if="true" class="flex-center-center box-size-tiny margin-right-tiny"><img src="" alt=""></div>-->
<!--              &lt;!&ndash;dps&ndash;&gt;-->
<!--              <div class="box-size-tiny flex-center-center"><img src="/legends/group_a.webp" alt=""></div>-->
<!--              <span class="no-wrap">诺兹多姆-七个字七个字七</span>-->
<!--            </div>-->

<!--          </div>-->
<!--          <span class="flex-row-align-center" id="winner-score">13:17:19:998</span>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
#block-raids {
  margin: 0 auto;
  color: var(--c-white);
  padding: 1.7rem 0;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
}

#raid-title {
  margin-top: 7rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--c-gray-a);
}

#raid-icon {
  margin-right: 1rem;
}

#raid-name {
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: var(--c-theme-wowtw);
  font-weight: bold;
}

#list-header {
  padding: 0.3rem 0;
  border-top: 1px solid var(--c-gray-a);
  border-bottom: 1px solid var(--c-gray-a);
}

#winner {
  display: grid;
  grid-template-columns: repeat(4, auto);
  place-items: self-start;

  padding: 0.7rem 0;
  border-bottom: 1px solid var(--c-gray-a);
}

#winner-rank {
}

#winner-team {
}

#team-icon {

}

#winner span {
  padding: 0.2rem;
}

#winner-members {
  font-size: 0.87rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.member span {
}

.winner-rank-width {
  width: 5rem;
}

.winner-team-width {
  width: 12rem;
}

.winner-members-width {
  width: 66rem;
}

.winner-score-width {
  width: 7rem;
}


@media (max-width: 430px) {
  #block-raids {
    padding: 0;
  }
}

@media (max-width: 1790px) {
  #winner-members {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1200px) {
  #winner-members {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>