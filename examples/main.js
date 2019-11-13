import Vue from 'vue'
import App from './App.vue'
import clUi from '../src/index'

Vue.use(clUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
