/**
 * action ：可以处理异步的方法
 */
export default {
    updateCountAsync (store, data){
        setTimeout(() => {
            store.commit('updateCount', {
                num : data.num++
            })
        }, data.time);
    }
}