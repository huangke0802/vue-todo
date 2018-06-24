// import Todo from  '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
    {  //默认路由
        path : '/',
        redirect : '/app'
    },
    {
        path : '/app',
        // path : '/app/:id',  // app/xxx
        props : true,
        // props : {
        //     id : "4657"
        // },
        // props : (route) => { //http://localhost:8000/app/123?a=huangke&b=ssdfsd
        //     return {id : route.query.b}
        // },
        // component : Todo,
        //需要安装插件 npm i babel-plugin-syntax-dynamic-import -D
        //否则import会报错
        component :  () => import('../views/todo/todo.vue'),  //异步加载组件，当需要用到这个组件时才加载这个组件的代码，不一次加载所有，加快访问速度
        // components : {
        //     default : Todo,  // 默认没有名字的跳到Todo组件
        //     a : Login   //  name = a 的跳转到 Login组件
        // },
        name : 'app',
        meta : { //由于搜索引擎搜索
            title : "this is app",
            description : 'huangke'
        },
        beforeEnter: (to, from, next) => { //路由配置时的钩子
            console.log("app route before enter")
            next();
        }
        // children : [
        //     {
        //         path : 'test',
        //         component : Login
        //     }
        // ]
    },
    {
        path : '/login',
        component : () => import('../views/login/login.vue')
        // components : {
        //     default : Login,
        //     a : Todo
        // }
    }
]