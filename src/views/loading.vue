<template>
  <div class="loadingPage">
    <img src="../assets/img/loading/logo.png" alt="" >
    <div class="line">
    </div>
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
    .loadingPage{
        width:100%;
        height:100%;
        background: url('../assets/img/loading/bg.png') no-repeat;
        background-size: 100%;
        background-color: #000;
        color:white;
        position: relative;
        img{
            width: 100%;
            height:100%;
            animation-name:myopcity;
            animation-duration:5s;
            animation-timing-function:linear;
            animation-iteration-count:999;
            opacity: 0;
        }
        .line{
            width:0;
            height:8px;
            border-radius: 4px;
            background: linear-gradient(left bottom,rgb(255,215,19),white);
            position: fixed;
            z-index:1000;
            bottom:30%;
            left:20%;
            animation-name:mychange;
            animation-duration:3s;
            animation-timing-function:linear;
            animation-fill-mode : forwards;
        }  
    }
    @keyframes mychange {
        0% {width:0%}
        50% {width:20%}
        100% {width:60%}
    }
</style>
