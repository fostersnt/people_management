// import { createApp } from 'vue';
import { createStore } from 'vuex';


const store = createStore({
    state: {
        my_name: 'Foster Asante',
        my_age: 21
    },
    mutations: {
        UPDATE_NAME(state, newName){
            state.my_name = newName;
        },
        UPDATE_AGE(state, newAge){
            state.my_age = newAge;
        }
    },
    actions: {},
    getters: {}
});


export default store
// app.mount('#app'); // Replace '#app' with your app's mounting element
