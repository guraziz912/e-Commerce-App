import { configureStore } from '@reduxjs/toolkit';

import { clothingReducer } from './clothingSlice';

const store = configureStore({
  reducer: {
    clothing: clothingReducer,
  },
});
export default store;
