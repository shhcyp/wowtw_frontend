<script setup>
import {ref, watch, inject} from 'vue'

const currenBoolean = inject('key-boolean')
const expand = ref(null)
const collapse = ref(null)

watch(currenBoolean, () => {
  currenBoolean.value ? expand.value.beginElement() : collapse.value.beginElement()
})
</script>

<template>
  <svg class="footer-icon-svg" width="11" height="6" viewBox="0 0 11 6">
    <polyline id="vertical-arrow" data-footer-icon-shape="" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" fill="none" fill-rule="evenodd" points="10.075 0.675 5.5 5.323 0.925 0.675">
      <animate ref="expand" id="expand" data-footer-animate="expand" attributeName="points" values="10.075 0.675 5.5 5.323 0.925 0.675;
                        10.075 3 5.5 3 0.925 3;
                        10.075 5.325 5.5 0.676 0.925 5.325" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0;
                        0.5;
                        1" calcMode="spline" keySplines="0.12, 0, 0.38, 0;
                            0.2, 1, 0.68, 1">
      </animate>
      <animate ref="collapse" id="collapse" data-footer-animate="collapse" attributeName="points" values="10.075 5.325 5.5 0.676 0.925 5.325;
                        10.075 3 5.5 3 0.925 3;
                        10.075 0.675 5.5 5.323 0.925 0.675" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0;
                        0.5;
                        1" calcMode="spline" keySplines="0.2, 0, 0.68, 0;
                            0.2, 1, 0.68, 1">
      </animate>
    </polyline>
  </svg>
</template>

<style scoped></style>
