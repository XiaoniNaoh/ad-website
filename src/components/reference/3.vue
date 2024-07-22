<template>
    <div class="article-container">
      <h1 class="title">精神量表</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
<p>可以让患者做精神量表检查，如阿尔茨海默病行为病理评定量表、蒙特利尔认知评估、简易精神量表等相关认知量表，以判断患者是否存在进行性认知功能障碍。如以下四种：</p>
<h2>1.阿尔茨海默病行为病理评定量表</h2>
<p>用于评估阿尔茨海默病患者的记忆、语言和其他认知障碍的严重程度。</p>
<p>包括12个条目，其中4个评估记忆（单词回忆和单词辨认）和定向力（时间和地点），5个评估语言（物体或手指命名、指令、口头语言能力、找词困难和口头语言理解能力），2个评估实践能力（结构性练习和意象性练习），1个评估注意力和注意力集中（回忆测验指令）。评分范围从0分（无错误或损害）到最大值70分（所有测验条目中表现出严重损害）。</p>
<p>每年AD患者的ADAS-Cog评分平均增加约9分。4分的改善被视为疗效显著。有两套量表（甲和乙），测试间隔小于6个月时应切换至第二套。在一项研究中，ADAS-Cog的轻中度AD界限值为22分，敏感度为82%，特异性为70%。定向力的单项评定对轻度AD的敏感度为80%，特异性为73%。定向力和结构性练习两项判定轻度AD的敏感度为78%，特异性为73%。ADAS-Cog受年龄和文化程度的影响较小。</p>
<p>测验条目应按评分表中的顺序进行。首先进行单词回忆测试，单词辨认测试最后进行，其他认知条目在两项测试之间穿插进行，以减小患者混淆任务的机会。在测试开始前，测试者应与患者进行短暂的中性交谈，以帮助患者放松并观察其语言能力。测试不是定时的，患者的评分不受测试速度影响。每个认知条目只允许两次回答机会。反馈应保持中性，通常不提示是否回答正确，但可以在患者特别询问时提供反馈。</p>
<img src="/images/list/图片1.png"><img src="/images/list/图片2.png"><img src="/images/list/图片3.png"><img src="/images/list/图片4.png"><img src="/images/list/图片5.png">
<h2>2.蒙特利尔认知评估</h2>
<img src="/images/list/图片6.png"><img src="/images/list/图片7.png">
<h2>3.简易精神量表</h2>
<img src="/images/list/图片8.png"><img src="/images/list/图片9.png">
<h2>4.安登布鲁克认知检查</h2>
<h3>注意力</h3>
<p>通过询问患者日期(包括季节和当前位置)来测试注意力;重复三个简单的单词;和串行减法。一个例子是“从 100
中减去7，然后继续从每个新数字中减去 7”。</p>
<h3>记忆</h3>
<p>通过要求患者回忆之前重复的三个单词来测试记忆力;记住并回忆起虚构的姓名和地址;并回顾众所周知的历史事
实。内存部分分为五个部分，分散在测试中。</p>
<h3>流利程度</h3>
<p>流利程度的测试是要求患者在一分钟内以指定字母开头说出尽可能多的单词;并在一分钟内说出尽可能多的动物名
称。例如，测试人员要求应试者列出他们能想到的以字母C开头的每个单词。</p>
<h3>语言</h3>
<p>通过要求患者使用铅笔和纸完成一组有序的物理命令来测试语言，例如“将纸放在铅笔上”:写出两个语法完整的句
子;重复几个多音节单词和两个简短的谚语;说出 12 幅线条图中显示的物体的名称，并回答有关某些物体的上下文
问题;并大声朗读五个常见发音错误的单词。语言涉及赋予单词和陈述含义，因此本节由可能涉及动作的简单说明组
成，例如将纸放在铅笔上的示例，以了解它们应用含义的情况。由于语言对于社会运作很有价值且很重要，因此本节
是最长的，由七个独立部分组成。</p>
<h3>视觉空间</h3>
<p>视觉空间技能几乎每天都被用来记住熟悉地方的方向、地址和布局。
通过要求患者复印两张图表来测试视觉空间
能力;绘制一个钟面，并将指针设置在指定的时间;计算点的集合;并认出四个部分被遮挡的字母。</p>
<h3>评分</h3>
<p>对每项活动的结果进行评分，总分为 100 分(注意力 18 分，记忆力 26 分，流畅性 14分，语言 26 分，视觉空间处
理 16 分)。该分数需要结合患者的整体病史和检查进行解读，但 88 分及以上被认为是正常的;83以下为异常;83
和87之间是不确定的。</p>
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
  