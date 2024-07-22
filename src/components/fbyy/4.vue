<template>
    <div class="article-container">
      <h1 class="title">ApoE基因的影响</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <p>在遗传方面最为人所知的是APOE基因，该基因有多个变体，其中APOE ε4变体与阿尔茨海默病风险的显著增加密切相关。拥有一个APOE ε4等位基因的人患阿尔茨海默病的风险约为普通人的三倍，而携带两个APOE ε4等位基因的人风险更高，约为普通人的八至十二倍。APOE ε4变体影响了大脑中淀粉样斑块的积累，这些斑块被认为是阿尔茨海默病的标志之一。</p>
        <p>阿尔茨海默病的遗传通常与载脂蛋白E（ApoE）有关。</p>
        <p>ApoE一共有三种等位基因突变体：ApoE4、ApoE3和ApoE2。</p>
        <p>ApoE4是阿尔兹海默病（AD）的主要遗传基因风险因子，会增强阿尔茨海默病发病风险。这是因为，ApoE2和ApoE3对β-淀粉样蛋白的清除有利，而ApoE4会减少β-淀粉样蛋白的清除，加剧β-淀粉样蛋白的沉积。</p>
        <p>其中携带两个ApoE4等位基因的人会发现：他们家族具有阿尔茨海默病的家族史，而他们有高达50%以上的概率会患阿尔茨海默病，相关症状通常在40~50岁出现。</p>
        <p>其中携带一个ApoE4等位基因的人会发现：他们家族具有阿尔茨海默病的家族史，而他们有高达30%的概率会患阿尔茨海默病，相关症状通常在50岁末或60多岁出现。</p>
        <p>其中携带两个ApoE3等位基因的人会发现：他们家族没有阿尔茨海默病的家族史，而他们有大概9%的概率会患阿尔茨海默病，相关症状通常在60~70岁出现。</p>

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
  