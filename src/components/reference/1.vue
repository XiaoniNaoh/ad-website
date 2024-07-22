<template>
    <div class="article-container">
      <h1 class="title">临床表现</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
  <p>
阿尔茨海默病的临床表现主要包括认知能力的下降、精神和行为异常，最终影响患者的日常生活能力。发病年龄一般在40至90岁之间，但多数病例出现在65岁以后。早发性阿尔茨海默病较为少见，通常与遗传因素有关，而晚发性阿尔茨海默病则更为常见，且风险随着年龄的增长而增加。
</p><p>
认知能力的下降是阿尔茨海默病的核心症状。早期表现为轻度记忆力障碍，尤其是近期记忆的丧失。患者可能会忘记刚刚发生的事情或约定，并频繁地重复问题或话题。随着疾病的进展，其他认知功能也会受到影响。空间感和方向感减退是常见的表现，患者常常迷失方向，难以辨认熟悉的地点，甚至在熟悉的环境中也可能迷路。语言障碍也会逐渐显现，患者可能会出现词汇贫乏、语言表达困难和理解能力下降，这会使他们难以进行流利的对话。执行功能方面的障碍使得患者在计划、组织和完成任务时遇到困难，例如管理财务、做饭或完成日常事务。判断力和决策能力也会受到影响，患者可能会做出不合逻辑的决定或无法解决简单的问题。
</p><p>
随着病情的进展，患者可能会出现一系列精神和行为异常，包括抑郁和焦虑，表现为情绪低落、失去兴趣、易怒和焦虑。部分患者会经历幻觉和妄想，认为有人要伤害自己或偷窃东西。攻击性行为和烦躁不安也常见，有些患者会表现出易怒和攻击性行为，或无法安静下来。此外，由于认知和情绪问题，患者可能逐渐减少社交活动，变得孤僻和退缩。
</p><p>
在疾病的晚期阶段，患者的日常生活能力会显著下降，逐渐失去独立生活的能力。他们可能无法独立完成洗澡、穿衣、刷牙等基本个人卫生护理，甚至需要帮助才能进食。最终，患者可能需要全天候的护理和支持，无法独立生活。阿尔茨海默病对患者及其家人的生活质量产生了深远的影响，因此早期识别和干预非常重要。
</p>
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
  