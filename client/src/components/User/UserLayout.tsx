import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { RootState } from '../../store/store'
import Loading from '../Common/Loading';
import classes from './user-layout.module.css';



import HomeIcon from '@mui/icons-material/Home';
import AccountIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import AddIcon from '@mui/icons-material/Add';
import WorkIcon from '@mui/icons-material/Work';
import Sidebar from '../Common/SideBar';



function UserLayout() {
  const user = useSelector((state:RootState)=>state.userSlice.user);
  const [loading,setLoading]= useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user || (user && user.role !== 'user')){
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

export default UserLayout


const list=[
  {
      icon:<HomeIcon fontSize='large'/>,
      name:'Home',
      link:''
      
  },
  {
      icon:<WorkIcon fontSize='large'/>,
      name:'Jobs',
      link:'jobs'
  },
  {
      icon:<ArticleIcon fontSize='large'/>,
      name:'Applications',
      link:'applications'
  },
  {
      icon:<AccountIcon fontSize='large'/>,
      name:'Acccount',
      link:'account'
  },
  {
    icon:<LogoutIcon fontSize='large'/>,
    name:'Logout',
    link:'/logout'
}
  ]