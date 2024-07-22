<template>
    <div class="article-container">
      <h1 class="title">阿尔兹海默病与听力损失关系的研究进展</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <p>摘要：阿尔兹海默病是一种与年龄相关的神经退行性疾病,其发病率在全球范围内逐年增高。研究表明,听力损失在轻度认知障碍和阿尔兹海默病患者中发生率较高,也可能是认知障碍发生与发展的危险因素,二者存在交互作用,但其因果机制仍不清楚。听力障碍的早期筛查和管理,可能对阿尔兹海默病的早期诊断、症状改善和疾病进展具有重要作用。本文通过对相关临床和基础研究进行综述,探讨听力损失与阿尔兹海默病的相关性及两者之间可能的因果机制。</p>
<p>•<a href="https://kns.cnki.net/kcms2/article/abstract?v=VKFFl0Cm57Z4p80R1eihsUPwWdpM3Cv-r0XuZVRhbAUFYVK2RRPCMtusdV8wBbawz_L3OpEmNmRnaV2Hc0C6j3YU_Yect1C6Q-j_9p10ZL7qXy1I347pBY1CaELkZ5irJrgonvG2uHnexOR5R7sfWp8MBfDisG23&uniplatform=NZKPT&flag=copy">
    [1] Age-related hearing loss and cognitive decline — The potential mechanisms linking the two[J]. Yasue Uchida;;Saiko Sugiura;;Yukiko Nishita;;Naoki Saji;;Michihiko Sone;;Hiromi Ueda.Auris Nasus Larynx,2018</a> 
</p><p>•<a href="https://kns.cnki.net/kcms2/article/abstract?v=VKFFl0Cm57br0EdNmofymoOnvGtsgybzlrfvFGTQZsUFCTjWP2DTeTxMkY9EfRH4-FvCV-f25SzChIgw80Nw3daXvcQdU2DdUr96ZP86df0NNb14bKCmIm1A-WduOSnaiMdiz81EvbAZ9GPsTURxE_akvyaPpqNr&uniplatform=NZKPT&flag=copy">
    [2] Hearing loss and the risk of dementia in later life[J]. Andrew H. Ford;;Graeme J. Hankey;;Bu B. Yeap;;Jonathan Golledge;;Leon Flicker;;Osvaldo P. Almeida.Maturitas,2018</a>
</p><p>    •<a href="https://kns.cnki.net/kcms2/article/abstract?v=VKFFl0Cm57bq6mGIGKQKyoZcH0sGJcVthCjz_HcTQePDqJh4bv3-p3d1xyecqvX59C_uIlafP1RnHrzWXBJatFbILyn2IHPcfslEChEP5QPj1MWhX068gVVAn1YMb9ztq7_lR-0UkSOIyPklqB3VS6I2kUUG4wC6&uniplatform=NZKPT&flag=copy">
[3] Cognitive decline and increased hippocampal p-tau expression in mice with hearing loss[J]. So Young Park;;Min Jung Kim;;Hong Lim Kim;;Dong Kee Kim;;Sang Won Yeo;;Shi Nae Park.Behavioural Brain Research,2018</a>
    </p></div>
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
  a {
  color: inherit; /* 继承父元素的颜色 */
  text-decoration: none; /* 去掉下划线 */
  font-size: 20px;
  font-weight: 100;
  font-family: 'Times New Roman', Times, serif;
}

a:hover {
  text-decoration: underline; /* 悬停时显示下划线 */
}
  </style>
  