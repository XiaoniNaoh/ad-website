
<template>
    <h3>第一次尝试</h3>
     <p>{{ msg }}</p>
     <button :disabled="flag">确认</button>
    </template>
    
    <script >
        export default{
          data(){
            return{
              msg:"不是哥们",
              flag:false
            }
          }
        }
    </script>
    