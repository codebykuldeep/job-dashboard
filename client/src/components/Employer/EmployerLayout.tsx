import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { RootState } from '../../store/store'
import Loading from '../Common/Loading';
import Sidebar from '../Common/SideBar';
import classes from './employer-layout.module.css'
import AccountIcon from '@mui/icons-material/AccountCircle';

function EmployerLayout() {
  const user = useSelector((state:RootState)=>state.userSlice.user);
  const [loading,setLoading]= useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user || (user && user.role !== 'employer')){
      navigate('/');
    }
    else{
      setLoading(false);
    }
  },[user,navigate])

  if(loading){
    return <Loading/>
  }
  return (
    <div className={classes.container}>
    <Sidebar list={list}/>
    <Outlet/>
    </div>
  )
}

export default EmployerLayout;


const list=[
  {
      icon:<AccountIcon fontSize='large'/>,
      name:'Home',
      link:''
      
  },
  {
      icon:<AccountIcon fontSize='large'/>,
      name:'Employers',
      link:'employers'
  },
  {
      icon:<AccountIcon fontSize='large'/>,
      name:'Pendings',
      link:'pendings'
  },
  {
      icon:<AccountIcon fontSize='large'/>,
      name:'Acccount',
      link:'account'
  },
  {
    icon:<AccountIcon fontSize='large'/>,
    name:'Logout',
    link:'/logout'
}
  ]