<template>
    <div class="ove-video">
        <video 
            ref="video"
            :muted="muted"
            playsinline
            webkit-playsinline
            x5-playsinline
            x5-video-player-type="h5"
            x-webkit-airplay="allow"
            :x5-video-player-fullscreen="fullscreen"
            :autoplay="false"
            controls>
            <source v-for="(item, index) in urlArry" :key="index" :src="item" :type="`video/${getUrlType(item)}`">
        </video>
    </div>
</template>

<script>
export default {
    name: 'vue-m-video',
    props: {
        muted: { // 是否静音
            type: Boolean,
            default: false
        },
        fullscreen: { // 是否全屏
            type: Boolean,
            default: false
        },
        url: {
            type: Array | String,
            default: ''
        },
        mediaType: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            
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
        getUrlType(url) { // 通过视频地址获取视频类型
            let type = this.mediaType || null
            if (type === null || type === '') {
                let u = url.split('?')[0] + '?v=1';
                return u.match(/[^\.]+(?=\?)/) || 'mp4';
            } else return type
            
        }
    }
}
</script>

<style lang="scss" scoped>
.ove-video{
    width: 100%;
    height: 100%;
}
</style>