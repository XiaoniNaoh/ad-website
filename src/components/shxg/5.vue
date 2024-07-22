<template>
    <div class="article-container">
      <h1 class="title">压力管理</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<h2>压力管理</h2>
<p>作为最早一批研究精神压力与健康之间关系的专家，汉斯·塞利教授曾指出，压力会加速我们的衰老。人生就像一艘帆船，生活的重压就像海风既带着帆船前进，也打磨出了沧桑。因此，学会预防与管理压力，就好比是“修补船帆”，既能缓解肉体衰老，也能预防或逆转认知障碍。尽管我们的终极目标是帮助你获得合理疏解外界压力的能力，但从短期来看，压力其实也是一种积极的反馈，可保护我们免受外部环境带来的突发性伤害。另外，反复的轻度压力具有一定的镇静作用，例如，在运动或禁食时就会产生。这种现象叫作兴奋效应。然而，慢性的、无法疏解的，或是严重的压力却会增加认知障碍的风险。理解了这种两面性，有助于我们正确地应对日常生活中所遇到的压力。</p>
<h3>正念</h3>
<p>这是一种简单易行的情绪训练方法，有助于人们“活在当下”。当将意念集中在当下时，自我意识也就会逐步融人周边的世界，于是，人们只是单纯地以一种非评价的态度及超然的姿态存在着，无意之中便消解了对未来的焦虑感。</p>
<p>这里推荐一种正念呼吸锻炼法，能够帮助快速疏解当下压力。深呼吸能够刺激迷走神经，帮助诱导激活身体的自然放松反应，即松弛效应。这种锻炼法能够将意识充分集中在当下，并且最终调控你的呼吸。该法任何时候都可以练习，是一类非常有效的舒缓压力的技巧。</p>
<img src="/images/正念.jpg"/>
<h3>正念呼吸锻炼法</h3>
<p>（1）保持坐姿笔直，将注意力全数集中在呼吸上</p>
<p>（2）持续呼气，并在心中默默数数，数到“4”时，将气全部呼出。</p>
<p>（3）持续吸气，并在心中默默数数，数到“4”时，停止吸气。</p>
<p>（4）重复以上呼吸，并循环数分钟。</p>
<h3>>冥想</h3>
<p>冥想是将思想和意念集中于一组特定的语音或思维对象上的操作，旨在清净心灵，将意识引导至一种平静且超然的境界。冥想虽然起源于南亚的宗教习俗，修习方式带有一些宗教色彩，但经现代科学研究论证，它对于健康确有许多益处，包括降低血压、增进睡眠、减少疼痛感、疏解压力与焦虑，以及减少抑郁症状等。</p>
<p>冥想有很多不同的修习种类可供选择。有些主要运用正念技巧；而另外一些——例如超觉冥想（TM），则主要依靠其他技巧。以下是身体扫描冥想的具体方法：</p>
<p>（1）找一个不会被打扰的安静角落。</p>
<p>（2）选择一个舒适的地方坐下，保持姿势端正而放松。</p>
<p>（3）首先专注于呼吸，让自己集中注意力。</p>
<p>（4）当你的思绪飘忽不定时，轻轻地重新集中注意力在呼吸上，不要评判自己。</p>
<p>（5）全身心地投入到任何感受、想法或身体感觉中，看着它们流逝而不被卷入。</p>
<h3>祷告</h3>
<p>几乎所有的灵性修炼中都会有祷告的内容。经科学研究证明，祷告确能减轻压力。有些研究甚至还发现，事前祈祷，能为最终的结果带来正面的影响，但这方面的机制仍然未知。因此，若祷告能为内心带来舒适与平静，那么可用祷告来完全代替冥想训练，或是两者结合，进行双修。</p>
<h3>气功与太极</h3>
<p>气功与太极，虽是两种不同形式的修炼手段，但其精神内核是一致的，都是由古代的中国人发明，用于协调自身能量的冥思性运动。气功的历史更久远些。中国人认为，“气”是构成与维持人体生命活动的精微物质，气功则是运“气”的一种锻炼方式。气功和太极都运用了许多缓慢的冥思性动作，也有站姿或坐姿等的冥想，并且都结合了传统中医学理论中对于呼吸、情志和身体的调节法则及方法等。</p>
<h3>可以减少压力的生活小窍门</h3>
<p>·劳逸结合，务必给自己以自我放松的时间</p>
<p>·不要超量工作</p>
<p>·制订事件清单</p>
<p>·拔下网线</p>
<p>·做事不要三心二意</p>
<p>·保持锻炼</p>
<p>·保持充足的睡眠</p>
<p>·面对压力及时求助</p>
        
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
  