<template>
    <div class="article-container">
      <h1 class="title">盐酸多奈哌齐联合孙氏经颅重复针刺法治疗阿尔茨海默病的效果</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<h3>研究背景</h3>
<p>阿尔茨海默病（Alzheimer's disease, AD）是一种进行性神经退行性疾病，主要表现为认知障碍、精神行为改变和生活能力丧失。多奈哌齐是一种乙酰胆碱酯酶抑制剂，广泛用于AD的治疗，但不能逆转认知缺损或阻止病理进程。针灸作为中医非药物疗法，具有较高的临床应用价值。孙氏经颅重复针刺法结合传统头针理论和现代大脑皮质功能定位，是一种行之有效的针刺疗法。</p>
<h3>研究目的</h3>
<p>本研究旨在观察盐酸多奈哌齐联合孙氏经颅重复针刺法治疗阿尔茨海默病的临床效果。</p>
<h3>研究方法</h3>
<p>本研究纳入了2022年9月至2023年9月在黑龙江中医药大学附属第二医院哈南分院针灸门诊收治的90例AD患者。根据随机数字表法将患者分为三组，每组30例：对照A组给予口服盐酸多奈哌齐治疗，对照B组采用孙氏经颅重复针刺法治疗，观察组则结合了盐酸多奈哌齐和孙氏经颅重复针刺法的治疗方法，均治疗8周。</p>
<h3>评估指标</h3>
<p>主要评估指标包括简易智力状态检查量表（MMSE）、阿尔茨海默病认知评估量表（ADAS-cog）、日常生活活动能力量表（ADL）评分和血清同型半胱氨酸（Hcy）水平。评估了治疗前及治疗后4周和8周的变化。</p>
<h3>研究结果</h3>
<p>结果显示，观察组的临床疗效显著优于对照A组和对照B组，差异具有统计学意义（P＜0.05）。治疗后4周和8周，三组的MMSE评分均显著高于治疗前，而ADAS-cog和ADL评分及血清Hcy水平显著降低（P＜0.05）。观察组在第8周的MMSE评分显著高于对照A组和对照B组，而ADAS-cog和ADL评分及血清Hcy水平显著低于对照A组和对照B组（P＜0.05）。</p>
<h3>讨论</h3>
<p>该研究结果表明，盐酸多奈哌齐联合孙氏经颅重复针刺法能够显著改善AD患者的认知功能和行为能力，降低血清Hcy水平，其效果优于单纯使用多奈哌齐或孙氏经颅重复针刺法。孙氏经颅重复针刺法通过刺激大脑特定区域，调节神经系统功能，结合多奈哌齐的药理作用，提供了一种综合治疗AD的新方法。</p>
<h3>结论</h3>
<p>盐酸多奈哌齐联合孙氏经颅重复针刺法可有效改善轻中度阿尔茨海默病患者的认知功能及日常生活能力，降低血清同型半胱氨酸水平，且效果优于单纯口服多奈哌齐和孙氏经颅重复针刺法，值得临床推广应用。</p>
<h3>部分内容摘自</h3>
<p>刘佳,曹阳,刘金盛,王玉琳,张淼.盐酸多奈哌齐联合孙氏经颅重复针刺法治疗阿尔茨海默病的效果[J].中国医药导报,2024,21(6):132-137</p>

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
  