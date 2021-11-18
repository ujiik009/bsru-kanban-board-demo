import Vue from 'vue'
import App from './App.vue'

// 1. import bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// 5. import vue-router
import VueRouter from 'vue-router'
// 2. Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import LoginPage component
import LoginPage from "@/components/LoginPage/index.vue"

Vue.config.productionTip = false

// defind you route
const routes = [
  { path: '/', component: LoginPage },
]

// router object
const router = new VueRouter({
  routes // short for `routes: routes`
})


// 3. Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// 4.Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// 6. Make vue-router available
Vue.use(VueRouter)

new Vue({
  // register router to vue instant
  router,
  render: h => h(App),
}).$mount('#app')