<template>
    <div class="ove-video">
        <video 
            class="vide-item"
            ref="video"
            :muted="muteds"
            playsinline
            webkit-playsinline="true"
            x5-playsinline
            x5-video-player-type="h5"
            x-webkit-airplay="allow"
            :x5-video-player-fullscreen="full"
            :autoplay="autoplay"
            :loop="loop"
            controls
            @timeupdate="onDuration"
            @seeked.stop="onSeeked"
            @pause="onPause"
            @play="onPlay"
            @webkitfullscreenchange="onFullscreenchange"
            @fullscreenchange="onFullscreenchange"
            @mozfullscreenchange="onFullscreenchange"
            @msfullscreenchange="onFullscreenchange"
            :width="width"
            :height="height">
            <source v-for="(item, index) in urlArry" :key="index" :src="item" :type="`video/${getUrlType(item)}`">
        </video>
    </div>
</template>

<script>
export default {
    name: 'm-vue-video',
    props: {
        muted: { // 是否静音
            type: Boolean,
            default: false
        },
        fullscreen: { // 是否全屏
            type: Boolean,
            default: false
        },
        url: { // 视频地址
            type: Array | String,
            default: ''
        },
        mediaType: { // 视频类型
            type: String,
            default: null
        },
        width: { // 播放器宽度
            type: String,
            default: '100%'
        },
        height: { // 播放器高度
            type: String,
            default: '100%'
        },
        autoplay: { // 自动播放
            type: Boolean,
            default: false
        },
        loop: { // 循环播放
            type: Boolean,
            default: false
        },
        currentTime: {
            type: Number,
            default: 0
        },
        palying: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            muteds: this.muted,
            seeked: false,
            full: this.fullscreen
        }
    },
    computed: {
        urlArry() {
            let _url = this.url || []
            if (typeof _url === 'string') _url = [_url]
            else if (Object.prototype.toString.call(_url) === '[object Object]') 
                console.warn(new Error('视频URL只接受String或者Array'));
            return _url
        }
    },
    methods: {
        onFullscreenchange(e) { // 监听全屏事件
            this.full = this.isFull();
            this.$emit("on-fullscreenchange", {fullscreen: this.full});
        },
        onPlay() {
            if (this.seeked)
                return;
            this.$emit("on-play")
        },
        onPause() { // 暂停事件
            if (this.seeked)
                return;
            this.$emit("on-pause")
        },
        onSeeked() {
            this.seeked = true
            this.$nextTick(() => {
                this.$emit("on-seeked", { currentTime: this.$refs.video.currentTime })
                setTimeout(() => {
                    this.seeked = false
                },300)
            })
        },
        onDuration(e) {
            this.$nextTick(() => {
                this.$emit("on-time-update", { currentTime: this.$refs.video.currentTime })
            })
            
        },
        getUrlType(url) { // 通过视频地址获取视频类型
            let type = this.mediaType || null
            if (type === null || type === '') {
                let u = url.split('?')[0] + '?v=1';
                return u.match(/[^\.]+(?=\?)/) || 'mp4';
            } else return type
            
        },
        requestExitFull() { // 退出全屏
            const em = document;
            const u = navigator.userAgent;
            if (u.indexOf('Trident') > -1) em.msExitFullscreen(); // IE
            else if (u.indexOf('AppleWebKit') > -1) em.webkitExitFullscreen(); // apple|谷歌
            else if (u.indexOf('Firefox') > -1) em.em.mozCancelFullScreen(); // 火狐
            else em.exitFullscreen();
        },
        requestFullscreen() { // 切换成全屏
            const em = this.$refs.video;
            const u = navigator.userAgent;
            if (u.indexOf('Trident') > -1) em.msRequestFullscreen(); // IE
            else if (u.indexOf('AppleWebKit') > -1) em.webkitRequestFullscreen(); // apple|谷歌
            else if (u.indexOf('Firefox') > -1) em.em.mozRequestFullScreen(); // 火狐
            else em.requestFullscreen();
        },
        isFull() { // 判断是否全屏
            const em = document
            let fullscreenElement = em.fullscreenElement || em.mozFullscreenElement || em.webkitFullscreenElement;
            // let fullscreenEnabled = em.fullscreenEnabled || em.mozFullscreenEnabled || em.webkitFullscreenEnabled;

            if (fullscreenElement == null) return false;
            else return true
        }
    },
    mounted() {
        if(this.fullscreen) {
            this.$nextTick(() => {
                this.requestFullscreen();
            })
        }
    },
    watch: {
        currentTime(val) {
            this.$refs.video.currentTime = val
        },
        palying(val) {
            this.$refs.video.paused = !val
        },
        full(val) {
            this.$emit("update:fullscreen", val)
        },
        fullscreen(val) {
            this.full = val
            if (this.full) this.requestFullscreen();
            else this.requestExitFull();
        }
    }
}
</script>

<style lang="scss" scoped>
.ove-video{
    .vide-item{
        position: absolute;
        z-index: 9;
        left: 0;
        top: 0;
        object-fit: cover;
        background-color: #000;
    }
    width: 100%;
    height: 100%;
}
</style>