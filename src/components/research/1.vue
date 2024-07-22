<template>
    <div class="article-container">
      <h1 class="title">AMP-AD</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<p>
        AMP-AD项目（Accelerating Medicines Partnership - Alzheimer's Disease）是一个由美国国家卫生研究院（NIH）、制药公司、非营利组织和学术机构联合发起的合作项目，旨在加速阿尔茨海默病药物的研发。项目通过共享数据、资源和技术，推进阿尔茨海默病研究，以更快地发现有效的治疗方法。
    </p><p>
该项目的主要目标是发现和验证新的生物标志物，识别与阿尔茨海默病相关的分子特征，从而早期诊断和监测疾病进展。通过高通量筛选和生物信息学工具，项目希望加速新药物靶点的发现，并验证其有效性。项目强调开放科学，所有参与者共享研究数据和资源，促进跨学科和跨机构的合作。
</p><p>
AMP-AD项目利用多组学数据整合和系统生物学方法，全面解析阿尔茨海默病的分子机制。通过分析基因组、转录组、蛋白质组和代谢组的数据，研究人员构建了阿尔茨海默病的分子网络模型，识别出关键的调控节点和途径。此外，项目还分析了来自不同人群的大规模队列数据，以找出疾病的风险因素和保护因素。
</p><p>
自项目启动以来，AMP-AD项目取得了许多重要成果。研究人员识别出多个与阿尔茨海默病相关的生物标志物，并发现了新的潜在药物靶点。部分生物标志物和药物靶点已经进入临床验证和开发阶段。项目还建立了开放的数据库和生物信息学工具，供全球研究者使用，促进数据的共享和利用。
</p><p>
未来，AMP-AD项目将继续推进阿尔茨海默病的研究和药物开发。通过加强国际合作，扩大数据共享范围，项目希望推进更多新药物的研发和临床试验，最终找到有效的治疗方法，改善阿尔茨海默病患者的生活质量。AMP-AD项目为阿尔茨海默病研究带来了新的希望，也为其他复杂疾病的研究提供了宝贵的经验和模式。
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
  