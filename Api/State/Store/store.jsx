import { combineReducers, createStore } from "redux";

export const configreStore = () =>{
    const store = createStore(
        combineReducers({
            groupReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
