import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store.js'

Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter();
const store = createStore();

//store动态加载模块
store.registerModule('c', {
  state : {
    text : "我是动态加载的模块  3 "
  }
})

//路由的守卫，这里的全局的钩子
router.beforeEach((to, from, next) => {
  console.log('Before each invoked')
  // console.log(to, from)
  next();
  //可以实现在跳转页面之前进行参数的校验
  // if(to.fullPath === "/app"){
  //   // next ('/login')
  //   next({path : '/login'});
  // }else{ //正常跳转
  //   next();
  // }

})

router.beforeResolve((to, from, next) => {
  console.log('Before resolve invoked')
  next();
})

router.afterEach((to, from) => {
  console.log('After Each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#root")