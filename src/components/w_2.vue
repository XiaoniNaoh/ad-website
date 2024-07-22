<template>
  <div class="article-container">
    <h1 class="title">阿尔茨海默病的基本症状</h1>
    <div class="font-size-controls">
      调整字体大小：
      <button @click="decreaseFontSize">-</button>
      <button @click="increaseFontSize">+</button>
    </div>
    <div class="content" :style="{ fontSize: fontSize + 'px' }">
      <p>（一）国内形势</p>
      <p>中国有老年痴呆患者500万人之多，占世界总病例数的四分之一强，而且每年平均有30万新发病例。中国老年痴呆的患病率已随着年龄的升高呈显著增长趋势：75岁以上达8.26%，80岁以上高达11.4%；老年痴呆的患者女性多于男性，60岁以上妇女患老年痴呆，通常是相匹配男性的2到3倍。</p>
      <p>（二）疾病介绍</p>
      <p>老年性痴呆是一种严重的智力致残症，病人从轻度记忆与认知障碍到最后的植物状态，要经历几年甚至几十年，这对病人和家属都是一个痛苦的过程。老年性痴呆像一种“流行病”，在老年人中发病率上升较快。</p>
      <p>（三）社会影响</p>
      <p>更令人担忧的是，绝大部分患者就诊不及时或根本不到医院诊治，生活质量低下，这一现象应引起社会、家庭的关注。调查显示，中国轻度痴呆症患者的就诊率为14%，中度痴呆症患者的就诊率为25%，重度痴呆症患者的就诊率为34%。47%的痴呆症老人照料者认为，病人的状况是自然衰老的结果。</p>
      <p>众所周知，美国前总统里根因患老年性痴呆而死亡。但你或许并不知道，随着人均寿命的不断增长，预计到2015年，一对夫妻赡养的4位80岁以上老人中，可能就有一位是老年性痴呆患者。国际老年痴呆协会中国委员会副主席、首都医科大学宣武医院研究员盛树力今天告诉记者，此病集身体、精神、神经和社会于一身的特点，给患者及家属带来了巨大的痛苦。我国关于老年痴呆的基础性研究十分薄弱，引发出的相关问题令人担忧。</p>
      <p>（四）疾病研究</p>
      <p>美国、日本以及欧洲一些国家十分重视老年性痴呆的基础性研究，仅美国就有29个专业研究中心，2005年其研究经费达11.6亿美元，欧洲此项的经费投入也达1亿欧元，但我国没有一家专门从事此病的研究机构，专项的研究经费更是少之又少，既没有规模性的、稳定的研究队伍和长远的研究与防治规划，也没有可供科研人员交流的专业期刊。</p>
      <p>老年痴呆复杂的发病机理，导致人们对其知晓率低。调查显示，有半数以上的痴呆病人亲属认为，老年性痴呆只是自然衰老的结果，而不认为是一种疾病。特别是在发病率很高的农村，接受治疗的人很少，而采取早期防治，恰恰是世界公认的延缓老年性痴呆发病的有力措施。阻碍这些患者治疗的因素中，除了没有正确判断病情外，高额的治疗费用是带给家庭的主要负担。在中国，一个老年性痴呆病人一个月仅药费的支出就达900元，在美、欧国家每个病人每年的费用高达1万多美金。在中国此类药物没有列入医保目录，但是在一些商业保险公司的重大疾病保险中已经有老年性痴呆保障。没有商业保障的家庭，如果有痴呆病人的家庭将陷入难以想象的困境中。</p>
      <p>（五）2023阿尔茨海默病协会国际会议(AAIC)最新研究</p>
      <p>①阿尔茨海默病协会发布Donanemab 3期数据</p>
      <p>通过对多纳单抗3期结果分析，能够看到彻底清除大脑中的β-淀粉样蛋白与显著减缓早期阿尔茨海默病患者的疾病进展。该实验进一步表明，在疾病过程中尽早开始治疗，患者也能够更好地获益，即使再晚些开始治疗，也有可能减缓疾病进展。</p>
      <p>②CRISPR基因编辑技术为阿尔茨海默病治疗带来新希望</p>
      <p>在2023年阿尔茨海默病协会国际会议上，分享了两种基于CRISPR基因技术的阿尔茨海默病治疗方法。其中一种是减少阿尔茨海默病风险基因APOE-e4的影响，另一种是减少β-淀粉样蛋白的产生及沉积。</p>
      <p>杜克大学高级基因组技术中心的相关专家表示，基于CRISPR/dCas9编辑策略，表观基因组治疗旨在减少APOE-e4的相关发病风险，杜克大学神经生物学副教授兼教员Boris Kantor博士表示，阿尔茨海默病目前还没有治愈方法，这些研究为阿尔茨海默病的治疗甚至预防提供了一些新的思路。</p>
      <p>③AAIC 公布2023年阿尔茨海默病最新诊断标准</p>
      <p>修订草案的新内容是引入基于血液的生物标志物的检测，但同时提案中提及的一些生物标志物尚未进行大规模测试，需要对相关的群体做进一步的分析。</p>
      <p>④听力受损老人使用助听器能够减缓认知功能下降</p>
      <p>⑤老年痴呆症患者新使用阿片类药物可使死亡风险增加数倍</p>
      <p>⑥便秘与认知老化和衰退</p>
      <p>最新研究提示排便次数减少与认知能力下降有关，另外两项研究定义了与痴呆风险增加相关或许和特定肠道细菌及可能具有神经保护作用的肠道细菌有关。</p>
      <p>⑦简单的指尖血检查提示阿尔茨海默病血液检查的新进展</p>
      <p>AAIC 2023首次报告的技术和实践进步证明了基于血液的阿尔茨海默病生物标志物的简单性、可移动性以及诊断价值，包括患者或家庭成员未来在家检测的可能性。</p>
      <p>2024年2月22日，宣武医院贾建平团队在《新英格兰医学杂志》（The New England Journal of Medicine，the NEJM）在线发表题为“Biomarker Changes During 20 Years Preceding Alzheimer’s Disease”的文章。这是迄今为止世界上规模最大、随访时间最长的反映阿尔茨海默病（Alzheimer’s disease, AD）诊断前生物标志物变化的纵向队列研究，在中国人群中进行了长达20年的观察，首次揭示了AD无症状期到有症状期脑脊液和影像学生物标志物的动态变化规律，详尽的阐明了AD发病出现生理病理变化最早的关键节点，为靶向Aβ等相关病理蛋白的抗AD新药提供了时间窗指导，也为AD超早期诊断和精准干预提供了强有力的证据。这是中国AD领域首次在国际顶刊NEJM发表研究型论著，彰显了中国在世界AD研究领域的领先地位。</p>

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
