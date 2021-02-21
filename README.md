# `vue-m-video`
## `基于vue基于vue的移动端视频播放器`
## 安装
```
 npm i m-vue-video --save
```
## 引入使用
```
// 在main.js引入
import MVueVideo from 'm-vue-video'
Vue.use(MVueVideo)
// 页面中
<m-vue-video :height="`40%`" :url="url" mediaType="mp4"></m-vue-video>
```
## 参数
|名称|类型|可选值|默认值|说明|
|----|----|----|----|-----|
|muted|boolean|false/true|false|是否静音播放|
|fullscreen|boolean|false/true|false|是否全屏|
|url|string|-|-|视频地址|
|mediaType|string|mp4等|-|视频类型(不填时会根据视频地址自动判断/.MOV类型视频请传mp4)|
|width|string|像素值|100%|播放器宽度|
|height|string|像素值|100%|播放器高度|


