<template>
    <div class="article-container">
      <h1 class="title">《阿尔茨海默病：你和你家人需要知道的》</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <img src="/images/books/图片1.png">
<p>
《阿尔茨海默病：你和你家人需要知道的》由盖亚特莉·德维撰写，是一本关于阿尔茨海默病的指导读物。盖亚特莉·德维在痴呆症领域有23年的专攻经验，她通过分享一个个实际病例，让读者对这种疾病有了更深刻的认识。全书不仅科普了什么是阿尔茨海默病，还详细阐释了我们对该疾病的常见误区，包括一些专业医生在诊断过程中容易犯的错误。例如，将更年期、糖尿病引起的认知错误误认为是阿尔茨海默病的症状。作者还打破了“必须在医院治疗”的狭隘观点，指出有时在家治疗，让病人待在熟悉的环境中反而是更好的选择。
</p><p>
这本书为患者家人提供了许多宝贵的经验，尤其是在面对常见问题时应如何处理。例如，书中详细描述了如何应对患者的情绪波动、如何改善他们的生活质量，以及如何建立一个支持性的护理环境。同时，书中还强调了护理人员自身的心理健康和应对策略，帮助他们更好地照顾患者。
</p><p>
《阿尔茨海默病：你和你家人需要知道的》通过科学与实际案例相结合，使读者不仅了解阿尔茨海默病的科学知识，还能在实际护理中运用这些知识，从而提升患者及其家人的生活质量。这本书是患者家属、护理人员以及对阿尔茨海默病感兴趣的读者的一本必读之作。
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
  