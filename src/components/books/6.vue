<template>
    <div class="article-container">
      <h1 class="title">《阿尔茨海默病自我管理全书》</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <img src="/images/books/图片6.png">
<p>
    《阿尔茨海默病自我管理全书》是迪恩·谢扎和艾伊莎·谢扎共同撰写的一本关于阿尔茨海默病的综合指导书籍。本书提供了科学合理的风险评估测试，帮助患者逐条拆解不可干预风险和可干预风险，使患者能够正视自己的健康状态。
</p><p>
书中围绕营养、锻炼、放松、睡眠和优化五个关键维度，提供了具体的自我测评和管理方案。每个维度都有量化和精细的操作指南，帮助患者在日常生活中进行个性化管理。例如，书中详细介绍了如何通过合理饮食来支持大脑健康，推荐富含抗氧化剂、Omega-3脂肪酸和其他关键营养素的食物。同时，书中提供了具体的锻炼计划，帮助患者通过有氧运动、力量训练和脑部锻炼来保持身体和大脑的活力。
</p><p>
在放松和睡眠方面，书中给出了实用的建议，帮助患者减轻压力，改善睡眠质量。放松技术包括冥想、深呼吸和渐进性肌肉放松等，旨在降低压力激素的水平，促进大脑健康。针对睡眠问题，书中提供了睡眠卫生的建议，如建立规律的作息时间，避免睡前刺激物等。
</p><p>
优化维度则涉及全面提升生活质量的策略，帮助患者在各个方面进行综合调整。书中不仅展示了科学依据，还分享了具有阿尔茨海默病遗传风险的作者夫妇及其子女每天如何对“老年痴呆”进行预防的实际案例。这些案例展示了如何在日常生活中实施书中的建议，并取得积极的效果。</p>
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
  