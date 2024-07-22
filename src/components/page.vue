<template>
  <div class="article-container">
    <h1 class="title">阿尔茨海默症的基本症状</h1>
    <div class="font-size-controls">
      调整字体大小：
      <button @click="decreaseFontSize">-</button>
      <button @click="increaseFontSize">+</button>
    </div>
    <div class="content" :style="{ fontSize: fontSize + 'px' }">
      <p>①轻度：</p>
      <p>近事记忆减退，常将日常所做的事和常用的一些物品遗忘。
        随着病情的发展，可出现远期记忆减退，即对发生已久的事情和人物的遗忘。
        部分患者出现视空间障碍，外出后找不到回家的路，不能精确地临摹立体图。
        面对生疏和复杂的事物容易出现疲乏、焦虑和消极情绪。
        表现出人格方面的障碍，如不爱清洁、不修边幅、暴躁、易怒、自私多疑。</p>
      <p>②中度：</p>
      <p>工作、学习新知识和社会接触能力减退，特别是原已掌握的知识和技巧出现明显的衰退；
        出现逻辑思维、综合分析能力减退，言语重复、计算力下降，明显的视空间障碍，如在家中找不到自己的房间；
        可出现失语、失用、失认等;</p>
      <p>有些患者还可出现癫痫、强直-少动综合征；
        患者常有较明显的行为和精神异常，性格内向的患者变得易激惹、兴奋欣快、言语增多，而原来性格外向的患者则可变得沉默寡言，对任何事情提不起兴趣；
        出现明显的人格改变，甚至做出一些丧失羞耻感（如随地大小便等）的行为。
      </p>
      <p>③重度：</p>
      <p>情感淡漠、哭笑无常、言语能力丧失、以致不能完成日常简单的生活事项，如穿衣、进食；终日无语而卧床，与外界（包括亲友）逐渐丧失接触能力；四肢出现强直或屈曲瘫痪，括约肌功能障碍；常可并发全身系统疾病的症状，如肺部及尿路感染、压疮以及全身性衰竭症状等，最终因并发症而死亡。</p>
      <img src="/images/症状.png" alt="阿尔茨海默症的基本症状" class="article-image"/>
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
  max-width: 1000px;
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
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  text-indent: 2em;
  text-align: left; /* 文字居左对齐，整个内容居中对齐 */
  position: relative;
  max-width: 120%;
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
  max-width: 200%;
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
