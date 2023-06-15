import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './CovidSlice';

const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

export default store;
