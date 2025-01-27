import React from 'react';
import Grid from '@mui/material/Grid2';
import JobCard from './JobCard';
import { Box } from '@mui/material';
import classes from './job-result.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Loading from '../../Common/Loading';

function JobResult() {
  const {posts,loading} =useSelector((state:RootState)=>state.searchSlice)

  if(loading){
    return <Loading/>
  }
  if(!posts || posts.length === 0){
    return <div className={classes.empty}>
      No result jobs for given query 
    </div>
  }
  return (
    <>
      <Box className={classes.result_count}>Showing {posts.length} results</Box>
      <Grid container spacing={2}>
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