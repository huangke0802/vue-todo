import Vuex from 'vuex'
import state from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'

export default () => {
    return new Vuex.Store({
        state,
        mutations,
        getters
    })
}