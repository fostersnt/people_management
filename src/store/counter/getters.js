const counterGetters = {
    getCounter(state){
        return state.counter;
    },
    normalizeCounter(state, my_getter){
        // my_getter represents the entire 'getters' object
        // so it can access all of its properties
        if (my_getter.getCounter >= 30) {
            return 30
        }
        else{
            return my_getter.getCounter
        }
    }
}

export default counterGetters