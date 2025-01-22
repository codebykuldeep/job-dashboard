import React, { useState } from 'react'
import classes from './sidebar.module.css'
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { SidebarListType } from '../../types/tableTypes';


interface SideBarProps{
    list:SidebarListType
}

function Sidebar({list}:SideBarProps) {
    const [open,setOpen]= useState(false);
    function handleSideBar(){
        setOpen(prev=>!prev);
    }
  return (
    <div
      className={!open ? classes.sidebar_open : classes.sidebar_close }
    >
      <div className={classes.open_btn}>
      <button onClick={handleSideBar}>{open ?  <ArrowForward/> : <ArrowBack/>}</button>
      </div>
      <div className={classes.item_container}>
        {list.map(({ icon, name,link }) => (
          <Link to={link!} key={name} className={classes.item}>
            <span className={classes.icon}>{icon}</span>
            {!open && <span>{name}</span>}
          </Link>
        ))}
        {/* {(new Array(100).fill(0)).map((val,ind) => (
          <Link to={''} key={ind} className={classes.item}>
            <span className={classes.icon}>I</span>
            {!open && <span>{ind}</span>}
          </Link>
        ))} */}
      </div>
    </div>
  );
}

export default Sidebar