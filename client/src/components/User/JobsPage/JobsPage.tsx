import React, { useEffect } from 'react';
import classes from './jobspage.module.css'
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import JobResult from './JobResult';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { searchPost } from '../../../store/searchSlice';

function JobsPage() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
    dispatch(searchPost(''));
  },[dispatch])
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <SearchBar/>
      </div>
      <div className={classes.content}>
        <div className={classes.filter}>
          <FilterBar/>
        </div>
        <div className={classes.result}>
          <JobResult/>
        </div>
      </div>
    </div>
  )
}

export default JobsPage