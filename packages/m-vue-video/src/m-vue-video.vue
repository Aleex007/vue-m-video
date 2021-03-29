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
            :x5-video-player-fullscreen="fullscreen"
            :autoplay="autoplay"
            :loop="loop"
            controls
            @timeupdate="onDuration"
            @seeked.stop="onSeeked"
            @pause="onPause"
            @play="onPlay"
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
        }
    },
    data() {
        return {
            muteds: this.muted,
            seeked: false
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
    mounted() {
        this.$nextTick(() => {
            // this.$refs.video.currentTime = 100
        })
    },
    methods: {
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

    },
    watch: {
        currentTime(val) {
            this.$refs.video.currentTime = val
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