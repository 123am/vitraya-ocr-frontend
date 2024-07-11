import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import authReducer from './reducers/auth-reducer';
import dataReducer from './reducers/data-reducer';
import commonReducer from './reducers/common-reducer';



export const store = configureStore({
    reducer: {
        auth:authReducer,
        data:dataReducer,
        common:commonReducer
    },
})
