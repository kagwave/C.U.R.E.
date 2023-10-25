import { createSlice } from "@reduxjs/toolkit";

interface authState {
  user: Student | Instructor | Collaborator | null,
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
        userType: action.payload.userType, 
        isLoggedIn: true
      };
      return state;
    },
    logout: (state) => {
      state = initialState;
      return state;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
      return state;
    }
  },
})

export const { login, logout, setUserType } = authSlice.actions

export default authSlice.reducer;