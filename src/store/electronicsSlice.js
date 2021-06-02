import { createSlice } from '@reduxjs/toolkit';

//custom imports
import constants from '../utils/constants';

const initialElectronicState = {
  electronicsData: [
    {
      id: 'e1',
      brand: 'Logi',
      name: 'Wireless Mouse ',
      price: 625,
      colour: 'Black',
      quantity: 1,
      description: `Reliable Wireless Connection : Enjoy a wireless connection up to 10m away thanks to a plug-and-forget USB mini-receiver`,
      image: 'https://m.media-amazon.com/images/I/31N2n4tGvGL.jpg',
    },
    {
      id: 'e2',
      brand: 'TP-Link',
      name: ' TP-Link AC750 Dual Band Wireless Cable Router',
      price: 1400,
      colour: 'Blue',
      quantity: 1,
      description: `750 Mbps Dual Band Wi-Fi —— Simultaneous 2.4GHz 300Mbps and 5GHz 433Mbps connections for 733Mbps of total available bandwidth`,
      image: 'https://m.media-amazon.com/images/I/61uvEaXUcyL._AC_UL320_.jpg',
    },
    {
      id: 'e3',
      brand: 'Dell',
      name: ' Wireless Keyboard Mouse',
      price: 1299,
      colour: 'Black',
      quantity: 1,
      description: `Give your workspace a modern appearance with a stylish wireless keyboard and mouse. A slim profile with silver accents perfectly complements your PC or tablet, while the wireless design creates a clean look. Extended battery : life Confidently work for long periods with a highly efficient keyboard and mouse featuring long battery life, Battery Type: 2AAA, 1AA`,
      image: 'https://m.media-amazon.com/images/I/61d4mVumQhL._AC_UL320_.jpg',
    },
    {
      id: 'e4',
      brand: 'Logi',
      name: `HD Webcam`,
      price: 2035,
      colour: 'Black',
      quantity: 1,
      description: `Full HD widescreen video calling: Logitech C270 let you make widescreen video calls in HD 720p at 30fps. The lense with 60-degree field of view covers all of the action.HD lighting adjustment: Automatically improves the warmth and balance of your image for whatever setting you are in, so you look your best, even in dim environments`,
      image: 'https://m.media-amazon.com/images/I/61yo4swj-PL._AC_UL320_.jpg',
    },
    {
      id: 'e5',
      brand: 'IKARUS',
      name: `Leather Desk Pad`,
      price: 750,
      colour: 'Brown',
      quantity: 1,
      description: `100% ORIGINAL LEATHER : All IKARUS products made of premium quality 100% original full grain LEATHER. Full-Grain Leather is the top layer of the animal skins which is the most expensive and durable. The distinguishing feature of this leather is 100% natural & as every hide is having its own character there may be some natural effects, Two Tone (i.e. shade of two colors), Original leather grain, and leathers are made through about 11-14 complete process to get a quality outcome.`,
      image: 'https://m.media-amazon.com/images/I/81k70vmCg9S._AC_UL320_.jpg',
    },
  ],
};

const electronicSlice = createSlice({
  name: constants.electronicSliceName,
  initialState: initialElectronicState,
  reducers: {},
});

export const electronicsReducer = electronicSlice.reducer;
