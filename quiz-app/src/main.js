import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('register-form', require('./components/RegisterForm.vue'));
Vue.component('result-view', require('./components/ResultView.vue'));

import StudentAPIService from '@/services/StudentService'

Vue.config.productionTip = false
Vue.prototype.$student_api = StudentAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
