import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './CountrySlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
