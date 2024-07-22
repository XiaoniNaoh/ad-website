<template>
  <div class="menu-component">
    <div class="main-content">
      <div class="vertical-line"></div>
      <div class="content">
        <div class="section" :class="{ 'expanded': isSectionExpanded('section1') }">
        <div class="px">
          <div class="menubox1">
          <div class="ti"><a href="#section4" @click.prevent="scrollTo('#section4')">发病机理</a></div></div>
          <div class="menubox2">
          <div class="ti"><a href="#section1" @click.prevent="scrollTo('#section1')">遗传因素</a></div></div>
          <div class="menubox1">
          <div class="ti"><a href="#section2" @click.prevent="scrollTo('#section2')">环境因素</a></div></div>
          <div class="menubox2">
          <div class="ti"><a href="#section3" @click.prevent="scrollTo('#section3')">相关推荐</a></div></div>
        </div>

          <div><hr></div>
          <h2 id="section4" @click="toggleSection('section4')">
            发病机理
          </h2>
            <div><hr></div>
            <div class="details">
              <p><router-link to="/m1_1">1、细胞凋亡</router-link></p>
              <p><router-link to="/m1_2">2、依赖受体和微管是什么?</router-link></p>
              <p><router-link to="/m1_3">3、阿尔茨海默病病人的大脑发生了什么</router-link></p>
          </div>


          <div><hr></div>
          <h2 id="section1" @click="toggleSection('section1')">
            遗传因素
          </h2>
            <div><hr></div>
            <div class="details">
              <p><router-link to="/m1_4">1、ApoE基因的影响</router-link> </p>
              <p><router-link to="/m1_5">2、APP和PSEN基因影响</router-link> </p>
          </div>

          <div><hr></div>
          <h2 id="section2" @click="toggleSection('section2')">
            环境因素
          </h2>
            <div><hr></div>
            <div class="details">
              <p><router-link to="/m5_1">1、炎症侵犯</router-link></p>
              <p><router-link to="/m5_2">2、营养不足或营养过剩</router-link> </p>
              <p><router-link to="/m5_3">3、与毒性化合物接触</router-link> </p>
              <p><router-link to="/m5_4">4、生活环境单一</router-link> </p>
              <p><router-link to="/m5_5">5、不良生活方式</router-link> </p>
          </div>
          
          <div><hr></div>
          <h2 id="section3" @click="toggleSection('section3')">
            相关推荐
          </h2>
            <div><hr></div>
            <div class="details">
              <p>1、<a href="https://www.cellsignal.cn/pathways/genetics-of-alzheimers-disease">阿尔茨海默病的遗传学</a></p>
              <p>2、<a href="https://www.cas.cn/kj/202204/t20220408_4830875.shtml#:~:text=%E5%9C%A8%E8%BF%84%E4%BB%8A%E4%B8%BA%E6%AD%A2%E6%9C%80%E5%A4%A7%E7%9A%84%E9%98%BF%E5%B0%94%E8%8C%A8%E6%B5%B7%E9%BB%98%E7%97%85%E9%81%97%E4%BC%A0%E9%A3%8E%E9%99%A9%E7%A0%94%E7%A9%B6%E4%B8%AD%EF%BC%8C%E7%A7%91%E5%AD%A6%E5%AE%B6%E5%8F%91%E7%8E%B0%E4%BA%8642%E4%B8%AA%E6%96%B0%E7%9A%84%E4%B8%8E%E8%AF%A5%E7%96%BE%E7%97%85%E5%8F%91%E5%B1%95%E7%9B%B8%E5%85%B3%E7%9A%84%E5%9F%BA%E5%9B%A0%E3%80%82%20%E7%A0%94%E7%A9%B6%E7%BB%93%E6%9E%9C%E8%A1%A8%E6%98%8E%EF%BC%8C%E9%98%BF%E5%B0%94%E8%8C%A8%E6%B5%B7%E9%BB%98%E7%97%85%E6%82%A3%E8%80%85%E5%A4%A7%E8%84%91%E7%9A%84%E9%80%80%E5%8C%96%E5%8F%AF%E8%83%BD%E4%B8%8E%E5%B0%8F%E8%83%B6%E8%B4%A8%E7%BB%86%E8%83%9E%E6%9C%89%E5%85%B3%E3%80%82,%E9%98%BF%E5%B0%94%E8%8C%A8%E6%B5%B7%E9%BB%98%E7%97%85%E6%98%AF%E4%B8%80%E7%A7%8D%E6%9E%81%E5%85%B6%E5%A4%8D%E6%9D%82%E4%B8%94%E5%A4%9A%E5%9B%A0%E7%B4%A0%E7%9A%84%E7%96%BE%E7%97%85%E3%80%82%20%E5%85%88%E5%89%8D%E7%A0%94%E7%A9%B6%E8%A1%A8%E6%98%8E%EF%BC%8C%E8%99%BD%E7%84%B6%E5%90%B8%E7%83%9F%E3%80%81%E9%94%BB%E7%82%BC%E5%92%8C%E9%A5%AE%E9%A3%9F%E7%AD%89%E7%94%9F%E6%B4%BB%E6%96%B9%E5%BC%8F%E5%9B%A0%E7%B4%A0%E4%BC%9A%E5%BD%B1%E5%93%8D%E6%82%A3%E7%97%85%E9%A3%8E%E9%99%A9%EF%BC%8C%E4%BD%86%E6%9B%B4%E5%A4%9A%E7%9A%84%E5%8E%9F%E5%9B%A0%E5%9C%A8%E4%BA%8E%E9%81%97%E4%BC%A0%EF%BC%8C%E5%8D%B360%25%E2%80%9480%25%E7%9A%84%E7%96%BE%E7%97%85%E9%A3%8E%E9%99%A9%E7%94%B1%E5%9F%BA%E5%9B%A0%E5%AF%BC%E8%87%B4%E3%80%82">42个阿尔茨海默病相关新基因揭示</a></p>
              <p>3、<a href="http://www.ibp.cas.cn/kxcb_157836/kpwz_157839/202206/t20220615_6460998.html">从"表观修饰"到"基因功能"--表观遗传学视角下的阿尔茨海默病</a></p>
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
  max-height: 500px; /* Show only 3 lines, each line assumed to be 20px height */
  overflow: hidden;
  transition: max-height 0.3s;
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
