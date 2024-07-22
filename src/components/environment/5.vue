<template>
    <div class="article-container">
      <h1 class="title">不良生活方式</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<p>
不良生活方式，如酗酒、缺乏运动等，对身体健康的危害是显而易见的，而身体健康与脑健康之间存在密切的联系。保持健康的生活作息不仅有利于身体的整体健康，还能对大脑产生积极影响，降低阿尔茨海默病的风险。
</p><p>
首先，酗酒对大脑有直接的毒性作用。长期大量饮酒会导致大脑萎缩，损害神经细胞，并干扰大脑的神经传导。这些变化会引起认知功能下降，增加患阿尔茨海默病的风险。此外，酗酒还会导致营养不良，特别是维生素B1（硫胺素）的缺乏，这种营养缺乏与酒精性脑病和认知障碍密切相关。
</p><p>
缺乏运动也是一个重要的风险因素。规律的身体活动不仅能增强心血管健康，改善血液循环，促进氧气和营养物质向大脑的输送，还能刺激大脑中的神经生长因子，促进神经元的生长和连接。运动还具有抗炎作用，可以降低全身和大脑中的炎症水平，这对于预防阿尔茨海默病也非常重要。
</p><p>
此外，不良生活方式还包括不健康的饮食、缺乏睡眠和过度压力等，这些因素都会对身体和大脑健康产生负面影响。健康的饮食应富含水果、蔬菜、全谷物和健康脂肪，以提供大脑所需的营养物质。良好的睡眠习惯有助于脑细胞的修复和清除大脑中的代谢废物。管理压力则有助于降低应激激素水平，保护脑细胞。
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
  