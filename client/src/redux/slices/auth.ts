import { createSlice } from "@reduxjs/toolkit";

interface authState {
  user: {id: string} | null,
  userType: string | null,
  isLoggedIn: boolean,
}

const initialState: authState = {
  user: null,
  userType: null,
  isLoggedIn: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state = {
        user: action.payload.user, 
        userType: action.payload.userMode, 
        isLoggedIn: true
      };
      return state;
    },
    logout: (state) => {
      state = initialState;
      return state;
    }
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer;