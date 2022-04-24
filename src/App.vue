<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <div class="app-div">
        <div v-if="route.meta.keepAlive" class="app-div">
          <keep-alive>
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </div>
        <component :is="Component" v-else />
      </div>
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/transition.scss";

html,
body,
#app,
.app-div {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: $bg;
}
</style>
