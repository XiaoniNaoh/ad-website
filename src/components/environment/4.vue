<template>
    <div class="article-container">
      <h1 class="title">生活环境单一</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<p>生活环境的单一和缺少社交活动也是影响阿尔茨海默病的重要因素。一个单调、缺乏刺激的生活环境会导致大脑灵活性下降，增加患阿尔茨海默病的风险。大脑需要不断的刺激和挑战来维持其功能和健康。
</p><p>
首先，缺乏社交活动会导致认知功能的减退。社交互动不仅能提供情感支持，还能激发大脑活动，促进神经连接的形成和维护。通过与他人交流，大脑需要进行语言处理、情绪管理和问题解决等复杂任务，这些活动都有助于保持大脑的灵活性和健康。
</p><p>
其次，单一的生活环境缺乏新鲜的刺激和挑战，会使大脑处于一种“懒惰”状态。大脑需要不断学习新知识、接触新事物来激活不同的脑区，促进神经元的生长和连接。如果生活环境过于单调，缺乏这些刺激，大脑的认知能力可能会逐渐衰退。
</p><p>
研究表明，积极参与社交活动可以帮助建立和维持新的神经连接，这对于预防和减缓阿尔茨海默病症状非常重要。例如，参加志愿服务、加入兴趣小组、定期与朋友和家人聚会等，都可以提供有益的社交互动。此外，参与智力活动，如阅读、下棋、学习新技能等，也能刺激大脑，增强认知功能。
</p><p>
总的来说，丰富的生活环境和积极的社交活动有助于维持大脑健康，减少阿尔茨海默病的风险。因此，我们通常推荐多多参与社交活动，通过建立新的神经连接来防止认知能力下降，尽可能预防患病或减缓阿尔茨海默病的病症。
</p>






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
  