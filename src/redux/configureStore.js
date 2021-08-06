import {CreateStore} from 'redux';
import { Reducer, initialState } from './reducer';

export const ConifigureStore = () => {
    const store = createStore(

        Reducer,
        initialState
    );
    return store;
}