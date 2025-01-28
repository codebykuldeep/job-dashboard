import { Button } from '@mui/material'
import React, { FormEvent, useState } from 'react';
import classes from './jobs-main.module.css'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { searchPost } from '../../../store/searchSlice';

function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();
  const [value,setValue] = useState('');


  function handleValue(event:React.ChangeEvent<HTMLInputElement>){
    const value  = event.target.value
    setValue(value);
  }

  function handleSearch(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    // if(value.trim()!==''){
    //   dispatch(searchPost(value));
    // }
    dispatch(searchPost(value));
  }
  return (
    <form className={classes.search_form} onSubmit={handleSearch}>
        <div className={classes.search_box}>
          <input type="text"  placeholder='Enter keywords' defaultValue={value} onChange={handleValue}/>
          <Button className={classes.search_btn} variant='contained' type='submit'>Find</Button>
        </div>
    </form>
  )
}

export default SearchBar