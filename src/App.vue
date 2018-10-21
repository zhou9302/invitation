<template>
  <div id="app">
    <audio id="audio" :src="mp3" preload="auto" loop="loop" autoplay="autoplay"></audio>
    <transition name="fade" mode="out-in">
      <loading class="loading" v-if="loadingShow"></loading>
    </transition>
    <router-view v-if="!loadingShow"></router-view>
  </div>
</template>
<script>
import loading from 'views/loading.vue'
export default {
    components:{
      loading
    },
    data(){
      return{
        mp3:'http://sc1.111ttt.cn:8282/2015/1/12m/27/105271220492.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
        loadingShow:true
      }
    },
    mounted(){
    　　 var audio_success=document.querySelector("#audio");
        document.addEventListener("WeixinJSBridgeReady",function(){
          audio_success.play();
        },false);
        audio_success.onended = function () {
            music.load();
            music.play();
        }

        setTimeout(()=>{
          this.loadingShow=false
        },3000)
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: black;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.loading{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index: 10000;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
