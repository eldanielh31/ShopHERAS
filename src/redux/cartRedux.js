import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity ++;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct:(state,action)=>{
            state.products.splice(action.payload, 1);
            state.quantity --;
        }
    }
});

export const {addProduct, deleteProduct} = cartSlice.actions
export default cartSlice.reducer;