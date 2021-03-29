<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [`vue-m-video`](#vue-m-video)
  - [`基于vue的移动端视频播放器`](#%E5%9F%BA%E4%BA%8Evue%E5%9F%BA%E4%BA%8Evue%E7%9A%84%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8)
  - [安装](#%E5%AE%89%E8%A3%85)
  - [引入使用](#%E5%BC%95%E5%85%A5%E4%BD%BF%E7%94%A8)
  - [属性](#%E5%B1%9E%E6%80%A7)
  - [事件](#%E4%BA%8B%E4%BB%B6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `vue-m-video`
## `基于vue的移动端视频播放器`
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
## 属性
|名称|类型|可选值|默认值|说明|版本差异
|----|----|----|----|-----|-----|
|muted|boolean|false/true|false|是否静音播放|
|fullscreen|boolean|false/true|false|是否全屏|
|url|string|-|-|视频地址|
|mediaType|string|mp4等|-|视频类型(不填时会根据视频地址自动判断/.MOV类型视频请传mp4)|
|width|string|像素值|100%|播放器宽度|
|height|string|像素值|100%|播放器高度|
|autoplay|boolean|false/true|false|自动播放|@V3.0.0+|
|loop|boolean|false/true|false|循环播放|@V3.0.0+|
|currentTime|Number|Number|0|指定视频播放进度|@V3.1.0+|

## 事件
|事件名称|说明|回调参数|版本差异
|----|----|----|----|
|on-seeked|拖动进度条结束时间|{currentTime: 1.001}|@V3.1.0+|
|on-time-update|监听进度条改变事件|{currentTime: 1.001}|@V3.1.0+|
|on-play|播放事件|-|@V3.2.0+|
|on-pause|暂停事件|-|@V3.2.0+|

