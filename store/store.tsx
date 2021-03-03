import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import rootReducers, { initialState } from './rootReducers';
import { loadCartLocalStorage } from "../components/ProductDetail/ProductDetailAction";

import {
    loadCartFromLocalStorage,
    saveCartToLocalStorage

} from "./persistState/persistState";

const persistStore = loadCartFromLocalStorage()

export const makeStore: MakeStore<initialState> = () => {
    const store = createStore(rootReducers, persistStore, applyMiddleware(thunkMiddleware));

    // Persistor state in local storage
    store.subscribe(() => {
        saveCartToLocalStorage(store.getState())
    });
    
    if(persistStore !== undefined){
        store.dispatch(loadCartLocalStorage(persistStore))
    }

    return store;
};


export const wrapper = createWrapper<initialState>(makeStore, { debug: false });