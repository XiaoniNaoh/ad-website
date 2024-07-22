<template>
    <div class="article-container">
      <h1 class="title">阿杜那单抗在阿尔茨海默病中的临床试验</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<h3>研究背景</h3>
<p>阿杜那单抗（Aducanumab）是一种靶向β-淀粉样蛋白的单克隆抗体，设计用于减少阿尔茨海默病患者大脑中的淀粉样斑块，可能延缓疾病进展。本文详细介绍了阿杜那单抗在阿尔茨海默病患者中的一项关键临床试验。</p>
<img src="/images/实验3.png">
<p>这项试验旨在评估阿杜那单抗对早期阿尔茨海默病患者的疗效和安全性。</p>
<h3>研究方法</h3>
<p>这是一项多中心、随机、双盲、安慰剂对照的3期临床试验。研究共纳入了1650名早期阿尔茨海默病患者，随机分为两组，分别接受阿杜那单抗和安慰剂的治疗。治疗持续18个月，阿杜那单抗的剂量为每月一次静脉注射，剂量范围从1毫克/千克到10毫克/千克不等。</p>
<h3>评估指标</h3>
<p>主要评估指标包括：</p>
<p>•	临床痴呆评定量表盒子评分-记忆和认知部分（CDR-SB）：用于评估认知和功能的综合变化。</p>
<p>•	阿尔茨海默病评估量表-认知部分（ADAS-Cog13）：用于评估认知功能的变化。</p>
<p>次要评估指标包括：</p>
<p>•	简易精神状态检查（MMSE）：评估认知状态。</p>
<p>•	日常生活活动量表（ADL）：评估患者的日常生活能力。</p>
<p>•	β-淀粉样蛋白水平：通过脑脊液和正电子发射断层扫描（PET）成像测定。</p>
<h3>研究结果</h3>
<p>试验结果显示，在高剂量阿杜那单抗组（10毫克/千克），患者的CDR-SB评分较基线有显著改善，与安慰剂组相比，阿杜那单抗组的认知功能下降减缓了约23%。此外，ADAS-Cog13评分显示阿杜那单抗组的认知功能也有显著改善。</p>
<p>在β-淀粉样蛋白水平的评估中，通过PET成像显示，阿杜那单抗组的淀粉样斑块显著减少，进一步支持了阿杜那单抗对淀粉样蛋白的清除作用。</p>
<p>安全性评估方面，阿杜那单抗总体耐受性良好，但部分患者出现了脑水肿和微出血等不良反应。</p>
<h3>讨论</h3>
<p>这项研究表明，阿杜那单抗在早期阿尔茨海默病患者中具有显著的临床疗效，能够延缓认知功能的下降，并显著减少大脑中的淀粉样斑块。然而，治疗过程中需要密切监测潜在的不良反应，尤其是脑水肿和微出血。</p>
<h3>结论</h3>
<p>阿杜那单抗为阿尔茨海默病的治疗提供了一种新的可能性，通过靶向β-淀粉样蛋白，能够在一定程度上延缓疾病的进展。尽管需要进一步研究以验证其长期疗效和安全性，但这项试验的结果为阿杜那单抗的应用提供了有力支持。</p>
<h3>未来研究方向</h3>
<p>虽然这项试验提供了令人鼓舞的结果，但仍有许多问题需要进一步研究。未来的研究可以考虑：</p>
<p>1.	长期疗效和安全性：需要进行更长时间的随访，以评估阿杜那单抗的长期疗效和安全性。</p>
<p>2.	不同剂量的比较：研究不同剂量对疗效和安全性的影响，找到最佳治疗剂量。</p>
<p>3.	与其他治疗方法的联合使用：探索阿杜那单抗与其他药物或治疗方法联合使用的效果，以期获得更好的治疗结果。</p>
<p>4.	生物标志物的研究：深入研究与阿杜那单抗疗效相关的生物标志物，以优化患者选择和治疗方案。</p>
<h3>部分文字参考</h3>
<p>1.	Biogen. (2020). Aducanumab 3rd Phase Clinical Trial Results.</p>
<p>2.	Sevigny, J., et al. (2016). The antibody aducanumab reduces Aβ plaques in Alzheimer’s disease. Nature, 537(7618), 50-56.</p>
<p>3.	FDA. (2021). Aducanumab approval for the treatment of Alzheimer's Disease.</p>

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
  