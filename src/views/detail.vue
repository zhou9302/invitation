<template>
  <div class="code">
   <img src="../assets/img/c/logo.png" alt="">
   <img src="../assets/img/c/time.png" alt="">
    <img src="../assets/img/c/address.png" alt="">
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
        background: url('../assets/img/c/bg.png') no-repeat;
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
            opacity: 1;
            animation-name:T_opcity;
            animation-duration:.5s;
            animation-delay: .5s;
            animation-iteration-count:1;
            &:nth-child(1){
                animation-name:myopcity;
                animation-duration:5s;
                animation-timing-function:linear;
                animation-iteration-count:999;
                opacity: 0;
            }
        }
    }
    @keyframes T_opcity
    {
        0%    {opacity: 1;}
        25%   {opacity: 0;}
        50%   {opacity: 1;}
        75%   {opacity: 0;}
        100%  {opacity: 1;}
    }
</style>
