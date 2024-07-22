<template>
  <div class="menu-component">
    <div class="main-content">
      <div class="vertical-line"></div>
      <div class="content">
        <div class="section" :class="{ 'expanded': isSectionExpanded('section1') }">
          <div class="px">
          <div class="menubox1">
          <div class="ti"><a href="#section1" @click.prevent="scrollTo('#section1')">已有药物</a></div></div>
          <div class="menubox2">
          <div class="ti"><a href="#section2" @click.prevent="scrollTo('#section2')">临床试验</a></div></div>
          <div class="menubox1">
          <div class="ti"><a href="#section3" @click.prevent="scrollTo('#section3')">生活习惯</a></div></div>
          <div class="menubox2">
          <div class="ti"><a href="#section4" @click.prevent="scrollTo('#section4')">相关推荐</a></div></div>
        </div>

          <div><hr></div>
          <h2 id="section1" @click="toggleSection('section1')">
            已有药物
          </h2>
            <div><hr></div>
            <div class="details">
              <p>1、<router-link to="/m3_1">美金刚</router-link> </p>
              <p>2、<router-link to="/m3_2">多奈哌齐</router-link> </p>
              <p>3、<router-link to="/m3_3">加兰他敏</router-link> </p>
              <p>4、<router-link to="/m3_4">卡巴拉汀（利凡斯的明）</router-link> </p>
              <p>5、<router-link to="/m3_5">阿杜那单抗</router-link> </p>
          </div>

          <div><hr></div>
          <h2 id="section2" @click="toggleSection('section2')">
            临床试验
          </h2>
            <div><hr></div>
            <div class="details">
              <p>1、<router-link to="/m4_1">美金刚相关研究</router-link> </p>
              <p>2、<router-link to="/m4_2">多奈哌齐在轻度至中度阿尔茨海默症患者中的疗效和安全性研究</router-link> </p>
              <p>3、<router-link to="/m4_3">盐酸多奈哌齐联合孙氏经颅重复针刺法治疗阿尔茨海默病的效果</router-link> </p>
              <p>4、<router-link to="/m4_4">阿杜那单抗在阿尔茨海默病中的临床试验</router-link> </p>
          </div>

          <div><hr></div>
          <h2 id="section3" @click="toggleSection('section3')">
            生活习惯
          </h2>
            <div><hr></div>
            <div class="details">
              <p>1、<router-link to="/m2_1">KetoFLEX12/3干预法</router-link> </p>
              <p>2、<router-link to="/m2_2">改善饮食</router-link> </p>
              <p>3、<router-link to="/m2_3">体育锻炼</router-link> </p>
              <p>4、<router-link to="/m2_4">优化睡眠</router-link> </p>
              <p>5、<router-link to="/m2_5">压力管理</router-link> </p>
              <p>6、<router-link to="/m2_6">进一步刺激大脑的方法</router-link> </p>
          </div>

          <div><hr></div>
          <h2 id="section4" @click="toggleSection('section4')">
            相关推荐
          </h2>
            <div><hr></div>
            <div class="details">
              <p>1、<a href="https://neuro.dxy.cn/article/608452">老年痴呆药物治疗怎么选？从这 5 点来考虑</a></p> 
              <p>2、<a href="https://www.thepaper.cn/newsDetail_forward_8522046">全球首个阿尔茨海默病国际指南发表：19个好习惯，有效预防痴呆</a> </p>
              <p>3、<a href="https://zhuanlan.zhihu.com/p/137477861">阿尔茨海默氏症协会国际会议最新推荐：健康的生活方式可以抵消阿尔茨海默的遗传风险</a> </p>
          </div>
          
          
          <hr>
        </div>
        </div>
      </div>
      
    </div>

</template>

<script>
export default {
  name: 'MenuComponent',
  data() {
    return {
      activeSubmenus: [],
      expandedSections: []
    };
  },
  methods: {
    scrollTo(hash) {
      const element = document.querySelector(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust the offset to account for the top component height
          behavior: 'smooth',
        });
      }
    },
    toggleSubmenu(menu) {
      const index = this.activeSubmenus.indexOf(menu);
      if (index > -1) {
        this.activeSubmenus.splice(index, 1);
      } else {
        this.activeSubmenus.push(menu);
      }
    },
    isActiveSubmenu(menu) {
      return this.activeSubmenus.includes(menu);
    },
    toggleSection(section) {
      const index = this.expandedSections.indexOf(section);
      if (index > -1) {
        this.expandedSections.splice(index, 1);
      } else {
        this.expandedSections.push(section);
      }
    },
    isSectionExpanded(section) {
      return this.expandedSections.includes(section);
    },
  }
};
</script>

<style scoped>
.menu-component {
  display: flex;
  flex-direction: column;
}

.main-content {
  display: flex;
  margin-top: 80px; /* Adjust this if top component height is different */
}

.vertical-line {
  width: 3px;
  background-color: #000000;
  height: 100vh;
  margin-left: 200px; /* Adjust this value to control the distance between the menu and content */
  position: fixed;
  top: 0;
}

.section {
  margin-bottom: 20px;
  cursor: pointer;
}

.section .triangle {
  float: right;
  margin-right: 10px;
}

.subsection {
  margin-left: 20px;
  margin-bottom: 10px;
}

.details {
  max-height: 300px; /* Show only 3 lines, each line assumed to be 20px height */
  overflow: hidden;
  transition: max-height 0.3s;
  font-family: 'Times New Roman', Times, serif;
}

.details p {
  margin: 0;
  line-height: 20px;
}

button {
  display: block;
  margin-top: 10px;
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 0;
}

button:hover {
  text-decoration: underline;
}

.details.expanded {
  max-height: none; /* Show all content when expanded */
}

.content {
  margin-left: 250px; /* Adjust this value to control the distance between the vertical line and content */
  padding: 20px;
  flex: 1;
}

hr {
  border: none;
  border-top: 2px solid #ccc;
  margin: 20px 0;
}

 .spacer {
  height: 100px; /* Adjust this value to create space */
}

a {
  color: inherit; /* 继承父元素的颜色 */
  text-decoration: none; /* 去掉下划线 */
  font-size: 20px;
  font-weight: 100;
}

a:hover {
  text-decoration: underline; /* 悬停时显示下划线 */
}

p{
  font-family: 'Times New Roman', Times, serif;
}

.ti a{
  font-weight: bolder;
  font-size: 30px;
  font-family: SimHei,"黑体";
}

.menubox1{
  background-color:rgb(211, 212, 211);
  height: 120%;
  width:fit-content;
  padding: 20px;
  display: flex;
  justify-content:left;
  flex-wrap: wrap;
  gap: 2px;
}

.menubox2{
  background-color:rgb(228, 230, 228);
  height: 120%;
  width:fit-content;
  padding: 20px;
  display: flex;
  justify-content:left;
  flex-wrap: wrap;
  gap: 2px;
}

.px{
  display: flex;
  justify-content:left;
  flex-wrap: wrap;
}
</style>
