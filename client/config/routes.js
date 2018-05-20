import Todo from  '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
    {  //默认路由
        path : '/',
        redirect : '/app'
    },
    {
        path : '/app',
        component : Todo
    },
    {
        path : '/login',
        component : Login
    }
]