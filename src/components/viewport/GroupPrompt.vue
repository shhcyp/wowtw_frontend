<script setup>
import BlockPrompt from '../module/BlockPrompt.vue'
import PromptClassList from '../module/PromptClassList.vue'
import PromptGetChromieGear from '../module/PromptGetChromieGear.vue'
import PromptSpecialGear from '../module/PromptSpecialGear.vue'
import PromptGetSet from '../module/PromptGetSet.vue'
import PromptTableRuby from '../module/PromptTableRuby.vue'
import PromptTableLevel from '../module/PromptTableLevel.vue'
import IconVerticalArrow from '../module/IconVerticalArrow.vue'
</script>

<template>
  <!-- 职业排行参考 -->
  <!-- <div v-for="(item, index) in items" :key="index"> -->
  <div id="prompts">
    <BlockPrompt>
      <template #prompt-icon>
        <img src="/legends/alliance.webp" alt="">
      </template>
      <template #prompt-title>职业排行参考</template>
      <template #prompt-arrow>
        <IconVerticalArrow></IconVerticalArrow>
      </template>
      <template #details>
        <PromptClassList></PromptClassList>
      </template>
    </BlockPrompt>

    <!-- 如何获取“克罗米时间线”装备 -->
    <BlockPrompt>
      <template #prompt-icon>
        <img src="/legends/alliance.webp" alt="">
      </template>
      <template #prompt-title>如何获取“克罗米时间线”装备</template>
      <template #details>
        <PromptGetChromieGear></PromptGetChromieGear>
      </template>
    </BlockPrompt>

    <!-- 一些需要注意的装备 -->
    <BlockPrompt>
      <template #prompt-icon>
        <img src="/legends/alliance.webp" alt="">
      </template>
      <template #prompt-title>一些需要注意的装备</template>
      <template #details>
        <PromptSpecialGear></PromptSpecialGear>
      </template>
    </BlockPrompt>

    <!-- 如何获取10.0职业套装 -->
    <BlockPrompt>
      <template #prompt-icon>
        <img src="/legends/alliance.webp" alt="">
      </template>
      <template #prompt-title>如何获取10.0职业套装</template>
      <template #details>
        <PromptGetSet></PromptGetSet>
      </template>
    </BlockPrompt>

    <!-- 宝石属性一览 -->
    <BlockPrompt>
      <template #prompt-icon>
        <img src="/legends/alliance.webp" alt="">
      </template>
      <template #prompt-title>宝石属性一览</template>
      <template #details>
        <PromptTableRuby></PromptTableRuby>
      </template>
    </BlockPrompt>

    <!-- 时光周角色等级|装备等级压缩一览 -->
    <BlockPrompt>
      <template #prompt-icon>
        <img src="/legends/alliance.webp" alt="">
      </template>
      <template #prompt-title>时光周角色等级|装备等级压缩一览</template>
      <template #details>
        <PromptTableLevel></PromptTableLevel>
      </template>
    </BlockPrompt>
  </div>
</template>



<style scoped>
/* 混合多个组件的样式 */
@media (max-width: 430px) {
  .container {
    padding: 1.3rem;
  }

  .prompt-details-container,
  .prompt-details-container-text {
    margin-left: 0;
    justify-content: center;
  }

  .prompt-details {
    padding: 1rem 0 0 0;
  }
}

#prompts ul:last-child {
  margin-bottom: 2rem;
}
</style>