<template>
  <div class="menu-component">
    <div class="main-content">
      <div class="vertical-line"></div>
      <div class="content">
        <div class="section" :class="{ 'expanded': isSectionExpanded('section1') }">
          <div class="px">
          <div class="menubox1">
          <div class="ti"><a href="#section1" @click.prevent="scrollTo('#section1')">诊断标准</a></div></div>
          <div class="menubox2">
          <div class="ti"><a href="#section2" @click.prevent="scrollTo('#section2')">相关书籍</a></div></div>
        </div>
          <div><hr></div>
          <h2 id="section1" @click="toggleSection('section1')">
            诊断标准
          </h2>
            <div><hr></div>
            <div class="details">
              <p>1、<router-link to="/m6_1">临床表现</router-link> </p>
              <p>2、<router-link to="/m6_2">影像学检查</router-link> </p>
              <p>3、<router-link to="/m6_3">精神量表</router-link> </p>
              <p>4、<router-link to="/m6_4">病理体现</router-link> </p>
              
          </div>

          <div><hr></div>
          <h2 id="section2" @click="toggleSection('section2')">
            相关书籍
          </h2>
            <div><hr></div>
            <div class="details">
              <p>1、<router-link to="/m7_1">《阿尔茨海默病：你和你家人需要知道的》</router-link> </p>
              <p>2、<router-link to="/m7_2">《终结阿尔茨海默病：全球第一套预防与逆转失智的个性化程序》</router-link> </p>
              <p>3、<router-link to="/m7_3">《记忆的终点》</router-link> </p>
              <p>4、<router-link to="/m7_4">《偷走心智的贼：阿尔茨海默病的故事》</router-link> </p>
              <p>5、<router-link to="/m7_5">《请你迷失在我身旁：如何与逐渐老去的父母相处》</router-link> </p>
              <p>6、<router-link to="/m7_6">《阿尔茨海默病自我管理全书》</router-link> </p>
              <p>7、<router-link to="/m7_7">《糊涂的老人：解读老年性痴呆症》</router-link> </p>
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
  max-height: 600px; /* Show only 3 lines, each line assumed to be 20px height */
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
