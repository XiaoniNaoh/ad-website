<template>
    <div class="article-container">
      <h1 class="title">进一步刺激大脑的方法</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<h3>神经可塑性与大脑变化</h3>
<p>人们的大脑终其一生都发生着变化，哪怕到了老年，它也持续变化着。神经可塑性指的就是人们大脑的生长、再生与适应能力。众所周知，人们的肌肉组织经过体育锻炼后会变得更加强壮;但如果停止了运动，肌肉就会出现一定程度的萎缩。虽然，人们的大脑不是由肌肉组成的，但原理是一样的，正所谓“用进废退”。积极用脑，就是在给大脑提供再生长的机会。</p>
<p>在日常思考、应对行为与行动中，不管你有没有意识到，这些小细节无时无刻不在重塑着人们的大脑。这种重塑过程既可以是主动的，也可以是被动的;既可能是良性的，也可能是恶性的。有证据表明:在疾病或外伤引起的神经退行性病变发生后，有意识地进行认知训练，是能够治愈并且强化人们的大脑功能的。每个人都是自己命运的主宰者;每个人都是自己大脑的主人!</p>
<h3>建立自己的“社交部落”</h3>
<p>社交活动的频度与广度，极大影响了生命的质量，甚至能够影响你的寿命。有研究表明，具有强大社交联系者，比起社交网络薄弱者，能减少50%的意外死亡概率。有圆满婚姻，能与家庭成员不断相互扶持，并积极交友，参与各种社会活动者，患上阿尔兹海默病的概率能减少46%以上。</p>
<p>·与身边的人建立起关联性</p>
<p>·线下聚会比社交媒体更重要</p>
<p>·聚会活动要有健康</p>
<p>·考虑与志同道合者同居</p>
<h3>明确奋斗目标</h3>
<p>研究发现，拥有明确奋斗目标的人往往心身健康状况更好。能令自己感到振奋的活动是可以起到保护认知能力的，不管是从事社会公益活动，还是书写咏颂诗歌，或是为他人排忧解难都可以重新唤回积极的人生观和价值观。</p>
<h3>保持学习</h3>
<p>教育是认知障碍的风险因素之一，受教育水平更高的人患阿尔兹海默病的风险会低一些。受教育年限更长的人对衰老引起的认知退变具有更强的弹性。这个现象可能和认知储备概念有关。</p>
<p>补充认知储备的方式有许多，接受社区的再教育课程、学习外语或乐器、挑战益智游戏都是很好的方法。</p>
<h3>聆听音乐</h3>
<p>即便你没有学习乐器的打算，简单地聆听音乐也能提供认知能力方面的益处。最近一项通过脑功能成像(fMRI)的研究，发现在聆听音乐的情况下，阿尔兹海默病患者大脑的几个区域内都表现出了更高水平的功能性连接。</p>
<p>因此，建议你关掉电视机，用音乐来取代它。音乐能增强运动能力、家务技能，甚至是工作效率等。你可以经常戴着耳机，既不会吵到别人，又可以增加音乐收听的体验。音乐的选择取决于你此时的心境与正在从事的活动，例如摇滚乐和振奋的古典乐等很适合锻炼时。</p>

        
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
  