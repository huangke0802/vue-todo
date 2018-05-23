import Vuex from 'vuex'
import state from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === "development"

export default () => {
    return new Vuex.Store({
        strict : isDev,
        state,
        mutations,
        getters,
        actions
    })
}