<template>
    <div class="article-container">
      <h1 class="title">依赖受体和微管是什么?</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <h3>“依赖受体”是什么</h3>
        <p>我们发现，如果一种名为p75NTR的常见神经营养因子受体不与对应的配体结合，那么这种受体会不断诱导细胞凋亡。也就是说，神经营养因子配体可以阻止细胞凋亡，如果这把“钥匙”与“锁”结合，那么神经元就可以保持存活，相反，如果受体没有找到“钥匙”，那么它就像一个暴怒的君王，不断诱导细胞凋亡。这意味着，神经营养因子配体必须一直留在受体内，这样神经元细胞才能存活；而静态情况下（受体未能与配体结合），受体会诱导细胞凋亡。这种“神经兮兮”的受体，我们通常称为“依赖受体”。</p>
        <h3>“微管”是什么</h3>
        <p>我们在建筑房子时，通常需要先构造出基本的框架，再装修成各种模样，那么细胞呢？细胞中有一种称为细胞骨架的结构，它支撑着大概的细胞结构。而“微管”是真核细胞中的一种纤维结构，是细胞骨架的主要成分，由微管蛋白和微管结合蛋白组成，是一种中空圆柱状结构，像一个管子，参与细胞运动、物质运输、分裂等生理过程。</p>

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
    margin: 20px auto;
    max-width: 150%;
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
  </style>
  