<template>
    <div class="article-container">
      <h1 class="title">炎症侵犯</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <p>炎症是诱发阿尔茨海默病的一个可能原因，阿尔茨海默病患者的大脑中常常能看到慢性炎症的迹象，而这些炎症可能由多种因素引发，包括感染和不健康的饮食，比如高反式脂肪的摄入。感染会引发身体的免疫反应，导致炎症。慢性的细菌或病毒感染，如牙龈炎等，可能导致大脑中的慢性炎症，从而增加阿尔茨海默病的风险。这是因为这些感染引发的炎症会产生一系列的化学物质，这些化学物质可能损害脑细胞并促进阿尔茨海默病病理特征的形成。
        </p>
        <p>反式脂肪摄入同样被认为会增加体内的炎症水平。反式脂肪不仅会损害心血管健康，还可能通过增加体内的炎症反应，间接影响大脑健康。长期摄入高反式脂肪的饮食会导致大脑中更多的炎症反应，这可能与阿尔茨海默病的发展有关。ApoE4基因是阿尔茨海默病的已知风险因素之一。研究表明，携带ApoE4等位基因的人，其大脑中更容易出现炎症反应。具体来说，ApoE4可以激活炎症因子NF-κB。当细胞受到损害或入侵者攻击时，NF-κB被激活，启动一系列炎症反应，试图保护细胞。这种炎症反应虽然在短期内有助于抵御感染，但如果长期存在，则可能导致慢性炎症，进而损害脑细胞，增加阿尔茨海默病的风险。因此，我们可以将阿尔茨海默病看作是大脑对慢性炎症侵犯的一种自我保护效应。
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
  