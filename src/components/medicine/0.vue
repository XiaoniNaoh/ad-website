<template>
  <div class="article-container">
    <h1 class="title">压力管理</h1>
    <div class="font-size-controls">
      调整字体大小：
      <button @click="decreaseFontSize">-</button>
      <button @click="increaseFontSize">+</button>
    </div>
    <div class="content" :style="{ fontSize: fontSize + 'px' }">

    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleComponent',
  data() {
    return {
      fontSize: 16, // 初始字体大小
    };
  },
  methods: {
    increaseFontSize() {
      this.fontSize += 2;
    },
    decreaseFontSize() {
      if (this.fontSize > 12) {
        this.fontSize -= 2;
      }
    },
  },
};
</script>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9; /* 淡色背景 */
  text-align: center;
}

.title {
  font-weight: bold;
  margin-bottom: 20px;
}

.content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  text-indent: 2em;
  text-align: left; /* 文字居左对齐，整个内容居中对齐 */
  position: relative;
}

.content::before,
.content::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px; /* 线条宽度 */
  background-color: #000; /* 线条颜色 */
}

.content::before {
  left: 0;
}

.content::after {
  right: 0;
}

.article-image {
  display: block;
  margin: auto;
  max-width:30%;
  height: auto;
}

.font-size-controls {
  margin-top: 20px;
}

button {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

img {
  display: block;
  margin-left: 130px;
  max-width:60%;
  height: auto;
}
</style>
