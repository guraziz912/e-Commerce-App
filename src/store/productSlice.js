import { createSlice } from '@reduxjs/toolkit';

//custom imports
import {
  productMapper,
  productFilter,
  checkIfPresent,
  checkIfTrue,
  productFilterFromArray,
} from '../utils/helperFunctions';

import constants from '../utils/constants';

const initialProductState = {
  productData: [
    {
      id: 'm1',
      brand: 'Zara',
      name: 'Slim Fit Cotton Shirt',
      price: 455,
      colour: 'Blue',
      category: 'mens',
      quantity: 0,
      description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
      image: 'http://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg',
      size: null,
      totalPrice: 0,
      sizeAvailable: ['small', 'medium', 'large'],
    },
    {
      id: 'm2',
      brand: 'Nike',
      name: ' Cotton Polo Shirt',
      price: 899,
      colour: 'white',
      quantity: 0,
      description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
      image: 'http://themes.pixelstrap.com/multikart/assets/images/pro3/33.jpg',
      category: 'mens',
      size: null,
      totalPrice: 0,
    },
    {
      id: 'm3',
      brand: 'Zara',
      name: ' Fit  Shirt',
      price: 699,
      colour: 'Maroon',
      quantity: 0,
      description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
      image: 'http://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg',
      category: 'mens',
      size: null,
      totalPrice: 0,
    },
    {
      id: 'm4',
      brand: 'Nike',
      name: `Men Short Sleeve T-Shirt`,
      price: 455,
      colour: 'Blue',
      quantity: 0,
      description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
      image: 'http://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg',
      category: 'mens',
      size: null,
      totalPrice: 0,
    },
    {
      id: 'm5',
      brand: 'Adidas',
      name: `Adidas Men's Regular T-Shirt`,
      price: 750,
      colour: 'Black',
      quantity: 0,
      description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
      image: 'https://m.media-amazon.com/images/I/31+UkA6owzL.jpg',
      category: 'mens',
      size: null,
      totalPrice: 0,
    },

    {
      id: 'w1',
      brand: 'Zara',
      name: 'Slim Fit Cotton Shirt',
      price: 455,
      colour: 'Blue',
      sizes: ['small', 'medium'],
      quantity: 0,
      description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
      image: 'http://themes.pixelstrap.com/multikart/assets/images/pro3/2.jpg',
      category: 'womens',
      totalPrice: 0,
    },
    {
      id: 'w2',
      brand: 'Nike',
      name: ` Women's Cotton Polo Shirt`,
      price: 899,
      colour: 'white',
      quantity: 0,
      description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
      image: 'http://themes.pixelstrap.com/multikart/assets/images/pro3/1.jpg',
      category: 'womens',
      totalPrice: 0,
    },
    {
      id: 'w3',
      brand: 'Zara',
      name: ' Women Pink SHIRT',
      price: 699,
      colour: 'Pink',
      quantity: 0,
      description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
      image: 'https://m.media-amazon.com/images/I/61hbqL0V5JL._AC_UL320_.jpg',
      category: 'womens',
      totalPrice: 0,
    },
    {
      id: 'w4',
      brand: 'Nike',
      name: `Women's Short Sleeve T-Shirt`,
      price: 455,
      colour: 'Blue',
      quantity: 0,
      description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
      image: 'https://m.media-amazon.com/images/I/81PBvVoAUyL._AC_UL320_.jpg',
      category: 'womens',
      totalPrice: 0,
    },
    {
      id: 'w5',
      brand: 'Adidas',
      name: `Adidas Women's Regular T-Shirt`,
      price: 750,
      colour: 'Black',
      quantity: 0,
      description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
      image: 'https://m.media-amazon.com/images/I/614rKOTHPLL._AC_UL320_.jpg',
      category: 'womens',
      totalPrice: 0,
    },
    {
      id: 'e1',
      brand: 'Logi',
      name: 'Wireless Mouse ',
      price: 625,
      colour: 'Black',
      quantity: 0,
      description: `Reliable Wireless Connection : Enjoy a wireless connection up to 10m away thanks to a plug-and-forget USB mini-receiver`,
      image: 'https://m.media-amazon.com/images/I/31N2n4tGvGL.jpg',
      category: 'electronics',
      totalPrice: 0,
    },
    {
      id: 'e2',
      brand: 'TP-Link',
      name: ' TP-Link AC750 Dual Band Wireless Cable Router',
      price: 1400,
      colour: 'Blue',
      quantity: 0,
      description: `750 Mbps Dual Band Wi-Fi —— Simultaneous 2.4GHz 300Mbps and 5GHz 433Mbps connections for 733Mbps of total available bandwidth`,
      image: 'https://m.media-amazon.com/images/I/61uvEaXUcyL._AC_UL320_.jpg',
      category: 'electronics',
      totalPrice: 0,
    },
    {
      id: 'e3',
      brand: 'Dell',
      name: ' Wireless Keyboard Mouse',
      price: 1299,
      colour: 'Black',
      quantity: 0,
      description: `Give your workspace a modern appearance with a stylish wireless keyboard and mouse. A slim profile with silver accents perfectly complements your PC or tablet, while the wireless design creates a clean look. Extended battery : life Confidently work for long periods with a highly efficient keyboard and mouse featuring long battery life, Battery Type: 2AAA, 1AA`,
      image: 'https://m.media-amazon.com/images/I/61d4mVumQhL._AC_UL320_.jpg',
      category: 'electronics',
      totalPrice: 0,
    },
    {
      id: 'e4',
      brand: 'Logi',
      name: `HD Webcam`,
      price: 2035,
      colour: 'Black',
      quantity: 0,
      description: `Full HD widescreen video calling: Logitech C270 let you make widescreen video calls in HD 720p at 30fps. The lense with 60-degree field of view covers all of the action.HD lighting adjustment: Automatically improves the warmth and balance of your image for whatever setting you are in, so you look your best, even in dim environments`,
      image: 'https://m.media-amazon.com/images/I/61yo4swj-PL._AC_UL320_.jpg',
      category: 'electronics',
      totalPrice: 0,
    },
    {
      id: 'e5',
      brand: 'IKARUS',
      name: `Leather Desk Pad`,
      price: 750,
      colour: 'Brown',
      quantity: 0,
      description: `100% ORIGINAL LEATHER : All IKARUS products made of premium quality 100% original full grain LEATHER. Full-Grain Leather is the top layer of the animal skins which is the most expensive and durable. The distinguishing feature of this leather is 100% natural & as every hide is having its own character there may be some natural effects, Two Tone (i.e. shade of two colors), Original leather grain, and leathers are made through about 11-14 complete process to get a quality outcome.`,
      image: 'https://m.media-amazon.com/images/I/81k70vmCg9S._AC_UL320_.jpg',
      category: 'electronics',
      totalPrice: 0,
    },
  ],
  filteredProductData: [],
  masterData: {
    sizes: ['small', 'medium', 'large'],
    category: null,
    clothingBrands: ['Zara', 'Nike', 'Adidas'],
    electronicsBrands: ['Logi', 'Dell', 'TP-Link', 'IKARUS'],
    colours: ['Blue', 'Black', 'Pink', 'White', 'Maroon'],
    filter: { selectedBrand: [], selectedColour: null },
  },
};

const productSlice = createSlice({
  name: constants.productSliceName,
  initialState: initialProductState,
  reducers: {
    //setting global category to list products
    setProductCategory(state, action) {
      state.masterData.category = action.payload;
    },
    //increasing item quantity
    increaseQuantity(state, action) {
      const item = productMapper(state.productData, action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
      }
    },
    //decreasing item quantity
    decreaseQuantity(state, action) {
      const item = productMapper(state.productData, action.payload);

      if (item && item.quantity > 0) {
        item.quantity--;
        item.totalPrice -= item.price;
      }
    },
    // setting item  clothing size
    setProductSize(state, action) {
      const item = productMapper(state.productData, action.payload.id);

      if (item) {
        item.size = action.payload.size;
      }
    },
    //setting default values of item
    setDefault(state, action) {
      const existingItem = productMapper(state.productData, action.payload);
      if (existingItem) {
        existingItem.quantity = 0;
        existingItem.size = null;
        existingItem.totalPrice = null;
      }
    },
    setBrandFilter(state, action) {
      const { name, checked } = action.payload;
      if (
        checked &&
        !checkIfPresent(state.masterData.filter.selectedBrand, name)
      ) {
        state.masterData.filter.selectedBrand.push(name);
        // if (state.filteredProductData.length !== 0) {
        //   state.filteredProductData.filter(({ brand }) =>
        //     state.masterData.filter.selectedBrand.includes(brand)
        //   );
        // } else {
        // state.filteredProductData = state.productData.filter(({ brand }) =>
        //   state.masterData.filter.selectedBrand.includes(brand)
        // );
        // }
      } else if (
        !checked &&
        checkIfPresent(state.masterData.filter.selectedBrand, name)
      ) {
        state.masterData.filter.selectedBrand = productFilter(
          state.masterData.filter.selectedBrand,
          name
        );
        // state.filteredProductData = state.productData.filter(({ brand }) =>
        //   state.masterData.filter.selectedBrand.includes(brand)
        // );
      }
    },
    setColourFilter(state, action) {
      const value = action.payload;

      state.masterData.filter.selectedColour = value;
      // if (state.filteredProductData.length !== 0) {
      //   console.log('woking');
      //   state.filteredProductData = state.filteredProductData.filter(
      //     ({ colour }) => colour === state.masterData.filter.selectedColour
      //   );
      // } else {

      // state.filteredProductData = state.productData.filter(
      //   ({ colour }) => colour === state.masterData.filter.selectedColour
      // );
      // }
    },

    setSizeFilter(state, action) {},
    setFilteredProducts(state) {
      state.filteredProductData = state.productData.filter((obj) => {
        console.log('working');
        Object.entries(state.masterData.filter).every(([prop, find]) =>
          find.includes(obj[prop])
        );
      });
    },
    setDefaultBrandFilter(state) {
      state.masterData.filter.selectedBrand = [];
      state.masterData.filter.selectedColour = null;
    },
  },
});
export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
