<script setup>
const props = defineProps({
  submitAnimateRun: Boolean,
  messageForButton: String,
  type: String,
  barState: Boolean
})
const barKeyWords = props.type === 'login' ? ['登录', '登录中'] : ['提交', '提交中']

</script>

<template>
  <ul id="submit-bar">
    <li v-if="!barState" :class="'bar-unuseable'" id="submitbar-container">
      <span id="stand-ins">{{ barKeyWords[0] }}</span>
    </li>
    <li v-else class="form-submit">
      <div id="ground-layer"></div>
      <div :class="{ 'animate-active': submitAnimateRun }" id="center-layer"></div>
      <span v-if="!submitAnimateRun" class="form-submit" id="submitbar-text">{{ barKeyWords[0] }}</span>
      <span v-else class="form-submit" :class="{ 'enlarge-font-size': messageForButton }">{{
          messageForButton ?
              messageForButton : barKeyWords[1]
        }}</span>
      <div id="submit-active"></div>
    </li>
  </ul>
</template>

<style scoped>
#submit-bar {
  padding: 1rem 0;
}

#submitbar-container {
  width: 100%;
  height: 3.7rem;

  text-align: center;
  line-height: 3.7rem;
  font-size: 1rem;
  font-weight: bold;
}

#stand-ins {
  cursor: inherit;
}

.form-submit {
  width: 100%;
  height: 3.7rem;
  position: relative;
  cursor: pointer;

  overflow: hidden;

  text-align: center;
  line-height: 3.7rem;
  color: var(--c-text-dark-2);
  font-size: 1rem;
  font-weight: bold;
}

.enlarge-font-size {
  font-size: 1.2rem;
}

#ground-layer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  /* background: -webkit-linear-gradient(right, #e48356, #ea5601, #e48356, #ea5601); */
  background: var(--c-blue);
}

#center-layer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: -77%;
  background: -webkit-linear-gradient(left, var(--c-blue), var(--c-theme-wowtw), var(--c-blue));
  transition: all 0.3s;
}

#submitbar-text {
  cursor: inherit;
}

.animate-active {
  animation: chromie-pass 1.7s infinite;
}

#submit-active {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

@keyframes chromie-pass {
  0% {
    left: -77%;
  }

  50% {
    left: 77%;
  }

  100% {
    left: -77%
  }
}

.form-submit:active {
  transform: scale(99%);
}

.form-submit:active #submit-active {
  background: rgba(255, 255, 255, 0.3)
}

@media (max-width: 430px) {
  .form-submit {
    height: 3.3rem;
    line-height: 3.3rem;
  }
}
</style>
