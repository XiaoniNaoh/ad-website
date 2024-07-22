<template>
  <div class="app">
    <div class="navcolumn">
      <nav>
        <div class="logo">
          <a href="#" class="ad-logo"></a>
          <img src="#" alt="logo for AD">
        </div>
        <div class="clear"></div>
        <div class="dropdown">
        <button class="dropbtn">发病原因</button>
        <div class="dropdown-content">
          <a href="https://baidu.com">环境因素</a>
          <a href="https://baidu.com">遗传因素</a>
        </div>
        </div>

        <div class="dropdown">
          <button @click="myFunction1" class="dropbtn">患者支持</button>
          <div id="myDropdown1" class="dropdown-content">
            <a href="https://baidu.com">社区资源</a>
            <a href="https://baidu.com">心理辅导</a>
            <a href="https://baidu.com">康复训练</a>
          </div>
        </div>

        <div class="dropdown">
          <button @click="myFunction1" class="dropbtn">研究进展</button>
          <div id="myDropdown1" class="dropdown-content">
            <a href="https://baidu.com">最新发现</a>
            <a href="https://baidu.com">正在进行的研究</a>
            <a href="https://baidu.com">未来展望</a>
          </div>
        </div>

        <div class="dropdown">
          <button @click="myFunction1" class="dropbtn">治疗方式</button>
          <div id="myDropdown1" class="dropdown-content">
            <a href="https://baidu.com">治疗方式1</a>
            <a href="https://baidu.com">治疗方式2</a>
            <a href="https://baidu.com">治疗方式3</a>
          </div>
        </div>
        <div class="dropdown">
          <button @click="myFunction2" class="dropbtn">资源下载</button>
        </div>
        <div class="dropdown">
          <button @click="myFunction3" class="dropbtn">更多</button>
          <div id="myDropdown3" class="dropdown-content">
            <a href="https://baidu.com">有关历史</a>
            <a href="https://baidu.com">疾病症状</a>
            <a href="https://baidu.com">诊断方式</a>
          </div>
        </div>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="#" target="_blank"><li>Show me more</li></a>
          </ul>
        </div>
      </nav>
    </div>

    <div class="mainpart">
      <div class="header">
        <h4>关于阿尔茨海默症</h4>
      </div>
      <div class="content">
        <ul class="listcontainer">
          <div class="listpartmax">
            <li>
              <ImageCard
          title="关于阿尔茨海默症，你知道多少"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis obcaecati suscipit provident soluta! Laborum, ex sit voluptatum enim eumitecto nositiis, a similique?"
          imageSrc="/images/1.jpg"
          link="introduction/index.html"
          titleClass="custom-title"
          :titleStyle="{ fontSize: '24px', color: 'black' }"
        />
            </li>
            <div class="clear"></div>
          </div>
          <div class="line"></div>
          <div class="listpart">
            <li>
              <ImageCard
          title="阿尔茨海默症症状"
          description="我还没说话呢"
          imageSrc="/images/1.jpg"
          link="introduction/index.html"
          titleClass="custom-title"
          :titleStyle="{ fontSize: '18px', color: 'black' }"
        />
            </li>
          </div>
          <div class="listpart">
            <li>
              <ImageCard
          title="一些前沿研究现状"
          description="我还没说话呢"
          imageSrc="/images/1.jpg"
          link="introduction/index.html"
          titleClass="custom-title"
          :titleStyle="{ fontSize: '18px', color: 'black' }"
        />
            </li>
          </div>
          <div class="listpart">
            <li>
              <ImageCard
          title="阿尔茨海默症治疗方式"
          description="我还没说话呢"
          imageSrc="/images/1.jpg"
          link="introduction/index.html"
          titleClass="custom-title"
          :titleStyle="{ fontSize: '18px', color: 'black' }"
        />
            </li>
          </div>
          <div class="clear"></div>
          <div class="line"></div>
        </ul>
      </div>

      <div class="alist"></div>
    </div>
    <div class="bottom">
      <div class="listcontainer">
        <div class="text">
          <p>相关链接</p>
          <a href="https://mp.weixin.qq.com/s/b6yWqHY58qD00054t8nd7A">《中国阿尔茨海默病蓝皮书》</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageCard from './ImageCard.vue'

export default {
  components: {
      ImageCard
    },
  methods: {
    myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
    myFunction1() {
      document.getElementById("myDropdown1").classList.toggle("show");
    },
    myFunction2() {
      document.getElementById("myDropdown2").classList.toggle("show");
    },
    myFunction3() {
      document.getElementById("myDropdown3").classList.toggle("show");
    }
  },
  mounted() {
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  min-width: 1000px;
  background-color:#f1f1f1;
  font-size: 22px;
  font-family: SimHei,"黑体";
  color: black;
  line-height: 34px;
}
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #2980b9;
}
.custom-img {
  width: 20%; /* 设置宽度为20% */
  height: auto; /* 保持图片比例 */
  object-fit: cover; /* 如果图片比例不一致，可以使用cover来裁剪图片 */
}

nav {
  margin:0;
  padding: 20px 200px;
  background-color: rgb(20, 76, 78);
}
.logo {
  padding: 10px 0 0 20px;
  width: 200px;
  position: absolute;
  left: 0;
  float: left;
}
.mainpart {
  padding: 0;
  margin: 0;
}
.header {
  padding: 30px 0 5px 30px;
  margin: 20px 70px ;
  margin-top: 25px;
  margin-bottom: 5px;
  border-bottom: 1px rgb(99, 99, 99) solid;
}
.header h4{
  letter-spacing: 0.2cm;
  margin: 0;
  padding: 0;
  color: rgb(20, 76, 78);
  font-weight:bold;
  font-size: 20px;
  font-family: SimHei,"黑体";
  font-weight: bolder;
}
h3 {
  margin: 0;
  color: black;
}
h4 {
  margin: 0;
  color: black;
}
p {
  margin: 0;
  color: black;
}
.content {
  padding: 0 ;
  margin: 0 ;
  box-sizing: border-box;
}
.content ul {
  list-style: none;
  padding: 0 ;
  margin: 0;
}
.content ul li a {
  text-decoration: none;
  cursor: pointer;
}
.listpart li a :hover{
  color:  rgb(37, 118, 121);
}
.listpartmax .text h2:hover{
  color:  rgb(37, 118, 121);
}
.text {
  padding: 0 0 5px 0;
}
.text h3{
  margin: 0;
  padding:0;
}
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
}
.imgcontainer {
  overflow: hidden;
}
.maximg {
  overflow: hidden;

}
img {
  display: block;
  border-radius: 10px ;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.6s;    /*设置动画执行的时间为0.6s*/
}
img :hover {
  transform: scale(1.2);
}
.flex-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.maximg {
  padding: 20px 20px;
  width: auto;
  float: left;
  overflow: auto;
  box-sizing: border-box;
  position: relative;
}
.listpartmax .text{
  padding: 40px 40px 20px 0;
  position:relative;
  width: 40%;
  overflow: auto;
  float: left;
  box-sizing: border-box;
}
.listcontainer {
  padding: 0;
  margin: 0;
  overflow: auto;
  box-sizing: border-box;
}
.listpartmax {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.listpartmax .text h2 {
  padding: 0 0 10px 0;
  margin: 0;
  text-align: center;
  line-height: 1cm;
  font-weight: bolder;
  color: black;
}
.listpartmax .text p {
  text-align: center;
}
.imgcontainer {
  padding: 0 0 20px 0;
  margin: 0;
  position: relative;
}
.listpart {
  padding: 10px 70px;
  min-width: 200px;
  overflow: auto;
  width:33.3%;
  float: left;
  position: relative;
  box-sizing: border-box;
}
.line {
  height: 1px;
  padding: 0 ;
  margin: 20px 70px;
  width: auto;
  background-color: rgb(99, 99, 99);
}
.clear{
  clear: both;
}
.dropbtn {
  margin: 10px 20px 10px 20px;
  background-color: rgb(20, 76, 78);
  color: white;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}
.dropbtn:hover, .dropbtn:focus {
  background-color: rgb(37, 118, 121);
  box-shadow: 10px 10px 5px 3px rgb(71, 162, 164);
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown a:hover {background-color: #f1f1f1}
.show {display:block;}
.bottom {
  background-color: rgb(14, 51, 47);
  position: fixed; /* 固定位置 */
  bottom: 0; /* 置于页面底部 */
  width: 100%; /* 占满整个页面宽度 */
  padding: 30px 70px; /* 调整内边距，使底部栏高度减小 */
  margin: 0;
}

.bottom p {
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #f1f1f1;
  line-height: 2; /* 设置行高，使文字向上移动 */
  margin: 0;
  padding: 5px; /* 可以移除内边距，以便更好地控制文本位置 */ /* 保持文本内边距 */
}
.bottom a{
  font-size: 15px;
  font-weight: normal;
  text-align: left;
  color: #f1f1f1;
  margin: 0;
}
.bottom a:hover {
  color: #dcdcdc; /* 设置链接悬停时的颜色 */
}
#menuToggle {
  display: block;
  position: absolute;
  top: 46px;
  right: 46px;
  background-color: transparent;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}
#menuToggle a {
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}
#menuToggle a:hover {
  color: rgb(51, 171, 175);
}
#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
}
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}
#menuToggle span:first-child {
  transform-origin: 0% 0%;
}
#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}
#menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -300px;
  padding: 50px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}
#menu li {
  background-color: #ededed;
  padding: 10px 0;
  font-size: 22px;
}
#menuToggle input:checked ~ ul {
  transform: none;
}
</style>
