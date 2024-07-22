<template>
    <div class="article-container">
      <h1 class="title">细胞凋亡</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <h3>细胞的凋亡</h3>
        <p>每个生物都是由细胞组成的，数以亿计的细胞各司其职，共同组成了一个生命体。就像生物有诞生有死亡，细胞也有产生与凋亡。但是，细胞凋亡不意味着生命的凋谢，细胞凋亡是一种正常的生命现象，经常带来一些正向作用。如果没有细胞凋亡，人类的手指就会连接起来，如同鸭子的蹼；癌症会更加猖狂（细胞不断产生而不死亡，会导致细胞的疯长）等等。</p>
        <h3>在大脑中</h3>
        <p>在我们的大脑里有将近1000亿个的神经元，而每个神经元平均有近一万个链接，这些链接通常被叫做突触。神经元为了接受外界信息进化出了一种称为“受体”的结构，受体通常对固定一种或一类的物质敏感，可以与之结合，指示脑细胞采取相应措施，从而开启一系列的生物化学反应过程。受体就好比一把锁，只会被一种或一类物质打开，而这种物质通常被称为对应的“配体”，是能打开受体的“钥匙”。</p>
        <p>让我们设想一下，在受体与配体结合之前，有没有可能受体这把“锁”上插上了一把“假钥匙”，这把“假钥匙”会与受体结合，堵住“锁孔”，但无法开启生物化学反应过程，同时，因为“假钥匙”占据了“锁孔”，真正的“钥匙”——配体也无法与“锁”——受体结合。实际上这种情况是会发生的，而这会阻碍配体与受体的结合，影响一些生物过程。</p>

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
  