<template>
    <h3>第三次尝试</h3>

<p>已经出版的书</p>:
<span>{{ flag }}</span>

</template>

<script setup>
import {reactive,computed} from 'vue'
const author=reactive({
    name:"脚滑大仙",
    books:[
        'vue1-ss',
        'vue2-ss'
    ]
})

const flag=computed(()=>{
    return author.books.length>0?'Yes':'No'
}
)

</script>