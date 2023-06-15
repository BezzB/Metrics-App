import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://covid-api.mmediagroup.fr/v1/cases?country=France';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getCases = createAsyncThunk('cases/getCases', async (_, thunkAPI) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: config.headers,
    });
    if (!response.ok) {
      throw new Error('Error connecting to the API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const initialState = {
  cases: [],
  loading: false,
  selectedCountry: '',
  searchedCountry: '',
  error: '',
};

const covidSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    searchCountry: (state, action) => {
      state.searchedCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCases.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getCases.fulfilled, (state, action) => {
        state.loading = false;
        state.cases = action.payload;
      })
      .addCase(getCases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const { selectCountry, searchCountry } = covidSlice.actions;

export default covidSlice.reducer;
