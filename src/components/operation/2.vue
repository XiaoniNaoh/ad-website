<template>
    <div class="article-container">
      <h1 class="title">多奈哌齐在轻度至中度阿尔茨海默症患者中的疗效和安全性研究</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<h3>研究设计</h3>
<p>这项研究是一项随机、双盲、安慰剂对照的临床试验，旨在评估多奈哌齐对轻度至中度阿尔茨海默症患者的疗效和安全性。研究共纳入473名患者，患者被随机分为两组：多奈哌齐组和安慰剂组。多奈哌齐组患者每日服用5-10毫克多奈哌齐，安慰剂组患者则服用相应的安慰剂。治疗期为24周。</p>
<h3>主要评估指标</h3>
<p>主要评估指标包括阿尔茨海默病评估量表-认知部分（ADAS-cog）和临床痴呆评定量表-临床印象变化部分（CDR-SB）。ADAS-cog用于评估患者的认知功能变化，CDR-SB用于评估患者的整体临床变化。次要评估指标包括简易精神状态检查（MMSE）和日常生活活动量表（ADCS-ADL）。</p>
<h3>研究结果</h3>
<p>1. 认知功能的改善</p>
<p>在24周的治疗期结束时，多奈哌齐组患者的ADAS-cog评分显著优于安慰剂组，表明多奈哌齐能够显著改善患者的认知功能。具体而言，多奈哌齐组患者的平均ADAS-cog评分改善了3.15分，而安慰剂组仅改善了0.5分。</p>
<p>2. 临床整体变化</p>
<p>CDR-SB评分显示，多奈哌齐组患者的整体临床状态也显著优于安慰剂组。多奈哌齐组患者的CDR-SB评分平均改善了1.2分，而安慰剂组仅改善了0.3分。</p>
<p>3. 日常生活活动能力</p>
<p>在ADCS-ADL评分方面，多奈哌齐组患者的日常生活活动能力显著提高，表明多奈哌齐不仅改善了认知功能，还提高了患者的生活质量。</p>
<p>4. 安全性和耐受性</p>
<p>多奈哌齐组的不良反应发生率与安慰剂组相似，最常见的不良反应包括恶心、腹泻和失眠。然而，多数不良反应为轻度至中度，未导致治疗中断。</p>
<h3>讨论</h3>
<p>本研究结果表明，多奈哌齐在改善轻度至中度阿尔茨海默症患者的认知功能和整体临床状态方面具有显著疗效，且安全性和耐受性良好。相比于安慰剂，多奈哌齐能够显著延缓认知功能的下降，提高患者的日常生活活动能力。这些发现支持了多奈哌齐作为轻度至中度阿尔茨海默症患者一线治疗药物的应用。</p>
<h3>结论</h3>
<p>多奈哌齐在治疗轻度至中度阿尔茨海默症患者中显示出显著的疗效和良好的安全性。本研究的结果为多奈哌齐的临床应用提供了有力支持，建议在临床实践中推广使用。然而，仍需进行进一步研究以评估其长期疗效和最佳治疗方案。</p>
<h3>参考文献</h3>
<p>1.	Rogers, S. L., Farlow, M. R., Doody, R. S., Mohs, R., & Friedhoff, L. T. (1998). A 24-week, double-blind, placebo-controlled trial of donepezil in patients with Alzheimer's disease. Neurology, 50(1), 136-145.</p>
<p>2.	Burns, A., Rossor, M., Hecker, J., Gauthier, S., Petit, H., Möller, H. J., ... & Rogers, S. L. (1999). The effects of donepezil in Alzheimer's disease–results from a multinational trial. Dementia and Geriatric Cognitive Disorders, 10(3), 237-244.</p>

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
  