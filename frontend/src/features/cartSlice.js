import { createSlice } from "@reduxjs/toolkit";

let item = [];
if (localStorage.getItem("cart") !== null)
  item = JSON.parse(localStorage.getItem("cart"));

let num = 0;
let price=0;
for (let i = 0; i < item.length; i++) {
    num += item[i].quantity;
    price+=item.cost*item[i].quantity;
}
const initialState = {
    cart: item,
    totalQuantity: num,
    totalPrice: price,

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
          localStorage.setItem("cart", JSON.stringify(state.cart));

        },
        getTotal:(state)=>{
            let _totalPrice=0
            for(let i=0;i<state.cart.length;i++)
                _totalPrice+=(state.cart[i].cost*state.cart[i].quantity);
            state.totalPrice=_totalPrice;
        },increaseQuantity: (state, action)=>{
            state.totalQuantity++;
            state.cart[action.payload].quantity++;
          localStorage.setItem("cart", JSON.stringify(state.cart));

        },
        decreaseQuantity: (state, action)=>{
        let quantity = state.cart[action.payload].quantity;
      if (quantity > 1) {
        state.totalQuantity--;
        state.cart[action.payload].quantity--;
        localStorage.setItem("cart", JSON.stringify(state.cart));

      }
    }  ,
    removeItem:(state,action)=>{
        state.cart=state.cart.filter(item=>item._id!==action.payload._id)
        localStorage.setItem("cart", JSON.stringify(state.cart));

    }
}
})
export const { addToCart,increaseQuantity,decreaseQuantity,getTotal,removeItem } = cartSlice.actions;
export default cartSlice.reducer;