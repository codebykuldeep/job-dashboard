import React, { useState } from 'react'
import classes from './sidebar.module.css'
import AccountIcon from '@mui/icons-material/AccountCircle';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const list=[
    {
        icon:<AccountIcon/>,
        name:'Home',
        link:''
        
    },
    {
        icon:<AccountIcon/>,
        name:'Employers',
        link:'employers'
    },
    {
        icon:<AccountIcon/>,
        name:'Pendings',
        link:'employers'
    },
    {
        icon:<AccountIcon/>,
        name:'Acccount',
        link:'account'
    }
    ]


function Sidebar() {
    const [open,setOpen]= useState(false);
    function handleSideBar(){
        setOpen(prev=>!prev);
    }
  return (
    <div
      style={{ width: open ? "50px" : undefined }}
      className={classes.sidebar}
    >
      <div className={classes.open_btn}>
      <button onClick={handleSideBar}>{open ?  <ArrowForward/> : <ArrowBack/>}</button>
      </div>
      <div className={classes.item_container}>
        {list.map(({ icon, name,link }) => (
          <Link to={link!} key={name} className={classes.item}>
            <span>{icon}</span>
            {!open && <span>{name}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar