import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import {userReducer} from './reducers/userReducer.js';

const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;