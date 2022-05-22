import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css/animate.min.css'
import { SkillBar } from 'vue-skill-bar'
import VueLazyLoad from 'vue-lazyload'
import './assets/css/style.css'
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  confirmButtonColor: '#000',
};

Vue.component('skill-bar', SkillBar)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueLazyLoad)
Vue.use(VueSweetalert2,options);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
