<template>
    <div class="article-container">
      <h1 class="title">影像学检查</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <p>
        影像学检查是诊断阿尔茨海默病的重要工具之一。患者可以进行头颅磁共振成像（MRI）检查，通过这一检查可以发现大脑半球的萎缩，特别是在海马结构和后扣带回的区域。海马是与记忆功能密切相关的脑区，而后扣带回在认知和情绪处理方面起重要作用，这些区域的萎缩是阿尔茨海默病的典型特征。
    </p><p>
此外，脑电图（EEG）也是一种有助于诊断阿尔茨海默病的工具。脑电图检测会显示患者大脑的电活动模式，阿尔茨海默病患者通常表现为弥漫性的慢波活动。这种慢波活动反映了大脑功能的整体减退，是阿尔茨海默病的一种特异性表现。
</p><p>
通过结合MRI和EEG的结果，医生可以更明确地诊断阿尔茨海默病。这些影像学检查不仅可以帮助确认诊断，还可以在病程进展中监测大脑结构和功能的变化，从而为制定个性化的治疗和护理计划提供重要依据。
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
  