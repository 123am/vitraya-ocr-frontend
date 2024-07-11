import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader:false
}

export const commonSlice = createSlice({
    name:"common",
    initialState,
    reducers:{
        LOADER_START:(state,action)=>{
            state.loader=true
        },
        LOADER_STOP:(state,action)=>{
            state.loader=false
        }
    }
})


export const {LOADER_START,LOADER_STOP} = commonSlice.actions

export default commonSlice.reducer
