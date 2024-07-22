<template>
    <div class="article-container">
      <h1 class="title">改善饮食</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<h3>1.请对这些说“不”</h3>
<p>·少吃糖和单一碳水化合物，如：糖果、饼干、蛋糕等加工食品。</p>
<p>·不要过量食用含麸质食品</p>
<p>·避免过量食用传统乳制品</p>
<h3>2.构建补脑膳食金字塔</h3>
<h3>（1）第一层：禁食规则</h3>
<p>①睡前至少禁食3小时，总共禁食12小时</p>
<p>②ApoE4携带者可尝试将禁食时间延长至16小时以上</p>
<p>③最好用排毒饮料结束禁食</p>
<p>排毒饮料：温白开水加鲜榨柠檬汁或生姜片、奶蓟草、香茅，或蒲公英茶等。</p>
<h3>（2）第二层：尽情享用</h3>
<p>①蔬菜</p>
<p>·摄入彩色蔬菜，如：胡萝卜、茄子、番茄等</p>
<p>·摄入绿叶蔬菜和深色叶菜，如：香菜、甜菜、菠菜、甘蓝等</p>
<p>·摄入十字花科蔬菜，如：西蓝花、卷心菜、青菜、洋葱、小葱、韭菜等</p>
<p>·每次购买蔬菜时，挑战自己，尝试不同的蔬菜以丰富你的菜谱。</p>
<p>·摄入新鲜的草药、香料和茶。</p>
<p>②健康脂肪</p>
<p>·优先选用高多酚的特级初榨橄榄油、牛油果、坚果与种子类食物</p>
<p>·烹饪用油尽量使用烟点高的油，如：牛油果油、酥油、芝麻油、黄油</p>
<p>·坚果和种子是营养的宝库，适量食用核桃、夏威夷果、开心果等坚果</p>
<h3>（3）第三层：升级你的肠胃</h3>
<p>·注意肠道健康，必要时向医生寻求帮助</p>
<p>·可适量食用有助于消化的蘑菇与葱蒜类蔬菜</p>
<p>·适量补充含抗性淀粉的豆类植物与块茎植物</p>
<p>·尝试在饮食中添加多种益生菌类食品，如：酸菜、酪乳等</p>
<h3>（4）第四层：明智选择</h3>
<p>①动物性蛋白</p>
<p>·适量摄入洁净无污染的动物性蛋白</p>
<p>·减少红肉的摄入量，适量增加白肉摄入</p>
<p>·优先考虑野生海鲜和散养草鸡蛋。</p>
<p>②水果与甜菜</p>
<p>·按照所处的季节，适量食用时令水果</p>
<p>·全年均可适量食用野生浆果，如：蓝莓、草莓、覆盆子等</p>
<p>·尽量使用未完全成熟的热带水果，如绿芭蕉、车前草、芒果、番木瓜和猕猴桃等</p>
<p>·柠檬和酸橙是维生素C的重要来源，无需当季食用</p>
<p>·甜菜可改善心脏和大脑的健康状况，但也不可多食</p>
<h3>（5）第五层：把握风险</h3>
<p>①甜味剂</p>
<p>·如有必要，仅适量使用天然甜味剂，如：蜂蜜</p>
<p>②可可黄烷醇</p>
<p>·适量食用生可可含量高，含糖量较低，镉、铅含量越低越好的巧克力</p>
<p>·可微量食用生可可豆碎粒，禁食生可可豆粉和加工可可冲饮粉</p>
<p>·考虑可食用黄烷醇补充剂</p>
<p>③乳制品</p>
<p>·可以适量摄入一些A2乳制品，如：山羊奶、水牛奶、牦牛奶等</p>
<p>④酒精</p>
<p>·酒精是一种神经毒素，认知能力衰退者最好滴酒不沾。</p>
<p>·可适量饮用完全由有机原料酿造、无糖、低酒精度数的干红葡萄酒。</p>


        
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
  