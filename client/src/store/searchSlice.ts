import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../types/dataTypes';
import { userServerConnect } from '../utils/http-methods/userMethods';



export interface searchState {
  data: IPost[] | null;
  posts:IPost[] | null;
  loading:boolean;
}

const initialState: searchState  = {
  data:null,
  posts:null,
  loading:false,
}

export const searchPost = createAsyncThunk('/search/searchPost',async(query:string)=>{
  const response = await userServerConnect('GET','posts/search',{query:query});
  if(Boolean(response.success)){
    return response.data;
  }
  else{
    throw new Error('failed to update user data')
  }
})

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
    updatePost(state,action:PayloadAction<number>){
      const id = action.payload;
      const indexInData = state.data?.findIndex((item)=>Number(item.post_id) === id);
      const indexInPosts = state.data?.findIndex((item)=>Number(item.post_id) === id);
      
      if(indexInData!== -1 && state.data){
        state.data[indexInData!].applied = String(true);
      }
      if(indexInPosts!== -1 && state.posts){
        state.posts[indexInPosts!].applied = String(true);
      }
    },
    applyFilter:(state,action:PayloadAction<{location:string[],experience:number}>)=>{
      const {location,experience} = action.payload; 
      if(location.length === 0 && experience === 0){
        state.posts = state.data;
      }
      else if(state.data){
        const filterData = state.data.filter((post)=>{
          if(location.includes(post.location.toLowerCase()) && Number(post.experience) >= experience){
            return true;
          }
          if(location.length === 0 && Number(post.experience) >= experience){
            return true;
          }
          return false;
        })
        state.posts = filterData;
      }

    }
  },
  extraReducers(builder) {
    builder.addCase(searchPost.pending,(state,action)=>{
      state.loading = true;
    })
    builder.addCase(searchPost.fulfilled,(state,action)=>{
      state.data = action.payload;
      state.posts = action.payload;
      state.loading = false;
    })
    builder.addCase(searchPost.rejected,(state,action)=>{
      state.loading = false;
    })
  },
})


export const searchActions = searchSlice.actions

export default searchSlice;