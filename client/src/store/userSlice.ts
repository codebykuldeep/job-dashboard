import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../types/dataTypes';
import { UserVerify } from '../utils/authMethods';



export interface UserState {
  user: IUser | null;
}

const initialState: UserState  = {
  user:null
}

export const updateUser = createAsyncThunk('/user/updateUser',async()=>{
  const response = await UserVerify();
  if(Boolean(response.success)){
    return response.data;
  }
  else{
    throw new Error('failed to update user data')
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,action: PayloadAction<IUser>) => {
      
      state.user = action.payload;
    },
    removeState: (state) => {
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(updateUser.fulfilled,(state,action)=>{
      state.user = action.payload;
    })
  },
})


export const userActions = userSlice.actions

export default userSlice;