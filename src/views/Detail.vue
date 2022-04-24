<template>
  <pub-header :headerObj="subscriptionDetailHeaderObj" />
  <pub-loading v-if="loadingIsShow" />
  <div v-else class="subscription-detail">
    <div class="detail-info">内容</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onActivated } from 'vue'
import { useRoute } from 'vue-router'
import PubLoading from '@/components/PubLoading.vue'
import PubHeader from '@/components/PubHeader.vue'
import { HeaderProps } from '@/hooks/useInterface'
import { getDetail } from '@/api/listAPI'

const route = useRoute()
const loadingIsShow = ref(true)

const subscriptionDetailHeaderObj = ref({
  name: '详情页面',
  leftShow: true,
  contShow: false,
  rightShow: true
} as HeaderProps)

onActivated(() => {
  getDetailFn()
})

const getDetailFn = async (): Promise<void> => {
  // 详情 后台返回
  const { value } = await getDetail(route.query.id)
  loadingIsShow.value = false
  console.log('详情：', value)
}

</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixin.scss";

.subscription-detail {
  @include WHY();
  padding: 8px 24px;
  .detail-info {
    font-size: $fontSize14;
    color: $colorBlack;
  }
}
</style>
