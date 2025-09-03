import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //we are just mutating the state here 
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items = state.items.filter(
              (item, index) => index !== action.payload
            );
        },
        clearCart: (state) => {
            state.items=[];
        }
    },
    // name: "splice",
    // initialState: {
    //     items:[]
    // },
    // reducers: {
    //     addItem: (state, action) => {
    //         state.items.push(action.payload);
    //     },
    //     removeItem: (state) => {
    //         state.items.pop();
    //     },
    //     clearCart: (state) => {
    //         state.items.lenght = 0;
    //     }
    // }
});

export const {addItem,removeItem,clearCart } = cartSlice.actions;

export default cartSlice.reducer;