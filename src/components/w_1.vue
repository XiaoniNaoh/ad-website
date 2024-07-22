<template>
  <div class="article-container">
    <h1 class="title">阿尔茨海默病的基本症状</h1>
    <div class="font-size-controls">
      调整字体大小：
      <button @click="decreaseFontSize">-</button>
      <button @click="increaseFontSize">+</button>
    </div>
    <div class="content" :style="{ fontSize: fontSize + 'px' }">
      <p>阿尔茨海默病的历史：</p>
      <p>（1）阿尔茨海默病的发现与命名</p>
      <p>在1906年11月的一次科学会议上，来自德国的阿勒斯·阿尔茨海默医生公布了一位1901年由家人陪同前来就诊的51岁已婚妇女奥葛斯特·蒂的病历。奥葛斯特有严重的记忆障碍，毫无根据地怀疑丈夫的忠诚，讲话困难并且很难理解别人对她说的话。她的症状迅速恶化，短短几年就卧床不起，最后于1906 年春天因为褥疮和肺炎导致的重度感染去世。</p>
      <p>阿尔茨海默医生从来没有见过像奥葛斯特·蒂一样的病例，在征得患者家属的同意后对奥葛斯特进行了尸体解剖。阿尔茨海默医生惊奇地发现，奥葛斯特的大脑严重萎缩，尤其是大脑皮层部分，而这里掌管着人的记忆、思考、判断和语言。在显微镜下，小血管里布满了脂肪沉积物，坏死的脑细胞和异常的沉积物充满了四周。</p>
      <p>阿尔茨海默医生发表了他对奥葛斯特的研究结果，并于1907年被收录进了医学文献。1910年，以命名和分类大脑疾病著称的精神病学家埃米尔·克瑞佩林，提议将此病命名为阿尔茨海默病。</p>
      <p>（2）1931 电子显微镜发明 </p>
      <p>为人类大脑的研究贡献了一个重要且有力的武器</p>
      <p>（3）1973--美国国立老年研究所成立</p>
      <p>1980——阿尔茨海默病协会成立</p>
      <p>（4）1984 划时代的革命</p>
      <p>发现AD患者脑内β-淀粉样沉积，同时确立AD的诊断标准</p>
      <p>其实早在1930年，Divry用刚果红对AD病人脑中的损害区域进行染色，成功地使沉积在细胞外的老年斑着色，进而发现老年斑的主要成分是一种嗜刚果红的淀粉样蛋白。</p>
      <p>1984年Glenner等分别成功地完成了对这种蛋白的分离和测序工作，发现此蛋白是由39～43个氨基酸残基组成，因其具有一个β片层的二级结构，遂命名为β淀粉样蛋白，简称Aβ。</p>
      <p>（5）1986 AD的另一病理标志物磷酸化的tau蛋白被发现</p>
      <p>它是AD患者脑内神经元缠结的成分之一</p>
      <p>（6）1987 Aβ前体蛋白APP(淀粉样蛋白前体蛋白)基因定位于21号染色体  </p>
      <p>（7）1993第一个由美国FDA批准治疗AD的药物——他克林（tacroline）上市</p>
      <p>他克林是1993年第一个被美国FDA批准上市的AD治疗药物，为非选择性可逆性AchE抑制剂，易透过血脑屏障，除可抑制AchE外，也可直接作用于M受体和N受体，可促进Ach释放，抑制单胺氧化酶。临床研究表明，该药可改善轻度AD患者的临床症状，但因其对肝脏的毒副作用较大，现已很少应用。</p>
      <p>（8）1996 美国FDA批准多奈哌齐可用于治疗AD</p>
      <p>多奈哌齐由日本卫材制药株式会社研发，并与辉瑞合作进行全球市场的开发。1996年11月获得美国FDA的特许批准用于临床，商品名为“Aricept”。</p>
      <p>1997年首先在美国上市，随后在全球50多个国家地区上市，是目前全球抗老年痴呆症药物市场的领军品种。</p>
      <p>（9）1999 Aβ疫苗研究在小鼠体内获得成功</p>
      <p>1999年Schenk等用Aβ1-42分子为多肽疫苗免疫PDAPP转基因小鼠，经过治疗，幼年小鼠脑组织没有产生Aβ沉积、神经细胞萎缩等AD的典型病变。已经发病的老龄鼠，治疗后病变明显减轻。</p>
      <p>（10）2000 利斯的明（艾斯能）获FDA批准上市治疗AD</p>
      <p>2001 加兰他敏获FDA批准，两药同属胆碱酯酶抑制剂。</p>

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
  max-width: 1200px;
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
