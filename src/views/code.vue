<template>
  <div class="code">
   <img src="../assets/img/d/code.png" alt="">
   <img src="../assets/img/d/text.png" alt="">
  </div>
</template>

<script>

export default {
    created(){
       
    },
    data(){
        return{
            
        }
    }
}
</script>
<style scoped lang="scss">
    .code{
        width:100%;
        height:100%;
        background: url('../assets/img/d/bg.png') no-repeat;
        background-size: 100%;
        background-color: #000;
        color:white;
        position: relative;
        img{
            top:0;
            left:0;
            right:0;
            bottom:0;
            position: absolute;
            width:100%;
            height:100%;
            &:nth-child(2){
                animation-name:myenter;
                animation-duration:2s;
                animation-timing-function:linear;
                animation-iteration-count:1;
                animation-fill-mode : forwards;
            }
        }
    }
</style>
