<template>
    <div class="article-container">
      <h1 class="title">《糊涂的老人：解读老年性痴呆症》</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <img src="/images/books/图片7.png">
<p>
《糊涂的老人：解读老年性痴呆症》是由张露莹和师建国共同撰写的一本通俗易懂的书籍，旨在帮助读者了解老年痴呆症的基本知识。书中详细介绍了老年痴呆症的常识、病因、症状、诊断、治疗、预防、护理以及其他相关问题，如社会支持和法律问题。
</p><p>
书中详细描述了老年痴呆症的主要症状，从早期的记忆力减退和空间定位困难，到晚期的严重认知障碍、行为异常和情绪问题。通过这些描述，读者可以更好地识别老年痴呆症的不同阶段和症状表现。关于诊断过程，书中介绍了临床评估、神经心理学测试和影像学检查等方法。此外，还讨论了如何与其他类似疾病进行鉴别诊断，如抑郁症、正常老化和其他类型的痴呆症。
</p><p>
在治疗方面，书中探讨了目前的治疗方法，包括药物治疗、非药物治疗和综合护理方案。作者还提供了一些预防措施，如健康饮食、规律运动、社交活动和认知训练等，以帮助降低老年痴呆症的风险。书中为照护者提供了实用的护理建议，包括如何应对患者的日常生活需求、情绪管理和行为问题。作者还强调了照护者自身的心理健康，提供了一些自我照护的方法。
</p><p>
此外，书中还探讨了老年痴呆症患者的社会支持问题，如何利用社区资源和社会服务来帮助患者及其家庭。书中也涉及了一些法律问题，如监护权、财务管理和患者权益保护等。
</p><p>
《糊涂的老人：解读老年性痴呆症》通过全面而深入的介绍，帮助读者了解老年痴呆症的各个方面，是患者家属、护理人员以及对老年痴呆症感兴趣的读者的宝贵参考资料。这本书不仅帮助读者了解老年痴呆症的科学知识，还提供了实际的建议和支持，使他们能够更好地应对这一疾病带来的挑战。</p>
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
  