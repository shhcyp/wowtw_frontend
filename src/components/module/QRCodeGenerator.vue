<script setup>
import {ref, watch} from 'vue'
import QRCode from 'qrcode'

const props = defineProps({
  alipayQRCodeContent: String
})
const qrCodeImage = ref(null)

const generateQRCode = async () => {
  qrCodeImage.value = await QRCode.toDataURL(props.alipayQRCodeContent)
}

watch(props, () => {
  generateQRCode()
},{
  deep: true
})
</script>

<template>
  <img :src="qrCodeImage"  alt="..."/>
</template>

<style scoped>

</style>