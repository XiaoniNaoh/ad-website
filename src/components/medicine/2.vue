<template>
    <div class="article-container">
      <h1 class="title">多奈哌齐</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<p>多奈哌齐（Donepezil）商品名为安理申，属于胆碱酯酶抑制剂类，通过增加脑内乙酰胆碱的水平来改善记忆和认知功能。多奈哌齐自1996年获得FDA批准用于治疗轻度至中度阿尔茨海默症以来，一直是治疗AD的标准药物之一。</p>
<h3>多奈哌齐的作用机制</h3>
<p>目前认为阿尔茨海默病痴呆症状的发病机制部分与胆碱能神经传递功能的低下有关。盐酸多奈哌齐可能通过增强胆碱能神经的功能发挥治疗作用。它可逆性地抑制乙酰胆碱酯酶对乙酰胆碱的水解，从而提高乙酰胆碱的浓度。若按上述作用机制推测，随着病程的进展，功能完整的胆碱能神经元渐趋减少，多奈哌齐的作用可能会减弱，目前尚无证据表明多奈哌齐可以改变痴呆的基础病程。</p>
<p>多奈哌齐在多项临床研究中显示出显著的疗效，在轻度至中度阿尔茨海默症患者中表现尤为突出。</p>
<p>1.	认知功能改善：多奈哌齐能够显著改善阿尔茨海默症患者的认知功能，包括记忆、注意力、语言能力和定向力等。临床试验显示，服用多奈哌齐的患者在阿尔茨海默病评定量表（ADAS-cog）评分上有显著改善。一项为期24周的随机双盲研究表明，多奈哌齐治疗组的ADAS-cog评分显著优于安慰剂组。</p>
<p>2.	日常功能提升：多奈哌齐还可以帮助患者在日常生活活动中保持较高的独立性，减轻家属和护理人员的负担。例如，患者在使用多奈哌齐后，能够更好地完成日常生活中的基本活动，如穿衣、洗漱和进食等。一项涉及2000多名患者的研究显示，多奈哌齐显著改善了患者的日常生活活动评分（ADL）。</p>
 <p>3.	行为症状缓解：阿尔茨海默症常伴有一些行为和心理症状，如抑郁、焦虑、幻觉和激越。多奈哌齐在某些研究中也显示出对这些症状的缓解作用，改善患者的总体状况。比如，一项研究发现，服用多奈哌齐的患者在神经精神问卷（NPI）评分上有明显改善。</p>
<h3>负面作用</h3>
<p>尽管多奈哌齐在治疗阿尔茨海默症方面效果显著，但它也存在一些副作用。</p>
<p>1.	胃肠道反应：多奈哌齐最常见的副作用包括恶心、呕吐、腹泻和食欲下降。这些症状通常在用药初期较为明显，随着治疗的进行可能会减轻。为了减轻这些不适，建议患者在晚上或饭后服药。</p>
<p>2.	心血管系统：多奈哌齐可能引起心动过缓（心跳过慢）和血压下降，尤其是对已有心血管疾病的患者，需要在医生指导下使用。一些患者可能会感到头晕、疲劳，需要注意避免跌倒。</p>
<p>3.	其他：部分患者可能出现头痛、失眠、肌肉痉挛和尿失禁等症状。少数情况下，可能出现严重的皮疹和过敏反应，需要及时停药并就医。</p>
<h3>使用注意事项</h3>
<p>在使用多奈哌齐治疗阿尔茨海默症时，需注意以下事项：</p>
<p>1.	遵医嘱使用：应在医生指导下使用多奈哌齐，按照规定的剂量和时间服用，避免自行调整剂量。通常起始剂量为5毫克，每日一次，视患者耐受情况和疗效可增加至10毫克。</p>
<p>2.	监测副作用：在治疗过程中，需密切观察患者的反应，特别是老年患者和有心血管疾病史的患者。如出现严重不良反应，应及时就医。</p>
<p>3.	综合治疗：多奈哌齐治疗阿尔茨海默症应结合其他非药物治疗方法，如认知训练、心理支持和日常护理，以达到最佳治疗效果。家庭成员和护理人员的支持在治疗过程中也非常重要。</p>
<h3>多奈哌齐的其他潜在用途</h3>
<p>除了用于治疗阿尔茨海默症，多奈哌齐在其他一些神经系统疾病中也显示出潜在的应用前景。例如，在帕金森病痴呆、路易体痴呆和血管性痴呆等疾病中，多奈哌齐也有一定的疗效。此外，一些研究还在探索多奈哌齐在创伤性脑损伤和轻度认知障碍（MCI）中的应用。</p>

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
  