<template>
    <div class="article-container">
      <h1 class="title">西格列汀对阿尔茨海默症大鼠的学习和记忆功能的影响</h1>
      <div class="font-size-controls">
        调整字体大小：
        <button @click="decreaseFontSize">-</button>
        <button @click="increaseFontSize">+</button>
      </div>
      <div class="content" :style="{ fontSize: fontSize + 'px' }">
        <p>摘要：将雄性大鼠随机分为假手术组(Control组)、假手术+西格列汀组(Control+SGLT组)、阿尔茨海默症模型组(Alzheimer’s disease,AD)(AD组)和AD+西格列汀组(AD+SGLT组).采用海马齿状回微量注射Aβ25-35制备AD大鼠模型,并经Morris水迷宫实验观察大鼠的学习和记忆功能,再利用蛋白免疫印迹法检测大鼠海马组织和HT22神经元细胞凋亡相关信号蛋白的表达水平.结果显示,定位航行实验中,AD组逃避潜伏期明显长于Control组,AD+SGLT组逃避潜伏期与AD组相比明显缩短;空间探索实验中,AD+SGLT组的穿台次数和目标象限停留时间百分比与AD组相比均显著增加.Western blot实验结果显示,与Control组相比,AD组Caspase-8、Caspase-3和Bax表达水平明显增强,而西格列汀显著降低AD组Caspase-8、Caspase-3和Bax表达水平,同时,显著增加Bcl-2表达水平.说明西格列汀具有抑制DPP4调控细胞凋亡通路的作用,能改善AD模型大鼠的学习和记忆功能.</p>
    <p><a href="https://libres.csu.edu.cn/https/vpn/11/NNYHGLUDN3WXTLUPMW4A/kcms2/article/abstract?v=VKFFl0Cm57Zo8TbH5HcuNQy_9XWmkU8inK9N_Ftt_-rZyVbERDXKDGeBRKUJ2H7-SwLneNHr5Cw6vJ6WmLampOn1_kBrGGJCBOxnsxJNM8KkscFJ4GU5zNCkcoxwgBd9YUX3aWg4Z-1dcxs0efmpTzkM0niABqFLNnFgPh9ROPQ=&uniplatform=NZKPT&language=CHS">
    •	[1] Sitagliptin protects the cognition function of the Alzheimer’s disease mice through activating glucagon-like peptide-1 and BDNF-TrkB signalings[J]. Qing Dong;;Shuai-Wen Teng;;Yue Wang;;Feng Qin;;Yue Li;;Lu-Lu Ai;;Hui Yu.Neuroscience Letters,2018</a> 
</p><p><a href="https://libres.csu.edu.cn/https/vpn/11/NNYHGLUDN3WXTLUPMW4A/kcms2/article/abstract?v=VKFFl0Cm57aFThuhuTPHcjWdaj_rdEYt9ls1K4h7E7-lW6uJLATnM8LjJ84MxBpVETenXM2xdnTMjKnVQFlv66wKQJ2IGfCstmezM0e_NSpr_VQVkjYe6mlD_aY6mtPbYjgQFnO1d2yv7b-BiPE1Yw==&uniplatform=NZKPT&language=CHS">
    •	[2] Sitagliptin attenuates transient cerebral ischemia/reperfusion injury in diabetic rats: Implication of the oxidative–inflammatory–apoptotic pathway[J]. Ayman E. El-Sahar;;Marwa M. Safar;;Hala F. Zaki;;Amina S. Attia;;Afaf A. Ain-Shoka.Life Sciences,2015</a>
</p><p><a href="https://libres.csu.edu.cn/https/vpn/11/NNYHGLUDN3WXTLUPMW4A/kcms2/article/abstract?v=VKFFl0Cm57ajjxlyxLY2bdo9ltGjM2I025OJVL7cIqDE2J07dGI_dDsHqSMqY_e1Ah9xHAEBRaO8lEgoZNj4_nl6TXbU0vp3OWQ9r6oSpigDDr8vKjUR6sYHo4VFzELwnGt_6fUnrmuiq6qQGvBP3w==&uniplatform=NZKPT&language=CHS">
    •	[3] Saxagliptin: A dipeptidyl peptidase-4 inhibitor ameliorates streptozotocin induced Alzheimer's disease[J]. Jayasankar Kosaraju;;Chaitanya Chakravarthi Gali;;Rizwan Basha Khatwal;;Anil Dubala;;Santhivardhan Chinni;;R.M. Damian Holsinger;;V. Subba Rao Madhunapantula;;Satish Kumar Muthureddy Nataraj;;Duraiswamy Basavan.Neuropharmacology,2013</a>
</p>  </div>
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

  a {
  color: inherit; /* 继承父元素的颜色 */
  text-decoration: none; /* 去掉下划线 */
  font-size: 20px;
  font-weight: 100;
  font-family: 'Times New Roman', Times, serif;
}

a:hover {
  text-decoration: underline; /* 悬停时显示下划线 */
}
  </style>
  