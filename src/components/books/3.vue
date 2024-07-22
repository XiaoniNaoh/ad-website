<template>
    <div class="article-container">
      <h1 class="title">《记忆的终点》</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <img src="/images/books/图片3.png">
<p>
    《记忆的终点》由杰伊·英格拉姆撰写，是一本全面介绍阿尔茨海默症的百科全书，向读者揭示了阿尔茨海默症的真相。书中详细追溯了阿尔茨海默症的由来，包括“0号病人”奥古斯特·D的病例。这位病人是阿尔茨海默病的首例记录病例，通过对她的研究，医生们第一次描述并命名了这种疾病。
</p><p>
书中不仅回顾了阿尔茨海默症发现以来的百年疾病史，还介绍了当前最新的医学研究进展。杰伊·英格拉姆以通俗易懂的语言，深入浅出地解释了阿尔茨海默症的病理机制和基因背景。通过对基因的分析和解读，书中揭示了遗传因素在阿尔茨海默症中的作用，并探讨了基因检测和早期诊断的重要性。
    </p><p>
此外，《记忆的终点》还提供了基本的预防措施，帮助读者了解如何通过日常生活方式的改变来降低阿尔茨海默症的风险。这些预防措施包括健康饮食、规律运动、保持社交活动、精神刺激和管理压力等。书中还探讨了未来可能的治疗方向和科学家的新发现，为读者提供了对抗阿尔茨海默症的希望和信心。
    </p><p>
总体而言，这本书不仅是患者和家属了解阿尔茨海默症的重要参考资料，也是医学界和公众深入了解这一复杂疾病的有力工具。杰伊·英格拉姆通过丰富的历史和现代科学研究，为我们揭示了阿尔茨海默症的全貌，帮助我们更好地理解和应对这一挑战。</p>
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
  