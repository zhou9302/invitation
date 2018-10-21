<template>
  <div class="mainPage">
    <img src="../assets/img/b/mainTitle.png" alt="" v-if="showMain">
    <img src="../assets/img/b/mainTitle_dark.png" alt="" v-else>
    <img src="../assets/img/b/o.png" alt="" class="o" v-if="showMain">
    <img src="../assets/img/b/r.png" alt="" class="r" v-if="showMain">
    <img src="../assets/img/b/a.png" alt="" class="a" v-if="showMain">
    <img src="../assets/img/b/star.png"  alt=""  v-if="starShow">
    <img src="../assets/img/b/star_dark.png"  alt="" v-else>
    <img src="../assets/img/b/fw.png" alt="" v-if="fwShow">
    <img src="../assets/img/b/fw_dark.png" alt="" v-else>
    <img src="../assets/img/b/logo.png" alt="" class="logo">
  </div>
</template>

<script>

export default {
    created(){
        setTimeout(()=>{
            this.showContent()
        },400)
        setTimeout(()=>{
            this.starShow=!this.starShow
        },350)
         setTimeout(()=>{
            this.fwShow=!this.fwShow
        },300)
    },
    data(){
        return{
            showMain:false,
            starShow:false,
            fwShow:false,
        }
    },
    methods:{
        showContent(){
            let p=setInterval(()=>{
                this.showMain=!this.showMain
            },200)
             setTimeout(()=>{
                clearTimeout(p)
                this.showMain=true
            },800)
        }
    }
}
</script>
<style scoped lang="scss">
    .mainPage{
        width:100%;
        height:100%;
        background: url('../assets/img/b/bg.png') no-repeat;
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
        }
        .o{
            animation-name: O_opcity;
            animation-duration:.1s;
            animation-fill-mode : forwards;
            animation-iteration-count:999;
            animation-delay: 1s;
            opacity: 1;
        }
        .r{
            animation-name: R_opcity;
            animation-duration:2s;
            animation-timing-function:linear;
            animation-iteration-count:999;
            animation-delay: .6s;
            opacity: 1;
        }
        .a{
            animation-name: O_opcity;
            animation-duration:.1s;
            animation-fill-mode : forwards;
            animation-iteration-count:999;
            animation-delay: 1.5s;
            opacity: 1;
        }
        .logo{
            animation-name: myopcity;
            animation-duration:5s;
            animation-timing-function:linear;
            animation-iteration-count:999;
            opacity: 0;
        }
        @keyframes R_opcity
        {
            0% { opacity: 0.3;}
            10% { opacity: 0.7;}
            20%{opacity: 0;}
            30%{opacity: 0.5;}
            40%{opacity: 0;}
            60%{opacity: 0;}
            70%{opacity: 0.5;}
            80%{opacity: 0;}
            100%{opacity: 0;}
        }
        @keyframes O_opcity
        {
            0%   {opacity: 0.3;}
            100% {opacity: 0.1;}
        }
    }
</style>
