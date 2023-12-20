import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  online: true,
  language: 'en-US',
  userFetched: false,
  error: null,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setUserFetched: (state, action) => {
      state.userFetched = action.payload;
      return state;
    },
    setOnline: (state, action) => {
      state.online = action.payload;
      return state;
    }, 
    setErrorAlert: (state, action) => {
      state.error = action.payload;
      return state;
    }
  },
})

export const { setUserFetched, setErrorAlert } = generalSlice.actions

export default generalSlice.reducer;