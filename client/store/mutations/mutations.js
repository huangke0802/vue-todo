/**
 * mutations 里面必须时同步的方法
 */

export default {
    updateCount(state, {num , num2}) {  //只能传两个参数，传多个值时，第二个参数用对象的方式传入
        state.count = num
        console.log(num2)
    }
}