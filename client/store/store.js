import Vuex from 'vuex'
import state from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === "development"

export default () => {
    const store = new Vuex.Store({
        strict : isDev,
        state,
        mutations,
        getters,
        actions,
        // modules : {  //store的分模块管理
        //     a : {
        //         namespaced : true,  //加入命名空间：设置模块下的的store的作用域，默认是放在全局的，这样就分模块，
        //         state : {
        //             text : 1
        //         },
        //         mutations : {
        //             updateText(state, text){
        //                 console.log('a.state', state);
        //                 state.text = text;
        //             }
        //         },
        //         getters : {
        //             textPlus (state, getters, rootState){
        //                 //拿b模块的方式：rootState.b.text
        //                 return state.text + rootState.count;
        //             }
        //         },
        //         actions : {
        //             add({ state, commit, rootState}){ //默认是在本模块中查找commit方法，a中，
        //                 // commit("updateText", rootState.count) //这个是掉当前模块的mutations方法，
        //                 /* 掉全局的mutations方法需要传入一参数  {root : true}*/
        //                 commit("updateCount", {num : 999999}, {root : true})
        //             }
        //         }
        //     },
        //     b: {
        //         namespaced : true,
        //         state : {
        //             text : 2
        //         },
        //         actions : {
        //             textAction ({ commit }) {
        //                 commit('a/updateText', 'text text 9999', {root : true})  //模块间调用
        //             }
        //         }
        //     }
        // }
    });

    //添加热更替功能，不需要每次刷新页面

    if(module.hot) {
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './actions/actions',
            './getters/getters'
        ], () => {
            const newState = require('./state/state').default
            const newMutations = require('./mutations/mutations').default
            const newActions = require('./actions/actions').default
            const newGetters = require('./getters/getters').default

            store.hotUpdate({
                state : newState,
                mutations : newMutations,
                getters : newGetters,
                actions : newActions
            })

        })
    }

    return store;
}