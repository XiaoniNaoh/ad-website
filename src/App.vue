<script setup>
import { ref } from 'vue'
import top from './components/top.vue'
import bottom from './components/bottom.vue'

const header_show = ref(true)
const footer_show = ref(true)

const header = (bool) => {
  header_show.value = bool
}

const footer = (bool) => {
  footer_show.value = bool
}
</script>

<template>
  <div id="app">
  <div class="top"><top/></div>
    <div class="mainpart">
      <router-view @header="header" @footer="footer"></router-view>
    </div>
    <div class="top"><bottom/></div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 设置最小高度为视窗高度 */
}

.top{
  z-index:1;
  position: relative;
}

.mainpart {
  flex: 1; /* 使主内容区域填充剩余空间 */
  display: flex;
  flex-direction: column;
  z-index: 0;
}
</style>

<style>
body {
  width: 100%;
  padding: 0;
  margin: 0;
  min-width: 350px;
}

/* 视口宽度小于720px时的媒体查询 */
@media screen and (max-width: 720px) {
  body {
    width: 100%;
    padding: 0;
    margin: 0;
    min-width: 320px; /* 如果需要，可以调整最小宽度 */
  }
  
}
  </style>
