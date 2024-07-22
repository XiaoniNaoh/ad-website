<template>
    <div class="article-container">
      <h1 class="title">KetoFLEX12/3干预法</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <p>研究表明，这些治疗AD的药物只能暂时缓解症状，长期来看，却会加速认知衰退。表面上，症状是得到了缓解，但之后很快就会退回到原来衰竭老化的路上。唯有在药物与生活方式两方面双管齐下，找到问题的根本所在，疗效才会是明显而持久的。在生活方式方面，我们可以参考戴尔·E布来德森在《终结阿尔兹海默病》中提到的KetoFLEX12/3干预法。</p>
        <p>KetoFLEX12/3的三要素是饮食、禁食和体育锻炼。它既能恢复新陈代谢，还能给你的大脑带来干净的可持续燃料。三方面同时实施，能产生协同作用，提高治疗效果。另外，你不需要太多禁食碳水化合物，也不需要长时间禁食，更不需要过度运动就能产生酮体。三者结合就能带来健康，避开现代社会泛滥的慢性病，如痴呆、代谢异常和高血压。</p>
        <p>KetoFLEX12/3重点关注的是导致认知衰退的机制。包括:</p>
        <p>·激发关键的胰岛素敏感性</p>
        <p>·减少炎症</p>
        <p>·解决神经元营养缺失和线粒体缺乏等问题</p>
        <p>·增加血液循环和稳定血压·提供突触支持所需的原材料</p>
        <p>·改善与认知衰退相关的营养不足·加速细胞自噬和淀粉样蛋白的清除.加快解毒</p>
        <p>·改善认知衰退相关的肌肉萎缩和骨质流失</p>

        
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
  