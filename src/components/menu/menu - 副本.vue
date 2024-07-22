<template>
  <div class="menu-component">
    <div class="main-content">
      <div class="menu">
        <ul>
          <li :class="{ 'expanded': isActiveSubmenu('section1') }">
            <div class="spacerx">
              <div class="spacer"></div>
              <div class="logo">
                <router-link to="/" class="ad-logo">
                  <img src="/public/images/logo.png" alt="logo for AD">
                </router-link>
              </div>
            </div>
            <hr>
            <a href="#section1" @click.prevent="toggleSubmenu('section1')">
              发病原因
              <span class="triangle" :class="{ 'rotate': isActiveSubmenu('section1') }"></span>
            </a>
            <ul v-if="isActiveSubmenu('section1')" class="submenu">
              <li><a href="#section1-1" @click.prevent="scrollTo('#section1-1')">环境因素</a></li>
              <li><a href="#section1-2" @click.prevent="scrollTo('#section1-2')">遗传因素</a></li>
            </ul>
          </li>
          <li :class="{ 'expanded': isActiveSubmenu('section2') }">
            <hr>

            <a href="#section2" @click.prevent="toggleSubmenu('section2')">
              研究进展
              <span class="triangle" :class="{ 'rotate': isActiveSubmenu('section2') }"></span>
            </a>
            <ul v-if="isActiveSubmenu('section2')" class="submenu">
              <li><a href="#section2-1" @click.prevent="scrollTo('#section2-1')">最新发现</a></li>
              <li><a href="#section2-2" @click.prevent="scrollTo('#section2-2')">正在进行的研究</a></li>
              <li><a href="#section2-3" @click.prevent="scrollTo('#section2-3')">未来展望</a></li>
            </ul>
          </li>
          <li :class="{ 'expanded': isActiveSubmenu('section4') }">
            <hr>

            <a href="#section4" @click.prevent="toggleSubmenu('section4')">
              科研项目
              <span class="triangle" :class="{ 'rotate': isActiveSubmenu('section4') }"></span>
            </a>
            <ul v-if="isActiveSubmenu('section4')" class="submenu">
              <li><a href="#section4-1" @click.prevent="scrollTo('#section4-1')">AMP-AD</a></li>
              <li><a href="#section4-2" @click.prevent="scrollTo('#section4-2')">ADNI</a></li>
            </ul>
          </li>
          <li>
            <hr>

            <a href="#section3" @click.prevent="scrollTo('#section3')">资源下载</a>
          </li>
          <hr>
        </ul>
      </div>
      <div class="vertical-line"></div>
      <div class="content">
        <div class="section" :class="{ 'expanded': isSectionExpanded('section1') }">
          <div><hr></div>
          <h2 id="section1" @click="toggleSection('section1')">
            发病原因
            <span class="triangle" :class="{ 'rotate': isSectionExpanded('section1') }"></span>
          </h2>
          <div class="subsection" v-if="isSectionExpanded('section1')">
            <div><hr></div>
            <h3 id="section1-1">环境因素</h3>
            <div class="details">
              <p>Content for section 1-1...</p>
              <p>More content for section 1-1...</p>
              <p>Even more content for section 1-1...</p>
            </div>
          </div>
          <div class="subsection" v-if="isSectionExpanded('section1')">
            <h3 id="section1-2">遗传因素</h3>
            <div class="details">
              <p>Content for section 1-2...</p>
              <p>More content for section 1-2...</p>
              <p>Even more content for section 1-2...</p>
            </div>
          </div>
          <hr>
        </div>
        
        <div class="section" :class="{ 'expanded': isSectionExpanded('section2') }">
          <h2 id="section2" @click="toggleSection('section2')">
            研究进展
            <span class="triangle" :class="{ 'rotate': isSectionExpanded('section2') }"></span>
          </h2>
          <div class="subsection" v-if="isSectionExpanded('section2')">
            <div><hr></div>
            <h3 id="section2-1">最新发现</h3>
            <div class="details">
              <p>Content for section 2-1...</p>
              <p>More content for section 2-1...</p>
              <p>Even more content for section 2-1...</p>
            </div>
          </div>
          <div class="subsection" v-if="isSectionExpanded('section2')">
            <h3 id="section2-2">正在进行的研究</h3>
            <div class="details">
              <p>Content for section 2-2...</p>
              <p>More content for section 2-2...</p>
              <p>Even more content for section 2-2...</p>
            </div>
          </div>
          <div class="subsection" v-if="isSectionExpanded('section2')">
            <h3 id="section2-3">未来展望</h3>
            <div class="details">
              <p>Content for section 2-2...</p>
              <p>More content for section 2-2...</p>
              <p>Even more content for section 2-2...</p>
            </div>
          </div>
          <hr>
        </div>

        <div class="section" :class="{ 'expanded': isSectionExpanded('section4') }">
          <h2 id="section4" @click="toggleSection('section4')">
            科研项目
            <span class="triangle" :class="{ 'rotate': isSectionExpanded('section4') }"></span>
          </h2>
          <div class="subsection" v-if="isSectionExpanded('section4')">
            <div><hr></div>
            <h3 id="section4-1">AMP-AD</h3>
            <div class="details">
              <p>Content for section 4-1...</p>
              </div>
          </div>
          <div class="subsection" v-if="isSectionExpanded('section4')">
            <h3 id="section4-2">ADNI</h3>
            <div class="details">
              <p>Content for section 4-2...</p>
              </div>
          </div>
          <hr>
        </div>

        <div class="section" :class="{ 'expanded': isSectionExpanded('section3') }">
          <h2 id="section3" @click="toggleSection('section3')">
            资源下载
            <span class="triangle" :class="{ 'rotate': isSectionExpanded('section3') }"></span>
          </h2>
          <div class="subsection" v-if="isSectionExpanded('section3')">
            <div><hr></div>
            <div class="details">
              <p>链接1</p>
              <p>链接2</p>
              <p>链接3</p>
            </div>
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

.menu {
  width: 200px;
  height: 100vh; /* Adjust to full viewport height */
  background-color: rgb(19, 81, 83);
  padding: 20px;
  box-shadow: 2px 0 10px rgb(255, 255, 255); /* Increase shadow on hover */
  position: fixed;
  top: 0; /* Adjust to start from the top */
  left: 0; /* Ensure the menu is fixed to the left */
  overflow-y: auto;
  transition: box-shadow 0.3s; /* Add transition for smooth effect */
}

.vertical-line {
  width: 3px;
  background-color: #000000;
  height: 100vh;
  margin-left: 350px; /* Adjust this value to control the distance between the menu and content */
  position: fixed;
  top: 0;
}



.ad-logo img {
  max-width: 100px; /* 调整最大宽度 */
  height: auto; /* 让高度自适应 */
  margin-top: -20px;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu ul li {
  margin: 20px 0;
}

.menu ul li.expanded,
.menu ul li.expanded > .submenu {
  background-color: rgba(0, 0, 0, 0.2); /* Darker background for expanded submenu and parent link */
  transition: background-color 0.3s; /* Add transition for smooth effect */
}

.menu ul li .spacerx {
  height: 80px;
}

.menu ul li .spacer {
  height: 10px; /* Adjust this value to create space */
}

.menu ul li a {
  text-decoration: none;
  color: #ffffff;
  display: block;
  position: relative;
  padding: 10px;
  transition: background-color 0.3s; /* Add transition for smooth effect */
}

.menu hr{
  border: none;
  border-top: 4px solid rgba(0,0,0,0.3);
  margin: 20px 0;
  border-top-width: 3px;
}

.menu ul li a:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.menu ul li .triangle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #ffffff;
  transition: transform 0.3s;
}

.menu ul li .triangle.rotate {
  transform: translateY(-50%) rotate(180deg);
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
  max-height: 60px; /* Show only 3 lines, each line assumed to be 20px height */
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
  margin-left: 450px; /* Adjust this value to control the distance between the vertical line and content */
  padding: 20px;
  flex: 1;
}

hr {
  border: none;
  border-top: 2px solid #ccc;
  margin: 20px 0;
}


</style>
