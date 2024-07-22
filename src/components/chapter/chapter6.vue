<template>
<div class="img">
    <img :src="imgUrl"  width="100%">
</div>
</template>

<script>
    export default{
        data(){
            return{
                imgUrl:require("./")
            }
        }
    }
</script>