import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user:{},
  },
  reducers: {
    logIn: (state,action) => {
        state.user=action.payload;
    },
    logout:(state) => {
      state.user={};
  },
  },
})

// Action creators are generated for each case reducer function
export const { logIn ,logout} = UserSlice.actions

export default UserSlice.reducer