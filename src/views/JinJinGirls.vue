<script setup>
import YnyrgeText from "@/icons/YnyrgeText.vue";
import {girlsData} from "@/static_data/girls.js"
</script>

<template>
  <div id="container">
    <div id="yygnav">
      <div id="logo">
        <YnyrgeText></YnyrgeText>
      </div>
      <div id="bars">
        <div @click="$router.push('/boys')" id="boys"><span>男嘉宾</span></div>
        <div @click="$router.push('/girls')" id="girls"><span>女嘉宾</span></div>
      </div>
    </div>

    <div id="card-container">
      <div v-for="item in girlsData" :key="item.id">
        <div id="avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div id="detail">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  margin: 0.7rem;
}

#yygnav {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.5);
}

#bars {
  display: flex;
}

#logo {
  flex: 1;
  margin-left: 1rem;
  height: 31.17px;
  margin-top: 0.07rem;
}

#boys {
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
  color: white;
  width: 5.7rem;
  background: #6FB4F8;
  border-radius: 0.3rem;
  margin-right: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

#girls {
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
  color: white;
  width: 5.7rem;
  background: #FDB3D8;
  border-radius: 0.3rem;
  margin-left: 0.5rem;
  margin-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

#card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1.7rem;

  margin-left: 1rem;
}

#avatar {
  width: 144px;
  height: 192px;
  background: pink;
  border-radius: 0.3rem;
  overflow: hidden;
}

#detail {
  width: 144px;
  margin-bottom: 0.7rem;
  line-height: 1.5rem;
}
</style>