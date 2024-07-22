<template>
  <div class="mainpart">
    <div class="header">
      <h4>关于阿尔茨海默病</h4>
    </div>
    <div class="content">
      <div class="main-article">
        <router-link to="/welcome1">
          <ImageCardb
            title="阿尔茨海默病的症状"
            description="近事记忆减退，常将日常所做的事和常用的一些物品遗忘。 随着病情的发展，可出现远期记忆减退，即对发生已久的事情和人物的遗忘……"
            imageSrc="/images/w_1.png"
            titleClass="custom-title"
            :titleStyle="{ fontSize: '36px', color: 'black' }"
          />
        </router-link>
      </div>
      <hr>
      <div class="sub-articles">
        <div class="sub-article">
          <router-link to="/welcome2">
            <ImageCard
              title="阿尔茨海默病的历史"
              description="在1906年11月的一次科学会议上，来自德国的阿勒斯·阿尔茨海默医生公布了一位1901年由家人陪同前来就诊的51岁已婚妇女奥葛斯特蒂的病历……"
              imageSrc="/images/w_2.png"
              titleClass="custom-title"
              :titleStyle="{ fontSize: '24px', color: 'black' }"
            />
          </router-link>
        </div>
        <div class="sub-article">
          <router-link to="/welcome3">
            <ImageCard
              title="阿尔茨海默病研究的现状"
              description="宣武医院贾建平团队在《新英格兰医学杂志》在线发表题为“阿尔茨海默病前 20 年的生物标志物变化”的文章，这是迄今为止世界上规模最大、随访时间最长……"
              imageSrc="/images/w_3.png"
              titleClass="custom-title"
              :titleStyle="{ fontSize: '18px', color: 'black' }"
            />
          </router-link>
        </div>
        <div class="sub-article">
          <router-link to="/welcome4">
            <ImageCard
              title="阿尔兹海默病国际日"
              description="9月21日是“世界阿尔茨海默病日”，1910被命名为阿尔茨海默病。在这一天，全世界60多个国家和地区都将组织一系列活动。中国有老年痴呆患者500万人之多……"
              imageSrc="/images/w_4.png"
              titleClass="custom-title"
              :titleStyle="{ fontSize: '18px', color: 'black' }"
            />
          </router-link>
        </div>
      </div>
      <div class="header">
      <h4>推荐视频</h4>
    </div>
      <div class="sub-articles">
    <div class="sub-video">
        <video width="640" height="360" controls poster="/images/sp1.png">
            <source src="/video/阿尔茨海默病患者，从发病到终末的七个阶段，建议收藏转发.mp4" type="video/mp4">
            阿尔茨海默病患者，从发病到终末的七个阶段
        </video>
        <p>阿尔茨海默病患者，从发病到终末的七个阶段</p>
        <p>视频出处：<a href="https://www.bilibili.com/video/BV1JG411Q7T7/?spm_id_from=333.337.search-card.all.click&vd_source=4a2283acb1a3ac7803eccba182a11ee2">bilibili 罗夕夕博士</a></p>
    </div>



  <div class="sub-video">
    <video width="640" height="360" controls poster="/images/sp2.png">
      <source src="/video/阿尔茨海默症眼中的世界,油管14万点赞动画短片《备忘录》.mp4" type="video/mp4">
      阿尔茨海默症眼中的世界《备忘录》
    </video>
    <p>阿尔茨海默症眼中的世界《备忘录》</p>
    <p>视频出处：<a href="https://www.bilibili.com/video/BV1JG411Q7T7/?spm_id_from=333.337.search-card.all.click&vd_source=4a2283acb1a3ac7803eccba182a11ee2">bilibili YouTube精选字幕组</a>
    </p>
    </div>
  </div>

    </div>
  </div>
</template>

<script>
import ImageCard from './ImageCard.vue'
import ImageCardb from './ImageCardb.vue'

export default {
  components: {
    ImageCard,
    ImageCardb
  },
  name: 'MainContent'
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  min-width: 1000px;
  background-color: #f1f1f1;
  font-size: 22px;
  font-family: SimHei, "黑体";
  color: black;
  line-height: 34px;
}

.mainpart {
  padding: 0;
  margin-top: 10px;
}

.header {
  padding: 30px 0 5px 30px;
  margin: 20px 70px;
  margin-top: 25px;
  margin-bottom: 25px;
  border-bottom: 1px rgb(99, 99, 99) solid;
}

.header h4 {
  letter-spacing: 0.2cm;
  margin: 0;
  padding: 0;
  color: rgb(20, 76, 78);
  font-weight: bold;
  font-size: 20px;
  font-family: SimHei, "黑体";
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
  padding: 100px;
  margin: 0;
  box-sizing: border-box;
}

.main-article {
  display: flex;
  justify-content: center;
  margin-left: -350px;
  margin-top: -70px;
}

.sub-articles {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1px; /* 增加子文章之间的间距 */
}

.sub-article {
  flex: 1;
  min-width: 30%;
  box-sizing: border-box;
  padding: 1px; /* 调整子文章的内边距 */
}

a {
  text-decoration: none;
  color: inherit; /* 确保超链接文字颜色不会变成蓝色 */
}

.custom-title {
  font-size: 18px;
  color: black;
}

.image-card img {
  width: 300%; /* 放大图片尺寸 */
  height: auto;
  display: block;
  border-radius: 10px;
}

.image-card .title {
  padding: 10px;
  background-color: #f9f9f9;
  text-align: center;
  color: #333;
  transition: color 0.3s;
}

.image-card:hover .title {
  color: #007bff;
}

hr {
  border: none;
  border-top: 2px solid #ccc;
  margin: 50px;
}

.sub-video p{
  text-align: center;
  font-weight: bolder;
}

.sub-video a{
  text-decoration: underline;
  color: rgb(93, 157, 246); /* 确保超链接文字颜色不会变成蓝色 */

}

.sub-video a:hover{
  text-decoration: underline;
  color: red; /* 确保超链接文字颜色不会变成蓝色 */

}
</style>
