<template>
    <div class="article-container">
      <h1 class="title">病理体现</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
    <h3>老年斑</h3>
    <p>老年斑是阿尔茨海默病的一个显著特征，主要由不溶性纤维形式存在的β-淀粉样蛋白构成。β-淀粉样蛋白源自β-淀粉样蛋白前体蛋白的水解，淀粉样蛋白容易与其他β-淀粉样蛋白分子形成低聚体。随着淀粉样蛋白的持续生成，这些低聚体会逐渐聚集形成高分子量的不溶性β-淀粉样蛋白纤维，最终沉积在大脑中形成老年斑。这些老年斑主要出现在大脑皮层和海马区域，干扰神经元之间的信号传递，破坏脑功能。</p>

<h3>神经元纤维缠结</h3>
<p>阿尔茨海默病患者的另一个重要病理特征是神经元纤维缠结。这些缠结是由过度磷酸化的Tau蛋白形成的。正常情况下，Tau蛋白在神经元中帮助维持微管结构的稳定，支持物质在神经元内的运输。然而，在阿尔茨海默病中，Tau蛋白发生异常磷酸化，导致其从微管上脱离，聚集成缠结状结构。这些缠结主要集中在大脑的特定区域，如海马和内侧颞叶，并可通过神经通路进入脑和脑脊液。这一过程会引发氧化应激反应和炎症反应，可能造成突触损伤和神经元变性损伤，最终导致大量神经元丢失。</p>

<h3>其他病理特点</h3>
<p>除了老年斑和神经元纤维缠结，阿尔茨海默病患者的病理特点还包括脑皮质细胞减少和皮质动脉及小动脉的淀粉样变性。这些病变同样与β-淀粉样蛋白有关。脑皮质细胞减少意味着神经元数量显著下降，影响大脑的认知功能和记忆能力。淀粉样变性则指β-淀粉样蛋白在血管壁沉积，导致血管僵硬和脆弱，进一步影响大脑的血液供应和功能。</p>
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
  