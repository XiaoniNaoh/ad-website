<template>
    <div class="article-container">
      <h1 class="title">石菖蒲治疗阿尔兹海默病的作用机制研究</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <p>摘要：基于网络药理学、分子对接和实验验证分析石菖蒲治疗阿尔兹海默病(Alzheimer’s disease,AD)的作用机制。利用TCMSP数据库及查阅文献收集石菖蒲活性成分后通过Swiss Target Prediction数据库预测活性成分作用靶点;使用STRING数据库进行蛋白互作分析;通过DAVID数据库对关键靶点进行GO和KEGG信号通路富集分析;最后,采用AutoDock软件对活性成分与重要靶点进行分子对接验证,并通过酶抑制实验验证石菖蒲对AChE活性的影响。石菖蒲中有7个潜在活性成分,对应靶点254个,AD靶点1 981个,药物疾病共同靶点120个;GO富集分析得到306个条目,KEGG通路富集分析获得79条信号通路,主要包括癌症信号通路、雌激素信号通路及VEGF信号通路等;分子对接结果显示,AChE和AKT1靶点与多数石菖蒲活性成分能够稳定自发结合;酶抑制实验证明石菖蒲可抑制AChE活性。本研究从网络药理学、分子对接和酶抑制实验等方面预测并验证了石菖蒲治疗AD的作用机制,为石菖蒲的临床应用及进一步开发提供参考和依据。</p>
    <p>•<a href="https://kns.cnki.net/kcms2/article/abstract?v=VKFFl0Cm57Zu5wIDNzbBLM31C4pxwObJJwdrNgJPZh--EW9fQow97cVA0BO8o4uzR4eErc3IB6QP9b9MqPEU9i6gowjM6IttN0HJwzCHInd4d1wCuiztAD05OnBtKJfWSJqVjabzuzA=&uniplatform=NZKPT&flag=copy">[1] 双分子γ-咔啉衍生物的合成及其对胆碱酯酶的抑制活性研究[J]. 陶雪芬;朱江伟;金银秀;王玉新.中国现代应用药学,2023(19)</a> </p>
	<p>•<a href="https://kns.cnki.net/kcms2/article/abstract?v=VKFFl0Cm57ZbTmE1yI2kH0N8jjyq29_y0W9cBcnzWmZWvEhlaC7oQN8wKhfiv9uCPC4oEeerSycWwZROZcQo2HPYkNU1njxMn807ptwp6FHl48UfrYie0LFWITkSwXzfaq6AW3nIzLk=&uniplatform=NZKPT&flag=copy">[2] 六味地黄丸治疗老年痴呆症的研究进展[J]. 郭敬;方萌;雷登良;曾鹏.基层中医药,2023(07)</a></p>
	<p>•<a href="https://kns.cnki.net/kcms2/article/abstract?v=VKFFl0Cm57ZRToa4manrfCUrAQM4Qo5pVnmmWXcHL23UOlY64llzBlFcLlEjXvLzxFBPMrdWEZmGYaIVL9tPb4nSCxSk0LoNkUSER9qdbTZGB-wL9o8rQin7hODDgJvqzEsGuZxxzA4=&uniplatform=NZKPT&flag=copy">[3] 阿尔茨海默病发病机制与药物治疗研究进展[J]. 卢彦宇;方梓庄;范洋溢;王炳蔚;郑瑞茂.生理科学进展,2023(02)</a></p>
	<p>•<a href="https://kns.cnki.net/kcms2/article/abstract?v=VKFFl0Cm57ahRkoP5Z558mMdLVCxo7atfbXBY5J9mFARDnBbx2dwnD3vuMBJkZqNxS3biHi6tJacqlFD6FkRyEsbwNMY6PYihaR4Vbe10MwE4IjGrcI_izVghpeRvsWjP4ypSQcEYQI=&uniplatform=NZKPT&flag=copy">[4] 石菖蒲化学成分及其药理作用概述[J]. 梅婷婷;闫珺;陈晶.中医药信息,2022(04)</a></p>
	<p>•<a href="https://kns.cnki.net/kcms2/article/abstract?v=VKFFl0Cm57YjigXfNO9vuUwJriHCJzo-5KvGR8ysl-4hV7momMnMLAU20Fv7PVUU3ilwJhL-ASnkISM8PM0qIFQbhrX1lYhVkTSREIwtA8jyqXjUhggBPLXD-McCVB7w7RX6OeIJlPs=&uniplatform=NZKPT&flag=copy">[5] 基于数据挖掘中医药治疗阿尔茨海默病用药规律研究[J]. 芦锰;周雨慧;李晓宁;孙昦丹;郭金栋;武博文;武密山.中国中药杂志,2021(06)</a></p>

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
  