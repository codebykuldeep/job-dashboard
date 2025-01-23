import React from 'react';
import classes from './emp-account.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import UpdatePassword from './UpdatePassword';
import Details from './Details';

function EmpAccount() {
  const user = useSelector((state:RootState)=>state.userSlice.user);
  const [searchParams,setSearchParams] = useSearchParams();
  const view = searchParams.get('view');

  function handleView(view:string){
    setSearchParams({view:view});
  }
  return (
    <div className={classes.container}>
      <div className={classes.content}>
      <Box className={classes.left}>
        <Box className={classes.show_box}>
          <Box className={classes.image}><img src={''} alt='admin icon'/></Box>
          <Box>{user!.name}</Box>
        </Box>
        <Box className={classes.option}>
          <button onClick={()=>handleView('details')}>Details</button>
          {/* <button>Update Details</button> */}
          <button onClick={()=>handleView('password')}>Update Password</button>
        </Box>
      </Box>
      <Box className={classes.right}>
        {view === 'password' ? <UpdatePassword/> : <Details user={user!}/>}
      </Box>
      </div>
    </div>
  )
}

export default EmpAccount