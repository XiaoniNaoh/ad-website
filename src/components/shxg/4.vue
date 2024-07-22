<template>
    <div class="article-container">
      <h1 class="title">优化睡眠</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<h3>优化睡眠的方法</h3>
<p>·掌握好最适合自己的作息节律</p>
<p>·制定日常作息计划表</p>
<p>·树立一个睡眠目标</p>
<p>·控制咖啡因的摄入量</p>
<p>·睡前三小时不进食，不进行体育运动</p>
<p>·临睡前不宜饮酒</p>
<p>·减少起夜如厕次数</p>
<p>·阻挡蓝光照射，不在卧室中放电视机等设备，尽量减少卧室内部辐射水平</p>
<p>·保证全屋黑暗</p>
<p>·减少噪声</p>
<h3>安眠药的使用</h3>
<p>安眠药看似短期内能很好地解决睡眠问题，但长期使用会增加患认知障碍的风险。好在世界上还存在一些有效的补充剂和药品，既可以保护神经组织，又可以自然地改善睡眠质量，且大都没有副作用。如：</p>
<p>·褪黑素</p>
<p>·色氨酸</p>
<p>·γ-氨基丁酸（GABA）</p>
<p>·镁（苏糖酸镁是一种生物利用率较高的镁元素补充剂）</p>
<p>·印度人参（南非醉茄）</p>
<p>·假马齿苋</p>
<p>·激素替代疗法</p>
<p>除此之外，有效的助眠疗法还有很多，包括茶氨酸、洋甘菊、柠檬香蜂草提取物与中医药疗法等等。</p>

        
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
  