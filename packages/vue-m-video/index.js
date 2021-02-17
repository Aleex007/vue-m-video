import VueMVideo from './src/vue-m-video.vue'

// 为组件提供 install 安装方法，供按需引入
VueMVideo.install = function (Vue) {
    Vue.component(VueMVideo.name, VueMVideo)
}

// 导出组件
export default VueMVideo