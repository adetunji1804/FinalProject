import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
//import BootstrapVue from 'bootstrap-vue'
import StudentAPIService from '@/services/StudentService'
//Vue.use(Bootstrap)

//import 'bootstrap/dist/bootstrap.css'
//import 'bootstrap-vue/dist/bootsrap-vue.css'

//Vue.config.productionTip = false
Vue.prototype.$student_api = StudentAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
