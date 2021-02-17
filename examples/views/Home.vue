<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <vue-m-video :url="`https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4`"></vue-m-video>
  </div>
</template>

<script>
import VueMVideo from '../../packages/vue-m-video/src/vue-m-video.vue'
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    VueMVideo
  }
}
</script>
