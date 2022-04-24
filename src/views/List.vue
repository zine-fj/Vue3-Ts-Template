<template>
  <pub-header :headerObj="subscriptionListHeaderObj" />
  <pub-loading v-if="loadingIsShow" />
  <div v-else class="subscription-list-div" ref="contentDiv">
    <h1 class="subscription-title" ref="titleDiv">列表页面</h1>
    <ul class="subscription-list">
      <pub-card :list="subscriptionList" v-if="subscriptionList.length > 0"></pub-card>
      <div class="subscription-list-empty" v-else>
        <p class="empty-word">空页面</p>
      </div>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onActivated, onDeactivated } from 'vue'
import PubLoading from '@/components/PubLoading.vue'
import PubHeader from '@/components/PubHeader.vue'
import PubCard from '@/components/PubCard.vue'
import { HeaderProps, ListProps } from '@/hooks/useInterface'
import { getList } from '@/api/listAPI'

const loadingIsShow = ref(true)

const subscriptionList = ref([] as ListProps['value'])

// div
const contentDiv = ref()
const titleDiv = ref()

// 列表页面头部展示规则
const subscriptionListHeaderObj = ref({
  opacity: 0,
  name: '列表页面',
  leftShow: true,
  contShow: false,
  rightShow: false
} as HeaderProps)

onActivated(() => {
  getListFn()
  document.addEventListener('scroll', handleScroll, true)
})

onDeactivated(() => {
  window.removeEventListener('scroll', handleScroll, true)
})

const handleScroll = () => {
  if (contentDiv.value) {
    const scrollTop = contentDiv.value.scrollTop // 页面滑动距离
    const height = titleDiv.value.offsetHeight // 36
    const titleDivOffsetTop = titleDiv.value.offsetTop // 68
    const contentDivOffsetTop = contentDiv.value.offsetTop // 44
    const contentPaddingT = titleDivOffsetTop - contentDivOffsetTop // 24
    const top = contentDivOffsetTop - contentPaddingT + height
    // console.log('页面滑动 ：', scrollTop, top)

    if (scrollTop > contentPaddingT) {
      let opacity = scrollTop / top
      opacity = opacity > 1 ? 1 : opacity
      // console.log(opacity)
      subscriptionListHeaderObj.value.opacity = opacity
      subscriptionListHeaderObj.value.contShow = true
    } else {
      subscriptionListHeaderObj.value.opacity = 0
      subscriptionListHeaderObj.value.contShow = false
    }
  }
}

const getListFn = async (): Promise<void> => {
  subscriptionListHeaderObj.value.opacity = 0
  subscriptionListHeaderObj.value.contShow = false
  const { value } = await getList()
  loadingIsShow.value = false
  console.log('列表：', value)
  subscriptionList.value = value
}

</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixin.scss";

.subscription-list-div {
  @include WHY();
  padding: 24px 11px 0 24px;
  .subscription-title {
    margin-bottom: 24px;
    color: $colorBlack;
    font-size: $fontSize18;
    font-weight: 200;
    line-height: 36px;
  }
  .subscription-list {
    .subscription-list-empty {
      margin: 16px 13px 0 0;
      .empty-word {
        line-height: 30px;
        text-align: center;
        font-size: $fontSize14;
        color: $colorBlack;
        font-weight: 200;
      }
    }
  }
}
</style>
