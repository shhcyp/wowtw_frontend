<script setup>
import GroupNavigation from './GroupNavigation.vue'
import GroupFooter from './GroupFooter.vue'
import DialogModalHomePage from "@/components/module/DialogModalHomePage.vue";
import BlogPost from "@/components/module/BlogPost.vue";
</script>

<template>
  <header>
    <GroupNavigation></GroupNavigation>
  </header>
  <main>
    <!-- <div class="wrapper"> -->
    <slot name="page-header"></slot>
    <slot name="page-main"></slot>
    <!-- </div> -->
    <DialogModalHomePage>
      <BlogPost></BlogPost>
    </DialogModalHomePage>
  </main>
  <footer>
    <GroupFooter></GroupFooter>
  </footer>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 7;
}

main {
  flex: 1;
  z-index: 6;

  text-align: center;
}
</style>
