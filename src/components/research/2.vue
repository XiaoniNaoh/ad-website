<template>
    <div class="article-container">
      <h1 class="title">ADNI</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<p>阿尔茨海默病神经影像学计划（ADNI）是一个由美国国立卫生研究院（NIH）资助的大型多中心研究项目，旨在通过神经影像学、生物标志物和临床数据的综合分析，促进阿尔茨海默病的早期诊断和监测。ADNI于2004年启动，汇集了多个学术机构、研究中心和制药公司的科学家，目的是识别阿尔茨海默病的早期生物标志物，从而在症状出现前检测到疾病的存在。
</p><p>
ADNI项目收集了大量的纵向数据，包括MRI和PET扫描的神经影像学数据，血液和脑脊液样本中的生物标志物，以及参与者的临床症状和认知功能测试结果。这些数据帮助研究人员发现了多种潜在的生物标志物，提高了检测大脑结构和功能变化的技术精度。
</p><p>
ADNI项目已经取得了许多重要成果，如识别和验证了多种生物标志物，开发了新的神经影像学技术，并建立了一个开放的数据库，供全球研究人员使用。这一数据库促进了数据共享和协作研究，极大地推动了阿尔茨海默病的研究进展。
</p><p>
未来，ADNI将继续扩展和深化研究工作，探索新的生物标志物，跟踪参与者的长期变化，并结合基因组学数据开发个性化的诊断和治疗方案。通过这些努力，ADNI致力于为阿尔茨海默病患者和他们的家属提供更好的诊断工具和治疗方法，最终改善他们的生活质量。
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
  