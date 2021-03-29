<template>
  <div class="home">
    <m-vue-video :height="`40%`" 
        :currentTime="currentTime" 
        @on-seeked="onSeeking" 
        :muted="muted" 
        :autoplay="true" 
        :loop="true"
        @on-pause="onPause" 
        @on-play="onPlay"
        :url="`https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4`"
        mediaType="mp4"></m-vue-video>
  </div>
</template>

<script>
import MVueVideo from '../../packages/m-vue-video/src/m-vue-video.vue'
export default {
  name: 'Home',
  data() {
      return {
          muted: true,
          currentTime: 0
      }
  },
  components: {
    MVueVideo
  },
  created() {
      setTimeout(() => {
          this.muted = false
      },100)
  },
  methods: {
      onPlay() {
          console.log("play")
      },
      onPause() {
          console.log("pause")
      },
      onSeeking(e) {
          console.log(e)
      }
  },
  mounted() {
      setTimeout(() => {
          this.currentTime = 100
      }, 1000)
  }
}
</script>

<style scoped>
.abs-box{
    width: 100px;
    height: 100px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
}
.home{
    width: 100%;
    height: 100%;
    position: relative;
    background: #000;
}
</style>
