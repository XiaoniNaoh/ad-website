<template>
    <div class="article-container">
      <h1 class="title">美金刚</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<h3>美金刚的作用机制</h3>
<p>美金刚为一种非竞争性N-甲基-D-天冬氨酸(N-methyl-D-aspartic acid，NMD)受体拮抗剂，该药物口服吸收好且效果迅速可有效促进患者记忆力及执行力的恢复，但单纯使用该药物对于患者的精神行为症状效果有限。通过选择性拮抗脑内NMDA受体，美金刚能发挥强大的谷氨酸兴奋性病理毒性阻断作用，从而有效防止病理状态下谷氨酸水平升高导致的神经元功能障碍。</p>
<p>在AD患者脑内，突触间隙谷氨酸水平升高，导致钙离子通过NMDA受体持续内流，影响记忆生成并引起脑细胞凋亡。美金刚通过非竞争性阻滞作用，阻断钙离子内流，恢复信噪比，重建长时程增强（LTP），从而有效改善患者的认知功能，并防止钙超载引起的脑细胞凋亡。β- 淀粉样蛋白（Aβ）脑内沉积是 AD 发病的中心环节，减少 Aβ沉积或清除已形成的淀粉样蛋白斑块可以预防和治疗 AD。研究证实，美金刚能够使 Aβ水平下降，消除 Aβ引起的 LTP 改变。早期应用美金刚可预防谷氨酸信号传导系统的不可逆损害。</p>
<h3>美金刚的临床疗效</h3>
<p>美金刚在多项大型多中心、随机、对照、双盲Ⅲ期临床研究中展现了显著的疗效。研究结果显示，与安慰剂相比，美金刚显著改善了患者的总体状况、认知、功能和行为评价指标。尤其是在中度至重度AD患者中，美金刚的治疗效果尤为显著。它在提高患者生活质量和减轻护理负担方面发挥了重要作用，成为中度至重度AD患者理想的药物选择。随着循证医学证据的不断积累，美金刚的抗AD疗效得到了广泛认可，为患者及其家庭带来了新的希望。</p>
<p>1.	认知功能改善：认知功能的改善是AD患者获得独立生活能力的重要前提。美金刚能够显著改善中度至重度AD患者的执行能力、定向力和视空间功能等认知亚项。温布莱德（Winblad）等人的研究表明，美金刚在认知、功能和行为评价指标上均有显著改善。</p>
<p>2.	精神行为症状的预防和改善：美金刚不仅能显著改善AD患者的精神行为症状，如激越、攻击行为、易激惹和妄想，还能预防这些症状的发生，从而提高患者的独立生活能力，减轻护理负担。戈蒂耶（Gauthier）等人的研究显示，美金刚在改善精神行为症状方面效果显著。</p>
<p>3.	延缓临床恶化：对于中度至重度AD患者，预防临床症状的恶化是治疗的理想目标。威尔金森（Wilkinson）等研究发现，美金刚显著降低了患者的临床恶化发生率，长期治疗效果令人满意。</p>
<h3>美金刚的其他应用</h3>
<p>除了用于治疗阿尔茨海默症外，美金刚在治疗其他中枢神经系统疾病如癫痫、偏头痛等方面也展现出一定的疗效。其独特的作用机制使得美金刚在神经领域具有广泛的应用前景。</p>
<h3>美金刚的负面作用</h3>
<p>尽管美金刚在治疗阿尔茨海默症方面展现了显著的疗效，但它也存在一些可能的负面作用。部分患者在使用美金刚期间可能会出现头痛、眩晕、便秘、嗜睡、血压升高等不良反应。某些患者可能会出现精神状态的改变，如焦虑、激动和幻觉等。在服用美金刚时需密切监测患者的反应，听从医嘱，并在必要时调整治疗方案。 </p>

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
  