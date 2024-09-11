import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    profile: {}

  },
  reducers: {
    async signup(state, action) {
      state.profile = action.payload;
      const response = await axios.post('http://localhost:3001/v1/api/auth/signup', action.payload);
      console.log('response :>> ', response); 
    },
  },
})

// Action creators are generated for each case reducer function
export const { signup } = authSlice.actions;

export default authSlice.reducer;