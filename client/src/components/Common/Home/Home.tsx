import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../../../store/store'
import { getTokenString, redirectToDashboard } from '../../../utils/utilsFunctions';

function Home() {
  const user  = useSelector((state:RootState)=>state.userSlice.user);
  const navigate = useNavigate();
 
  useEffect(()=>{
    if(getTokenString() && user){
      navigate(redirectToDashboard(user));
    }
  },[user,navigate])
  
  return (
    <div>
      <Link to={'/auth'}>LOGIN / REGISTER</Link>
    </div>
  )
}

export default Home