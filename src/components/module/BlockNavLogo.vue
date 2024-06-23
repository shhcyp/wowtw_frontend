<script setup>
import IconLogoBg from './IconLogoBg.vue'
import IconLogoSeconds from './IconLogoSeconds.vue'
import IconLogoMinutes from './IconLogoMinutes.vue'
import IconLogoTW from './IconLogoTW.vue'
</script>

<template>
  <div id="logo">
    <div id="bg">
      <IconLogoBg></IconLogoBg>
    </div>
    <div id="seconds">
      <IconLogoSeconds></IconLogoSeconds>
    </div>
    <div id="minutes">
      <IconLogoMinutes></IconLogoMinutes>
    </div>
    <div id="tw">
      <IconLogoTW></IconLogoTW>
    </div>
  </div>
</template>

<style scoped>
#logo,
#bg,
#seconds,
#minutes,
#tw {
  width: 2.7rem;
  height: 2.7rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  position: relative;
}

#bg,
#seconds,
#minutes,
#tw {
  position: absolute;
}

#seconds {
  animation: seconds-run 10s linear infinite;
}

@keyframes seconds-run {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

#minutes {
  animation: minutes-run 20s linear infinite;
}

@keyframes minutes-run {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

#tw {
  animation: tw-scaling 3s linear infinite;
}

@keyframes tw-scaling {
  0% {
    transform: scale(103%);
  }

  50% {
    transform: scale(87%);
  }

  100% {
    transform: scale(103%);
  }
}
</style>
