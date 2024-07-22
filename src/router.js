import { createRouter, createWebHashHistory } from "vue-router"
import welcome from "./components/welcome.vue"
import menu1 from "./components/menu/menu1.vue"
import menu2 from "./components/menu/menu2.vue"
import menu3 from "./components/menu/menu3.vue"
import menu4 from "./components/menu/menu4.vue"
import page1 from "./components/page.vue"
import w_1 from "./components/w_1.vue"
import w_2 from "./components/w_2.vue"
import w_3 from "./components/w_3.vue"
import m1_1 from "./components/fbyy/1.vue"
import m1_2 from "./components/fbyy/2.vue"
import m1_3 from "./components/fbyy/3.vue"
import m1_4 from "./components/fbyy/4.vue"
import m1_5 from "./components/fbyy/5.vue"
import m2_1 from "./components/shxg/1.vue"
import m2_2 from "./components/shxg/2.vue"
import m2_3 from "./components/shxg/3.vue"
import m2_4 from "./components/shxg/4.vue"
import m2_5 from "./components/shxg/5.vue"
import m2_6 from "./components/shxg/6.vue"
import m3_1 from "./components/medicine/1.vue"
import m3_2 from "./components/medicine/2.vue"
import m3_3 from "./components/medicine/3.vue"
import m3_4 from "./components/medicine/4.vue"
import m3_5 from "./components/medicine/5.vue"
import m4_1 from "./components/operation/1.vue"
import m4_2 from "./components/operation/2.vue"
import m4_3 from "./components/operation/3.vue"
import m4_4 from "./components/operation/4.vue"
import m5_1 from "./components/environment/1.vue"
import m5_2 from "./components/environment/2.vue"
import m5_3 from "./components/environment/3.vue"
import m5_4 from "./components/environment/4.vue"
import m5_5 from "./components/environment/5.vue"
import m6_1 from "./components/reference/1.vue"
import m6_2 from "./components/reference/2.vue"
import m6_3 from "./components/reference/3.vue"
import m6_4 from "./components/reference/4.vue"
import m7_1 from "./components/books/1.vue"
import m7_2 from "./components/books/2.vue"
import m7_3 from "./components/books/3.vue"
import m7_4 from "./components/books/4.vue"
import m7_5 from "./components/books/5.vue"
import m7_6 from "./components/books/6.vue"
import m7_7 from "./components/books/7.vue"
import m8_1 from "./components/research/1.vue"
import m8_2 from "./components/research/2.vue"
import m8_3 from "./components/research/3.vue"
import m8_4 from "./components/research/4.vue"
import m8_5 from "./components/research/5.vue"

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            name:'欢迎面',
            component:welcome
        },
        {
            path:"/m1_1",
            name:'文章1',
            component:m1_1
        },
        {
            path:"/m1_2",
            name:'文章2',
            component:m1_2
        },
        {
            path:"/m1_3",
            name:'文章3',
            component:m1_3
        },
        {
            path:"/m1_4",
            name:'文章4',
            component:m1_4
        },
        {
            path:"/m1_5",
            name:'文章5',
            component:m1_5
        },
        {
            path:"/m2_1",
            name:'文章6',
            component:m2_1
        },
        {
            path:"/m2_2",
            name:'文章7',
            component:m2_2
        },
        {
            path:"/m2_3",
            name:'文章8',
            component:m2_3
        },
        {
            path:"/m2_4",
            name:'文章9',
            component:m2_4
        },
        {
            path:"/m2_5",
            name:'文章10',
            component:m2_5
        },
        {
            path:"/m2_6",
            name:'文章11',
            component:m2_6
        },
        {
            path:"/m3_1",
            name:'文章12',
            component:m3_1
        },
        {
            path:"/m3_2",
            name:'文章13',
            component:m3_2
        },
        {
            path:"/m3_3",
            name:'文章14',
            component:m3_3
        },
        {
            path:"/m3_4",
            name:'文章15',
            component:m3_4
        },
        {
            path:"/m3_5",
            name:'文章16',
            component:m3_5
        },
        {
            path:"/m4_1",
            name:'文章17',
            component:m4_1
        },
        {
            path:"/m4_2",
            name:'文章18',
            component:m4_2
        },
        {
            path:"/m4_3",
            name:'文章19',
            component:m4_3
        },
        {
            path:"/m4_4",
            name:'文章20',
            component:m4_4
        },
        {
            path:"/m5_1",
            name:'文章21',
            component:m5_1
        },
        {
            path:"/m5_2",
            name:'文章22',
            component:m5_2
        },
        {
            path:"/m5_3",
            name:'文章23',
            component:m5_3
        },
        {
            path:"/m5_4",
            name:'文章24',
            component:m5_4
        },
        {
            path:"/m5_5",
            name:'文章25',
            component:m5_5
        },
        {
            path:"/m6_1",
            name:'文章26',
            component:m6_1
        },
        {
            path:"/m6_2",
            name:'文章27',
            component:m6_2
        },
        {
            path:"/m6_3",
            name:'文章28',
            component:m6_3
        },
        {
            path:"/m6_4",
            name:'文章29',
            component:m6_4
        },
        {
            path:"/m7_1",
            name:'文章30',
            component:m7_1
        },
        {
            path:"/m7_2",
            name:'文章31',
            component:m7_2
        },
        {
            path:"/m7_3",
            name:'文章32',
            component:m7_3
        },
        {
            path:"/m7_4",
            name:'文章33',
            component:m7_4
        },
        {
            path:"/m7_5",
            name:'文章34',
            component:m7_5
        },
        {
            path:"/m7_6",
            name:'文章35',
            component:m7_6
        },
        {
            path:"/m7_7",
            name:'文章36',
            component:m7_7
        },
        {
            path:"/m8_1",
            name:'文章37',
            component:m8_1
        },
        {
            path:"/m8_2",
            name:'文章38',
            component:m8_2
        },
        {
            path:"/m8_3",
            name:'文章39',
            component:m8_3
        },
        {
            path:"/m8_4",
            name:'文章40',
            component:m8_4
        },
        {
            path:"/m8_5",
            name:'文章41',
            component:m8_5
        },
        {
            path:"/menu1",
            name:'菜单1',
            component:menu1
        },
        {
            path:"/menu2",
            name:'菜单2',
            component:menu2
        },
        {
            path:"/menu3",
            name:'菜单3',
            component:menu3
        },
        {
            path:"/menu4",
            name:'菜单4',
            component:menu4
        },
        {
            path:"/welcome1",
            name:'欢迎面文章1',
            component:page1
        },
        {
            path:"/welcome2",
            name:'欢迎面文章2',
            component:w_1
        },
        {
            path:"/welcome3",
            name:'欢迎面文章3',
            component:w_2
        },
        {
            path:"/welcome4",
            name:'欢迎面文章4',
            component:w_3
        },
    ]
});

export default router;