import {createStore} from "vuex";

const store = createStore({
    state:{
        activeUser:[],
    },
    mutations:{
        setActiveUser(item){
            this.state.activeUser = item;
        },
    },
    getters:{
        _activeUser : state => state.activeUser,
    },
});

export default store;