import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  online: true,
  language: 'en-US',
  userIsFetched: false,
  error: null,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setUserIsFetched: (state, action) => {
      state.userIsFetched = action.payload;
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

export const { setUserIsFetched, setErrorAlert } = generalSlice.actions

export default generalSlice.reducer;