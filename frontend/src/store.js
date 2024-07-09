import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer.js';

export default configureStore({
    reducer: {
        user: userReducer
    },
})