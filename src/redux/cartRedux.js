import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.quantity++;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct: (state, action) => {
            let product = state.products[action.payload]
            state.products.splice(action.payload, 1);
            state.quantity--;
            state.total -= product.price * product.quantity
        },
        clearCart: () => initialState,

        addQuantityProduct: (state, action) => {
            state.products[action.payload].quantity++;
            state.total += state.products[action.payload].price;
        },

        deleteQuantityProduct: (state, action) => {
            if (state.products[action.payload].quantity > 1) {
                state.products[action.payload].quantity--;
                state.total -= state.products[action.payload].price;
            }

        }
    }
});

export const { addProduct, deleteProduct, clearCart, addQuantityProduct, deleteQuantityProduct } = cartSlice.actions
export default cartSlice.reducer;