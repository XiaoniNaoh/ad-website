<template>
    <div class="article-container">
      <h1 class="title">与毒性化合物接触</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<p>与毒性化合物的接触，如抽烟、接触有毒重金属和农药等，对大脑和认知功能会造成严重危害。这些有毒化合物可能通过多种机制对大脑造成损害，其中之一是促进β-淀粉样蛋白的生成，并削弱神经网络系统。
</p><p>
首先，抽烟已被证明会增加阿尔茨海默病的风险。烟草中的有害化学物质，如尼古丁和其他致癌物质，可以通过氧化应激和炎症反应对脑细胞造成损害。这些化学物质还可能促进β-淀粉样蛋白的积累，形成斑块，进而破坏脑细胞的正常功能。
</p><p>
其次，有毒重金属，如铅、汞和铝等，也与阿尔茨海默病的发生有关。这些重金属可以通过食物、水和环境污染等途径进入人体，并在大脑中积累。重金属的毒性作用包括诱导氧化应激、炎症反应和神经毒性，这些都会促进β-淀粉样蛋白的生成和积累。此外，重金属还会影响神经网络的完整性和功能，削弱神经元之间的连接和信号传递。
</p><p>
农药也是一种常见的有毒化合物，广泛用于农业生产中。长期接触农药，特别是有机磷和有机氯类农药，与神经毒性和认知功能下降密切相关。这些农药同样会通过氧化应激和炎症反应促进β-淀粉样蛋白的生成，进一步破坏大脑的神经网络系统。
</p><p>
β-淀粉样蛋白假说是阿尔茨海默病研究中的一个重要理论，认为阿尔茨海默病的发生与β-淀粉样蛋白在大脑中的异常积累有关。这些蛋白质片段会聚集形成斑块，干扰脑细胞之间的通信，最终导致脑细胞的死亡和大脑组织的损伤。因此，与毒性化合物的接触通过促进β-淀粉样蛋白的生成，增加了阿尔茨海默病的风险。
</p><p>
综上所述，避免接触有毒化合物，如戒烟、减少接触重金属和农药，是保护大脑健康、降低阿尔茨海默病风险的重要措施。</p>
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
  