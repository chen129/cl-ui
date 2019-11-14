import Vue from 'vue'
import App from './App.vue'
import CLUI from '../src/index'

import '../src/styles/index.less'

Vue.use(CLUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
