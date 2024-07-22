<template>
    <div class="article-container">
      <h1 class="title">《偷走心智的贼：阿尔茨海默病的故事》</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <img src="/images/books/图片4.png">
<p>
《偷走心智的贼：阿尔茨海默病的故事》由于涵撰写，深入探讨了阿尔茨海默病的发现和研究历程。作者从阿尔茨海默病首次被发现开始叙述，详细讲解了从基因、细胞到实验方法等基础知识，使读者能够全面理解这一疾病的复杂性。
</p><p>
书中回顾了医学界对阿尔茨海默病的研究历程，包括细胞遗传学、细胞学、免疫学和制药行业等领域的重大研究成果。作者通过曲折且充满悬念的故事叙述，展示了科学家们在探索阿尔茨海默病病因和治疗方法过程中所经历的挑战和突破。
</p><p>
本书不仅介绍了历史上的重大研究，还涵盖了最新的研究进展，包括已经完成的和正在进行的研究项目。这使得读者能够了解当前科学界在阿尔茨海默病领域的最新发现和未来研究方向。
</p><p>
《偷走心智的贼：阿尔茨海默病的故事》是一本适合对阿尔茨海默病感兴趣的读者阅读的全面性书籍。它不仅为患者和家属提供了宝贵的知识，也为医学界和公众提供了深入了解这一疾病的机会。通过这本书，读者可以更好地理解阿尔茨海默病的科学背景和研究动态，为应对这一疾病提供科学依据和支持。</p>
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
  