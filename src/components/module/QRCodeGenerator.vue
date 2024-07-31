<script setup>
import {ref, watch} from 'vue'
import QRCode from 'qrcode'

const props = defineProps({
  alipayQRCodeContent: String,
  paymentInfo: Number
})
const qrCodeImage = ref(null)

const getCssVariable = (variableName) => {
  const root = document.documentElement
  return getComputedStyle(root).getPropertyValue(variableName).trim()
}

const rgbToHex = (rgb) => {
  const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb)
  return result
      ? "#" +
      ((1 << 24) + (parseInt(result[1]) << 16) + (parseInt(result[2]) << 8) + parseInt(result[3]))
          .toString(16)
          .slice(1)
      : rgb
}

const generateQRCode = async () => {
  let colorDark
  switch (props.paymentInfo) {
    case 1:
      colorDark = rgbToHex(getCssVariable('--c-good')) // 获取并转换 CSS 变量值
      break
    case 0:
      colorDark = rgbToHex(getCssVariable('--c-red')) // 获取并转换 CSS 变量值
      break
    case -1:
      colorDark = '#000000'
      break
    default:
      colorDark = '#000000' // 黑色
  }

  qrCodeImage.value = await QRCode.toDataURL(props.alipayQRCodeContent, {
    color: {
      dark: colorDark,
      light: '#FFFFFF' // 背景颜色
    }
  })
}

watch(props, () => {
  generateQRCode()
}, {
  deep: true
})
</script>

<template>
  <img v-if="qrCodeImage" :src="qrCodeImage"
       :class="{'blue-border': qrCodeImage, 'green-border': paymentInfo === 1, 'red-border': paymentInfo === 0}"
       alt=""/>
  <div v-else id="placeholder"></div>
</template>

<style scoped>
.blue-border {
  border: 3px solid var(--c-blue);
  border-radius: 5px;
}

.green-border {
  border: 3px solid var(--c-good);
  border-radius: 5px;
}

.red-border {
  border: 3px solid var(--c-red);
  border-radius: 5px;
}
</style>