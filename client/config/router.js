import Router from 'vue-router'

import routes from './routes'


export default () => {
    return new Router({
        routes,
        mode : 'history', //去掉路由的哈希  #
        // base : '/huangke/', //在我们跳转路由前加一段名字
        linkActiveClass: "link-active",  //设置连接class名称  部分匹配路径
        linkExactActiveClass : "exact-active",//设置连接class名称   完成匹配路径
        scrollBehavior (to, from, savedPosition){  //路由跳转时滚动条位置
            if(savedPosition){
                return savedPosition
            }else {
                return {
                    x : 0,
                    y : 0
                }
            }
        },
        fallback : true   //单页应用
      /*   parseQuery () { //连接地址的参数将字符串转成obj

        },
        stringifyQuery () {//连接地址的参数将obj转成字符串

        } */
    }) 
}