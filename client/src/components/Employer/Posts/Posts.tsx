import React from 'react'
import { useFetch } from '../../../utils/custom-hooks/useFetch'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import Loading from '../../Common/Loading';
import classes from './posts.module.css'
import { IPost } from '../../../types/dataTypes';
import PostCard from './PostCard';
import { Box, Container } from '@mui/material';

function Posts() {
  const user = useSelector((state:RootState)=>state.userSlice.user)
  const [data,loading,error] = useFetch<IPost[]>('posts',{id:user!.emp_id})
  if(loading || !data){
    return <Loading/>
  }
  if(error){
    return <p>Failed to load page</p>
  }
  

  return (
    <Box className={classes.container}>
    <Box className={classes.heading}>
      <h1>All Jobs </h1>
    </Box>
    <Box className={classes.post_box}>
    <Container maxWidth='md' className={classes.posts}>
      {
        data.map((post)=>(<PostCard key={post.post_id} data={post}/>))
      }
      </Container>
    </Box>
    </Box>
  )
}

export default Posts