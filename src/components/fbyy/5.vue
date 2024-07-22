<template>
    <div class="article-container">
      <h1 class="title">APP和PSEN基因影响</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
       
        <p>APP、PSEN1 和 PSEN2 基因的突变是阿尔茨海默病重要的遗传因素。这些突变通过影响β-淀粉样蛋白的代谢，促进淀粉样斑块的形成，从而加剧神经细胞的损伤和死亡。</p>
        <h3>APP 基因</h3>
        <p>APP（淀粉样前体蛋白）基因编码一种跨膜蛋白，这种蛋白在正常情况下会被酶切割产生不同的产物。APP 基因的突变会导致淀粉样前体蛋白被异常切割，产生过量的β-淀粉样蛋白。这些β-淀粉样蛋白容易在大脑中聚集，形成有毒的淀粉样斑块，损害神经细胞的功能和生存。</p>
        <p>携带 APP 基因突变的人通常会在65岁之前出现阿尔茨海默病症状，这种早发性家族性阿尔茨海默病在家族中有明显的遗传倾向。APP 基因突变导致的β-淀粉样蛋白沉积是阿尔茨海默病的重要病理特征之一。</p>
        <h3>PSEN1 基因</h3>
        <p>PSEN1（早老素1）基因编码一种参与γ-分泌酶复合物的蛋白质。γ-分泌酶在淀粉样前体蛋白的切割过程中起重要作用。PSEN1 基因突变会导致γ-分泌酶功能异常，增加β-淀粉样蛋白的产生，进而促进淀粉样斑块的形成。</p>
        <p>PSEN1 基因突变是导致早发性家族性阿尔茨海默病最常见的原因之一。携带 PSEN1 基因突变的人通常在40到50岁之间开始出现症状。由于 PSEN1 基因突变直接影响了β-淀粉样蛋白的代谢，这类突变者的家族通常具有明显的阿尔茨海默病病史。</p>
        <h3>PSEN2 基因</h3>
        <p>PSEN2（早老素2）基因与 PSEN1 基因类似，也编码一种参与γ-分泌酶复合物的蛋白质。PSEN2 基因突变虽然比 PSEN1 突变少见，但其作用机制相似，导致β-淀粉样蛋白的异常积累和斑块形成。</p>
        <p>携带 PSEN2 基因突变的人也会增加早发性家族性阿尔茨海默病的风险，但发病年龄和病情进展速度可能会有所不同。尽管 PSEN2 突变的频率较低，但仍需高度关注其对阿尔茨海默病发病的影响。</p>

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
    margin: 20px auto;
    max-width: 150%;
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
  </style>
  