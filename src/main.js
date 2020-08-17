import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import cuCustom from './colorui/components/cu-custom.vue'

// Vue.use(Vant);
// Vue.use(Button)
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
