import { configureStore } from '@reduxjs/toolkit';

import { clothingReducer } from './clothingSlice';
import { electronicsReducer } from './electronicsSlice';

const store = configureStore({
  reducer: {
    clothing: clothingReducer,
    electronics: electronicsReducer,
  },
});
export default store;
