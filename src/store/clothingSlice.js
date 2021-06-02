import { createSlice } from '@reduxjs/toolkit';

//custom imports
import constants from '../utils/constants';

const initialClothingState = {
  clothingData: {
    menClothing: [
      {
        id: 'm1',
        brand: 'Zara',
        name: 'Slim Fit Cotton Shirt',
        price: 455,
        colour: 'Blue',
        sizes: ['small', 'medium'],
        quantity: 1,
        description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
        image:
          'http://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg',
      },
      {
        id: 'm2',
        brand: 'Nike',
        name: ' Cotton Polo Shirt',
        price: 899,
        colour: 'white',
        sizes: ['small', 'medium', 'large'],
        quantity: 1,
        description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
        image:
          'http://themes.pixelstrap.com/multikart/assets/images/pro3/33.jpg',
      },
      {
        id: 'm3',
        brand: 'Zara',
        name: ' Fit  Shirt',
        price: 699,
        colour: 'Maroon',
        sizes: ['medium', 'large'],
        quantity: 1,
        description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
        image:
          'http://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg',
      },
      {
        id: 'm4',
        brand: 'Nike',
        name: `Men Short Sleeve T-Shirt`,
        price: 455,
        colour: 'Blue',
        sizes: ['small', 'medium'],
        quantity: 1,
        description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
        image:
          'http://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg',
      },
      {
        id: 'm5',
        brand: 'Adidas',
        name: `Adidas Men's Regular T-Shirt`,
        price: 750,
        colour: 'Black',
        sizes: ['small', 'medium', 'large'],
        quantity: 1,
        description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
        image: 'https://m.media-amazon.com/images/I/31+UkA6owzL.jpg',
      },
    ],
    womensClothing: [
      {
        id: 'w1',
        brand: 'Zara',
        name: 'Slim Fit Cotton Shirt',
        price: 455,
        colour: 'Blue',
        sizes: ['small', 'medium'],
        quantity: 1,
        description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
        image:
          'http://themes.pixelstrap.com/multikart/assets/images/pro3/2.jpg',
      },
      {
        id: 'w2',
        brand: 'Nike',
        name: ` Women's Cotton Polo Shirt`,
        price: 899,
        colour: 'white',
        sizes: ['small', 'medium', 'large'],
        quantity: 1,
        description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
        image:
          'http://themes.pixelstrap.com/multikart/assets/images/pro3/1.jpg',
      },
      {
        id: 'w3',
        brand: 'Zara',
        name: ' Women Pink SHIRT',
        price: 699,
        colour: 'Pink',
        sizes: ['medium', 'large'],
        quantity: 1,
        description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
        image: 'https://m.media-amazon.com/images/I/61hbqL0V5JL._AC_UL320_.jpg',
      },
      {
        id: 'w4',
        brand: 'Nike',
        name: `Women's Short Sleeve T-Shirt`,
        price: 455,
        colour: 'Blue',
        sizes: ['small', 'medium'],
        quantity: 1,
        description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
        image: 'https://m.media-amazon.com/images/I/81PBvVoAUyL._AC_UL320_.jpg',
      },
      {
        id: 'w5',
        brand: 'Adidas',
        name: `Adidas Women's Regular T-Shirt`,
        price: 750,
        colour: 'Black',
        sizes: ['small', 'medium', 'large'],
        quantity: 1,
        description: `The Model is wearing one from our stylist's collection, see the image for a mock-up of what the actual item would look like.it has text written on it in a black cursive language which looks great on a white color.`,
        image: 'https://m.media-amazon.com/images/I/614rKOTHPLL._AC_UL320_.jpg',
      },
    ],
  },
};

const clothingSlice = createSlice({
  name: constants.clothingSliceName,
  initialState: initialClothingState,
  reducers: {},
});

export const clothingReducer = clothingSlice.reducer;
