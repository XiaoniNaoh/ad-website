<template>
    <div class="article-container">
      <h1 class="title">《终结阿尔茨海默病：全球第一套预防与逆转失智的个性化程序》</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <img src="/images/books/图片2.png">
<p>
    《终结阿尔茨海默病：全球第一套预防与逆转失智的个性化程序》由戴尔·E布来得森撰写，提供了一种全新的视角来看待和治疗阿尔茨海默病。布来得森博士通过结合神经科学、中医学和印度医学的智慧，发明了全球首套有效预防与逆转阿尔茨海默病的治疗方案——ReCODE个性化治疗程序。
</p><p>
    书中强调，阿尔茨海默病不仅是由遗传基因引起的，病菌和毒素侵害、营养不良、压力过大、睡眠不足等因素也每天在损害大脑神经。这些因素导致患者脑部功能逐渐衰退，使他们无法与亲人进行情感交流，甚至会出现忧郁、暴躁、丧失基本生活能力等症状。
</p><p>
布来得森博士的ReCODE个性化治疗程序旨在通过多种方式改善大脑健康，从而预防和逆转阿尔茨海默病。书中详细介绍了如何通过调整饮食、改善生活方式、减少压力、增加运动量和优化睡眠等手段，来达到保护和修复大脑神经的目的。布来得森博士还强调了个性化治疗的重要性，因为每个患者的病因和症状都不同，因此需要制定具体的治疗方案。
</p><p>
《终结阿尔茨海默病》不仅提供了科学依据，还给出了具体的操作步骤，使读者能够在日常生活中应用这些方法。书中包含了许多实际案例和成功经验，展示了ReCODE治疗方案的效果和潜力。
</p><p>
这本书对于患者、家属以及医护人员来说，是一本具有重大意义的参考书。它不仅帮助读者了解阿尔茨海默病的多重病因，还提供了切实可行的治疗和预防策略，使人们能够采取主动措施，改善生活质量，延缓甚至逆转阿尔茨海默病的进程。</p>
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
  