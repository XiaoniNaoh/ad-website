<template>
    <div class="article-container">
      <h1 class="title">营养不足或营养过剩</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<p>营养与阿尔茨海默病之间也有关系，营养不足会导致体内关键营养物质的缺乏，无法为大脑提供所需的营养，从而提高患病的概率。例如，维生素B12、维生素D和Omega-3脂肪酸等对大脑健康至关重要的营养物质，如果摄入不足，可能导致认知功能下降和大脑结构的变化。这些营养物质对神经传导、脑细胞的修复和抗炎症都有重要作用，所以它们的缺乏会增加患阿尔茨海默病的风险。
</p>
<p>另一方面，营养过剩也可能对大脑健康产生负面影响。过量摄入高热量、高脂肪和高糖食物可能导致血糖和胆固醇水平升高，这些变化与认知功能障碍和阿尔茨海默病的发展有关。高血糖和高胆固醇会引起一系列的代谢紊乱，包括胰岛素抵抗和动脉粥样硬化，这些情况都可能影响大脑的血液供应和营养输送，从而损害脑细胞的健康。此外，肥胖和代谢综合症也是阿尔茨海默病的风险因素。
</p>
<p>因此，保持营养的平衡至关重要。既要避免营养不足，确保摄入足够的维生素、矿物质和健康脂肪，又要避免营养过剩，特别是高糖高脂饮食的过量摄入。合理的饮食习惯和营养管理不仅有助于维持大脑的正常功能，还能降低阿尔茨海默病的风险。
</p>
<p>
营养不均衡同样不健康。营养不均衡会导致某些关键营养因子或激素水平的缺乏，而这些营养因子和激素对大脑及认知功能的维持至关重要。例如，维生素D、维生素B12、叶酸和Omega-3脂肪酸等营养因子的缺乏，会对脑细胞的健康和功能产生不利影响。
</p><p>
维生素D不仅对骨骼健康重要，还在神经系统中起到保护作用。缺乏维生素D与认知功能下降和阿尔茨海默病的发展有关。维生素B12和叶酸参与神经传导物质的合成和修复，如果缺乏会导致认知障碍和大脑结构的改变。Omega-3脂肪酸则有助于减少炎症反应，保护脑细胞，缺乏时可能增加脑细胞受损的风险。
</p><p>
此外，营养不均衡还可能影响体内激素水平。例如，甲状腺激素、胰岛素和性激素等在大脑功能中扮演重要角色。甲状腺激素缺乏可能导致认知功能下降和情绪障碍，胰岛素抵抗则与认知功能减退和阿尔茨海默病的发病相关。性激素，如雌激素和睾酮的水平变化，也会对脑健康产生影响。
</p><p>
为了预防这些问题，保持饮食的均衡非常重要。确保摄入多样化的食物，包括富含维生素、矿物质、健康脂肪和蛋白质的食物，可以帮助维持体内营养因子和激素的正常水平。均衡的饮食不仅有助于身体健康，还能支持大脑功能，降低患阿尔茨海默病的风险。
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
  