import Vue from 'vue'

import App from './App.vue'
// import store from './store'
// import './registerServiceWorker'

Vue.config.productionTip = false

const vue = new Vue({
  // store,
  render: h => h(App)
}).$mount('#app')

window.vm = vue
