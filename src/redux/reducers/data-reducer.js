import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cms_dashboard:[],
    cms_history:[],
    cart_dashboard:{},
    checkout_dashboard:[],
    
}

export const dataSlice = createSlice({
    name:"dataSlice",
    initialState,
    reducers:{
        CMS_DASHBOARD:(state,action)=>{
            state.cms_dashboard=action.payload
        },
        CHECKOUT_DASHBOARD:(state,action)=>{
            state.checkout_dashboard=action.payload
        },
        
        CART_DASHBOARD:(state,action)=>{
            state.cart_dashboard=action.payload
        },
        CMS_HISTORY:(state,action)=>{
            state.cms_history=action.payload
        },
    }
})


export const {CMS_DASHBOARD,CHECKOUT_DASHBOARD,CMS_HISTORY,CART_DASHBOARD} = dataSlice.actions

export default dataSlice.reducer
