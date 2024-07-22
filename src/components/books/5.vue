<template>
    <div class="article-container">
      <h1 class="title">《请你迷失在我身旁：如何与逐渐老去的父母相处》</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <img src="/images/books/图片5.png">
<p>
《请你迷失在我身旁：如何与逐渐老去的父母相处》是岸见一郎撰写的一本书，着重探讨如何与逐渐老去的父母相处，特别是当他们患有阿尔茨海默病时。尽管本书的重点不是阿尔茨海默病患者本身，而是他们的照护者，岸见一郎通过阿德勒个体心理学的思想，引导读者思考如何在照护过程中重构与父母的关系。
</p><p>
作者强调，在关注病人的同时，不要忘记照顾好自己的心理健康。照护阿尔茨海默病患者是一项艰巨的任务，可能会带来极大的情感和心理压力。书中提出了一些实用的方法和建议，帮助照护者在处理日常护理事务的同时，保持心理平衡和情感稳定。
</p><p>
岸见一郎通过具体的案例和故事，展示了如何在面对父母逐渐老去和患病的情况下，依然能够维持积极的关系。他教导我们如何在照护过程中保持耐心和理解，如何处理与父母之间可能出现的冲突和误解，以及如何在这种特殊的情况下找到情感连接的方式。
</p><p>
此外，作者还探讨了照护者自身的需求和自我关怀的重要性。他鼓励照护者寻求支持，与他人分享自己的感受和经历，避免情感上的孤立。同时，他也强调了照护者需要为自己设定界限，确保自己的身心健康不会被过度的照护任务所侵蚀。
</p><p>
《请你迷失在我身旁：如何与逐渐老去的父母相处》不仅为阿尔茨海默病患者的照护者提供了宝贵的心理支持和实际建议，也帮助读者更好地理解和应对与老去的父母相处时的复杂情感。通过这本书，照护者可以找到平衡的方法，在给予父母关爱的同时，也能保持自己的心理健康。






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
  