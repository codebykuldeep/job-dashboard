import React  from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../../store/store'
import { getTokenString, redirectToDashboard } from '../../../utils/utilsFunctions';
import classes from './home.module.css';
import { Button } from '@mui/material';


function Home() {
  const user  = useSelector((state:RootState)=>state.userSlice.user);
  
  
  const navigate = useNavigate();
  const userStatus = getTokenString() && user;
 
  function handleClick(){
    if(userStatus){
      navigate(redirectToDashboard(user));
    }
    else{
      navigate('/auth');
    }
    
  }
  
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.text}>Unlock Your Future: Find Your <br /><strong>Perfect Job</strong> Today!</div>
        <p className={classes.para}>Welcome to findJob, where your dream job awaits! Browse thousands of job listings.</p>
        <div className={classes.button}><Button variant='contained' onClick={handleClick}>{userStatus ? "DashBoard" :'Login'}</Button></div>
      </div>
    </div>
  )
}

export default Home


