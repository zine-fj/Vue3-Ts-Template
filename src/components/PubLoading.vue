<template>
  <div class="pub-loading">
    <div id="lottie_box" class="lottie-cl" ref="lottieRef"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import lottieWeb from 'lottie-web'
import lottieJson from '@/assets/images/loading.json'

const lottie = ref()
const lottieRef = ref()
onMounted(() => {
  lottie.value = lottieWeb.loadAnimation({
    container: document.getElementById('lottie_box'),
    renderer: 'svg',
    loop: true,
    animationData: lottieJson
  })
})
onUnmounted(() => {
  lottieRef.value = ''
})
</script>

<style lang="scss" scoped>
.pub-loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 99;
  .lottie-cl {
    width: 50%;
    border-radius: 10%;
    overflow: hidden;
    margin-top: -50px;
  }
}
</style>
