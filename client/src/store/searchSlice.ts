import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPost, IUser } from '../types/dataTypes';



export interface searchState {
  data: IPost[] | null;
  loading:boolean;
}

const initialState: searchState  = {
  data:null,
  loading:false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setData: (state,action: PayloadAction<IPost[]>) => {
      
      state.data = action.payload;

    },
    removeData: (state) => {
      state.data = null;
    },
  },
})


export const searchActions = searchSlice.actions

export default searchSlice;