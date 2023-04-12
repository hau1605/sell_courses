import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0

};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let check = false;
            if (state.totalQuantity === 0) {
                let cart = {
                    _id: action.payload._id,
                    quantity: 1,
                    name: action.payload.name,
                    poster: action.payload.poster,
                    cost: action.payload.cost,
                };
                state.cart.push(cart);
            } else {
                state.cart.map((item, key) => {
                    if (item._id === action.payload._id) {
                        state.cart[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        _id: action.payload._id,
                        quantity: 1,
                        name: action.payload.name,
                        poster: action.payload.poster,
                        cost: action.payload.cost,
                    };
                    state.cart.push(_cart);
                }
            }
            state.totalQuantity++;
        },
        getTotal:(state)=>{
            let _totalPrice=0
            for(let i=0;i<state.cart.length;i++)
                _totalPrice+=(state.cart[i].cost*state.cart[i].quantity);
            state.totalPrice=_totalPrice;
        },increaseQuantity: (state, action)=>{
            state.totalQuantity++;
            state.cart[action.payload].quantity++;
        },
        decreaseQuantity: (state, action)=>{
        let quantity = state.cart[action.payload].quantity;
      if (quantity > 1) {
        state.totalQuantity--;
        state.cart[action.payload].quantity--;
      }
    }  ,
    removeItem:(state,action)=>{
        state.cart=state.cart.filter(item=>item._id!==action.payload._id)
    }
}
})
export const { addToCart,increaseQuantity,decreaseQuantity,getTotal,removeItem } = cartSlice.actions;
export default cartSlice.reducer;