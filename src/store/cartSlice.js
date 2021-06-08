import { createSlice } from '@reduxjs/toolkit';

//custom imports
import constants from '../utils/constants';
import { productMapper } from '../utils/helperFunctions';

const initialCartState = {
  cart: [],
  totalQuantity: 0,
  totalCartPrice: 0,
};

const cartSlice = createSlice({
  name: constants.cartSliceName,
  initialState: initialCartState,
  reducers: {
    //adding item to cart
    addToCart(state, action) {
      //checking if the item is present in the cart
      const cartItem = productMapper(state.cart, action.payload.id);
      //updating the existing cart item
      if (cartItem) {
        cartItem.quantity += action.payload.quantity;
        cartItem.totalPrice += action.payload.totalPrice;
        state.totalCartPrice += action.payload.totalPrice;
      } else {
        state.cart.push(action.payload);
        state.totalQuantity++;
        state.totalCartPrice += action.payload.totalPrice;
      }
    },
    removeFromCart(state, action) {
      const cartItem = productMapper(state.cart, action.payload);
      state.totalQuantity--;
      state.totalCartPrice -= cartItem.totalPrice;
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    itemIncrease(state, action) {
      const cartItem = productMapper(state.cart, action.payload);
      if (cartItem) {
        cartItem.quantity++;
        cartItem.totalPrice += cartItem.price;
        state.totalCartPrice += cartItem.price;
      }
    },
    itemDecrease(state, action) {
      const cartItem = productMapper(state.cart, action.payload);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
        cartItem.totalPrice -= cartItem.price;
        state.totalCartPrice -= cartItem.price;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
