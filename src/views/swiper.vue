<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiperPage">
      <!-- slides -->
      <!-- <loading v-if="loadingShow"></loading> -->
      <swiper-slide class="box"><invitation v-if="index===0"></invitation></swiper-slide>
      <swiper-slide class="box"><mainPage v-if="index===1"></mainPage></swiper-slide>
      <swiper-slide class="box"><detail v-if="index===2"></detail></swiper-slide>
      <swiper-slide class="box"><codePage v-if="index===3"></codePage></swiper-slide>
      <!-- Optional controls -->
    </swiper>
</template>

<script>
import loading from './loading'
import mainPage from './mainPage'
import invitation from './invitation'
import detail from './detail'
import codePage from './code'
export default {
  name: 'carrousel',
  components:{
    loading,invitation,mainPage,detail,codePage
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        direction:'vertical',
        loop: false,
        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        activeIndex:0,
        on:{
          slideChangeTransitionStart:()=>{
            this.index=this.swiper.activeIndex
          }
        }
      },
      index:0
    }
  },
  watch:{
    swiperOption:{
      handler(val){
        console.log(val)
      },
      deep:true
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
    .swiperPage{
      transform:translate3d(0,0,0);
      overflow:hidden;
    }
    .swiper-container{
        width:100%;
        height:100%;
    }
   .box{
        position: relative;
        width:100%;
        height:100%;
        background: #000;
        color:white;
        transform:translate3d(0,0,0)
   }
</style>
