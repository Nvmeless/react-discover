// import redux

const ADD_MY_TYPE_ACTION  ='ADD_MY_TYPE_ACTION';
const id = 1;
const MyReducer = (state,action) => {
    // state > Etat actuel
    // action >  type, payload

    switch (action.type) {
        case ADD_MY_TYPE_ACTION:
            return [...state, {id: ++id, isDone:false, ...action.payload}]
            break;
    
        default:
            return state;
            break;
    }
}

const state = MyReducer(undefined, {});
const newState = MyReducer(state, {type: ADD_MY_TYPE_ACTION, payload:{
    title: "Nouvelle Action"
}})

console.log(state, newState);
const reducer =MyReducer(state, {type: ADD_MY_TYPE_ACTION, payload:{
    title: "Nouvelle Action"
}})


const store = createStore(MyReducer, middlewares);



store.subcribe(() => {
    console.log(store.getState())
})


store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})
store.dispatch({type: ADD_MY_TYPE_ACTION, payload:{title: "Nouvelle Action"}})