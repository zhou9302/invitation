<template>
  <div class="invitationPage">
   <img src="../assets/img/a/topText.png" alt="" >
   <img src="../assets/img/a/centerText.png" alt="" >
   <img src="../assets/img/a/bottomText.png" alt="" >
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
    .invitationPage{
        width:100%;
        height:100%;
        background: url('../assets/img/a/bg.png') no-repeat;
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
            animation-name:myopcity2;
            animation-duration:.5s;
            animation-iteration-count:1;
            &:nth-child(1){
                animation-delay:.5s;
            }
            &:nth-child(2){
                animation-delay:1.5s;
            }
            &:nth-child(3){
                animation-name:myopcity;
                animation-duration:2s;
                animation-timing-function:linear;
                animation-iteration-count:999;
                animation-delay:.5s;
                animation-fill-mode : forwards;
            }
        }
    }
</style>
