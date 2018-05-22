import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter();

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
  render: (h) => h(App)
}).$mount("#root")