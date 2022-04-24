<template>
  <div class="pub-header">
    <div class="header-img-div">
      <img v-if="headerObj.leftShow" :src="arrowLeftImg" @click="clickHeaderLeft" />
    </div>
    <div
      v-if="headerObj.contShow"
      class="header-cont"
      :style="{ opacity: headerObj.opacity }"
    >{{ headerObj.name }}</div>
    <div class="header-img-div">
      <img v-if="headerObj.rightShow" :src="homeImg" @click="clickHeaderRight" />
    </div>
  </div>
  <div class="pub-header-empty"></div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { HeaderProps } from '@/hooks/useInterface'
import { removeToken } from '@/utils/auth'
import { getLoginOut } from '@/api/loginAPI'

const route = useRoute()
const router = useRouter()

defineProps({
  headerObj: Object as PropType<HeaderProps>
})
const arrowLeftImg = require('@/assets/images/arrow-left.svg')
const homeImg = require('@/assets/images/home.svg')

const clickHeaderLeft = () => {
  router.go(-1)
}
const clickHeaderRight = async () => {
  const res = await getLoginOut()
  console.log('click - right', res)
  if (res.statusCode === '200') {
    removeToken()
    router.push(`/login?redirect=${route.fullPath}`)
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.pub-header-empty {
  width: 100%;
  height: 44px;
}
.pub-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 44px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $bg;
  .header-img-div {
    width: 32px;
    height: 32px;
  }
  .header-cont {
    color: $colorBlack;
    font-size: $fontSize18;
  }
}
</style>
