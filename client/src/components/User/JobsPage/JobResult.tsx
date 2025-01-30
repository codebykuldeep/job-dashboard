import React from 'react';
import Grid from '@mui/material/Grid2';
import JobCard from './JobCard';
import { Box, CircularProgress } from '@mui/material';
import classes from './job-result.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';


function JobResult() {
  const {posts,loading} =useSelector((state:RootState)=>state.searchSlice)

  if(loading){
    return  (
      <Box className={classes.loader}>
        <CircularProgress size={50}/>
      </Box>
    )
  }

  if(!posts || posts.length === 0){
    return <Box className={classes.empty} sx={{color:'text.primary'}}>
      No result jobs for given query 
    </Box>
  }
  return (
    <>
      <Box className={classes.result_count} sx={{color:'text.primary'}}>Showing {posts.length} results</Box>
      <Grid container spacing={2} direction="row" sx={{alignItems:'stretch'}}>
        {posts.map((post, ind) => (
          <Grid size={12 / 2} key={ind}>
            <JobCard key={post.post_id} post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default JobResult