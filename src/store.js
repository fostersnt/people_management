import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    //State variables go here
    state: {
        name: 'Foster Asante',
        age: 21
    },
    //Mutation methods go here
    mutations: {
        UPDATE_NAME(state, newName){
            state.name = newName;
        },
        UPDATE_AGE(state, newAge){
            state.age = newAge;
        }
    },
    //Actions go here
    actions: {

    },
    //Getters also go here
    getters: {

    }
});

export default store;