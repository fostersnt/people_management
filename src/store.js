import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    //State variables go here
    state: {
        my_name: 'Foster Asante',
        my_age: 21
    },
    //Mutation methods go here
    mutations: {
        UPDATE_NAME(state, newName){
            state.my_name = newName;
        },
        UPDATE_AGE(state, newAge){
            state.my_age = newAge;
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