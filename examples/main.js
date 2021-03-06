import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueMVideo from '../packages/index'

Vue.use(VueMVideo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
