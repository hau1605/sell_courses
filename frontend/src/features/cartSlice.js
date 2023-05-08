import { createSlice } from "@reduxjs/toolkit";

let item = [];
let _viewedItem=[]
if (localStorage.getItem("cart") !== null)
  item = JSON.parse(localStorage.getItem("cart"));
  if (localStorage.getItem("viewedItem") !== null)
  _viewedItem= JSON.parse(localStorage.getItem("viewedItem"));
let price=0;
for (let i = 0; i < item.length; i++) {
    price+=item.cost*item[i].quantity;
}
const initialState = {
    cart: item,
    viewedItem:_viewedItem,
    totalQuantity: item.length,
    totalPrice: price,

};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.totalQuantity !== 0&&(state.cart.filter(item=>item._id===action.payload._id).length!==0))
                return;
            let check = false;
            if (state.totalQuantity === 0) {
                let cart = {
                    _id: action.payload._id,
                    name: action.payload.name,
                    poster: action.payload.poster,
                    cost: action.payload.cost,
                };
                state.cart.push(cart);
            } else {
                state.cart.map((item, key) => {
                    if (item._id === action.payload._id) {
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        _id: action.payload._id,
                        name: action.payload.name,
                        poster: action.payload.poster,
                        cost: action.payload.cost,
                    };
                    state.cart.push(_cart);
                }
            }
            
          localStorage.setItem("cart", JSON.stringify(state.cart));
                state.totalQuantity++;
        },
        getTotal:(state)=>{
            let _totalPrice=0
            for(let i=0;i<state.cart.length;i++)
                _totalPrice+=state.cart[i].cost;
            state.totalPrice=_totalPrice;
        },
    removeItem:(state,action)=>{
        state.totalQuantity--;
        state.totalPrice-=action.payload.price;
        state.cart=state.cart.filter(item=>item._id!==action.payload._id)
        localStorage.setItem("cart", JSON.stringify(state.cart));

    },
    viewedItem:(state,action)=>{
        state.viewedItem=state.viewedItem.filter(item=>item._id!==action.payload._id)    
        if (state.viewedItem.length>5)
        {    
            state.viewedItem.pop()
            
        }
        state.viewedItem.reverse().push(action.payload)
        state.viewedItem.reverse();
        localStorage.setItem("viewedItem", JSON.stringify(state.viewedItem));
    }
}
})
export const { addToCart,increaseQuantity,decreaseQuantity,getTotal,removeItem ,viewedItem} = cartSlice.actions;
export default cartSlice.reducer;