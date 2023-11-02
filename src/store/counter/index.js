import counterMutations from './mutations';
import counterGetters from './getters';

const counterModule = {
    namespaced: true,
    state(){
        return {
            counter: 0
        }
    },
    mutations: counterMutations,
    getters: counterGetters,
}

export default counterModule