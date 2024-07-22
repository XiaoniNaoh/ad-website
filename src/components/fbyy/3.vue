<template>
    <div class="article-container">
      <h1 class="title">阿尔茨海默病病人的大脑发生了什么</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <p>在Aβ淀粉样蛋白假说中，是这样解释的：有一种称为“β-淀粉样蛋白”的分子，它会与神经元上的多个受体结合，但是不开启生物化学反应过程，是一种“假钥匙”。由于大量“假钥匙”在大脑中堆积，“依赖受体”无法与神经营养因子配体结合，“暴怒”的“依赖受体”诱导细胞不断凋亡，导致大量突触丢失，最终杀死了神经元。突触与记忆一般紧密相连，而突触的大量丢失也导致记忆的大量丢失。</p>
        <p>在大脑的“减缩原则”下，会优先保留生存所必需的功能记忆，比如如何呼吸的记忆，如何说话的记忆等，或者更加珍惜、经常使用的记忆，比如一些工作常使用的技能，很久之前的重要记忆等，而舍去新形成的记忆，比如昨天吃了什么东西的记忆等。这也可以解释为什么阿尔茨海默病病人会记不清前一秒发生了什么，却对几年前甚至数十年前的事件记忆犹新。而如果阿尔茨海默病病人甚至开始逐渐舍弃一些重要记忆时，也表明病症正在变得更加严重。</p>
        <p>那么，我们将有一个疑惑，这造成一切的“罪魁祸首”——大量β-淀粉样蛋白（大量“假钥匙”）到底是如何产生的呢？</p>
        <p>实际上，β-淀粉样蛋白是从淀粉样前体蛋白（amyloid precursor protein , APP）来的，APP本身就是一种“依赖受体”，如果与一个称为“神经营养因子-1（netrin-1）”结合，那么一种神奇的专用来切割蛋白的“剪刀”会在APP上一个“切点”上进行切割，生成抗老年痴呆的sAPPα和CTFα，它们可以呵护神经突触的健康，保护神经元，防范细胞凋亡。</p>
        <p>相反，如果APP被β-淀粉样蛋白纠缠住了，那么“剪刀”会换一种切割方式，在APP上的3个“切点”上进行切割，生成sAPPβ、Jcasp、C31以及β-淀粉样蛋白（Aβ）。我们将发现，就像滚雪球一样，β-淀粉样蛋白与APP结合，又产生了β-淀粉样蛋白。鸡生蛋，蛋又生鸡，β-淀粉样蛋白越来越多，可是，最初的“祸害”——第一个β-淀粉样蛋白是哪来的呢？还记得我们提过的吗？APP是一种“依赖受体”，只要没有与神经营养因子-1结合，那么它就会“狂暴”地产生那3种物质及β-淀粉样蛋白。而随着β-淀粉样蛋白越来越多，“战局”便逐渐向糟糕的那一面倾向，我们的“朋友”——抗老年痴呆的sAPPα和CTFα越来越少，而“敌人”——β-淀粉样蛋白越来越多。</p>
        <p>当然，影响APP的分割的因素不仅仅是神经营养因子-1和β-淀粉样蛋白，还有许多其他因素，如雌激素、睾酮、甲状腺激素、胰岛素、炎症因子、核因子κB（NF-κB）、沉默信息调节因子1（sirtuinl，SirT1，又别称“长寿因子”）、维生素D等等，甚至与我们的睡眠状况和压力也有关。这么多因素都影响着阿尔茨海默病的发生，也难怪我们无法很难通过单纯的药物来治疗阿尔茨海默病。</p>
        <p>而在Tau蛋白异常磷酸化假说中，是这样解释的：我们发现，在阿尔茨海默病病人的病理中会出现神经原纤维缠结（neurofibrillary tangles，NFT）。而当我们说起这个现象时，就不得不提及Tau蛋白了。</p>
        <p>什么是Tau蛋白呢？Tau蛋白是一种微管相关蛋白，它会与微管蛋白结合，从而形成微管，维持细胞骨架的稳定，有利于“货物”通过微管常规运输，对神经元健康与功能至关重要。</p>
        <p>然而，如果Tau蛋白异常过度磷酸化，就好比建筑木房子时，发现木板上全都涂满了胶水。涂满胶水的木板会相互粘连，还会黏住没有涂上胶水的正常木板，木板们全都粘连在一起，此时我们就会叹气：“房子造不了了。”</p>
        <p>而当Tau蛋白过度磷酸化时，我们可以把它看成涂上了“胶水”的Tau蛋白，这些Tau蛋白不仅仅会彼此粘连，还会粘连那些正常的没有过度磷酸化的Tau蛋白，而更疯狂的是，这些“粘性十足”的Tau蛋白还会试图“夺走”那些本来与微管蛋白结合得好好的Tau蛋白。</p>
        <p>因此，它们的规模越来越多，易聚集为成对的螺旋纤丝。而螺旋纤丝又互相缠绕，不仅会产生神经毒素，给神经元狠狠灌下一剂毒药，而且会形成庞大的胞内神经原纤维缠结 (NFT)，就好比打结的毛线缠成了一个混乱的毛球。事到如此，我们就不得不发现，微管像被打上了“拆”后的房子一样，已经被破坏得惨不忍睹了。没有了微管，“货物”无处运输，经过一系列的过程，神经元也不得不宣告“破产”，即细胞凋亡。</p>
        <p>神经元的凋亡基本宣告着脑中记忆将不断死亡，不过就像我们前文所言，在大脑的“减缩原则”下，会优先保留生存所必需的功能记忆，或者更加珍惜、经常使用的记忆，而舍去新形成的记忆。这也可以解释为什么阿尔茨海默病病人会无法进行新的记忆，却依旧保留老记忆。而如果阿尔茨海默病病人甚至开始逐渐舍弃一些重要记忆时，也表明病症正在变得更加严重。</p>
        <p>除了以上提及的两个假设，这里还有很多其他假说，如胆碱能假说、神经炎症反应假说、谷氨酸系统异常兴奋假说、线粒体功能紊乱假说等等，但此处就不进行一一介绍了。</p>

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
  