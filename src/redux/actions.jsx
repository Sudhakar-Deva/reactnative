// redux/authSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    signOut: state => {
      state.isLoggedIn = false;
      state.user = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {signInSuccess, signOut, signInFailure} = authSlice.actions;
export default authSlice.reducer;
