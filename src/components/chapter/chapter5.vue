<template>
<h3>第五次尝试</h3>
<a @click="click_event" href="https://www.bilibili.com/video/BV1hs421G7ex/?spm_id_from=333.788.top_right_bar_window_history.content.click">快来溜冰！</a>
<p @click="get_names(item,$event)" v-for="(item,index) of names" :key="index" >{{ item }}</p>
</template>

<script>
    export default{
        data(){
            return{
            names:["owen","jack","xwx"]
        }},
        methods:{
            get_names(name,e){
                console.log(name)
                console.log(e);
            },
            click_event(e){
                e.preventDefault()
                console.log("click time!")
            }
        }
    }
</script>