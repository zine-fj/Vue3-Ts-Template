<template>
  <li class="list-li" v-for="item of list" :key="item.id" @click="clickListLi(item)">
    <div class="title van-ellipsis">{{ item.intro }}</div>
  </li>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { ListProps } from '@/hooks/useInterface'

const router = useRouter()
defineProps({
  list: Array as PropType<ListProps['value']>
})
// 点击列表
const clickListLi = (param: ListProps['value'][0]) => {
  console.log('点击列表：', param)
  router.push({ name: 'Detail', query: { id: param.id } })
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.list-li {
  display: inline-block;
  width: 100%;
  min-height: 100px;
  margin: 0 10px 16px 0;
  padding: 0 5px 20px 16px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid $colorBlack;
  .title {
    color: $colorBlack;
    font-size: $fontSize14;
    line-height: 26px;
    margin-bottom: 2px;
    font-weight: 200;
  }
}
</style>
