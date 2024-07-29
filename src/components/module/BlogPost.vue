<script setup>
import {ref, watch} from 'vue'
import { marked } from 'marked'
import {useHomeModalStore} from '@/stores/index.js'
import {storeToRefs} from 'pinia'

const homeModalStore = useHomeModalStore()
const {isContentLoaded, postPath} = storeToRefs(homeModalStore)

const postContent = ref('')


// 封装的 fetch 函数
const fetchMarkdown = async (path) => {
  try {
    const response = await fetch(`/markdown/${path}.md`)
    if (!response.ok) {
      console.error('Network response was not ok')
      return ''
    }
    const text = await response.text()
    return marked(text)
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
    return ''
  }
}

/// 观察 store 中的 postPath 变化
watch(() => postPath.value, async (newPath) => {
  console.log("load text", newPath)
  if (newPath) {
    postContent.value = ''  // 先清空内容
    isContentLoaded.value = false
    postContent.value = await fetchMarkdown(newPath)
    isContentLoaded.value = true
  }
}, { immediate: true })  // 初始加载

</script>

<template>
  <div v-if="postContent" class="blog-post" v-html="postContent"></div>
  <div v-else id="load-message">加载中...</div>
</template>

<style>
.blog-post {
  width: 100%;
  height: 100%;
}

.blog-post h2 {
  margin-bottom: 3rem;
  text-align: center;
}

.blog-post h1:nth-of-type(2) {
  margin-top: 3.7rem;
}

.blog-post h3 {
  text-align: left;
  text-indent: 1.7em;
  margin-top: 3.7rem;
  margin-bottom: 2rem;
}

.blog-post p {
  text-align: justify;
  margin-bottom: 2rem;
  text-indent: 2em; /* 设置首行缩进为两个字符 */
  overflow-wrap: break-word;
}

@media (max-width: 430px) {
  .blog-post h2 {
    margin-bottom: 2rem;
  }

  .blog-post h3 {
    text-indent: 0;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .blog-post p {
    text-indent: 0;
  }
}
</style>