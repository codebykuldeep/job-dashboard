import React from 'react';
import classes from './emp-home-layout.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import PendingHome from './PendingHome';
import RejectedHome from './RejectedHome';
import EmployerHome from './EmployerHome';

function EmpHomeLayout() {
    const user = useSelector((state:RootState)=>state.userSlice.user);
    const accountStatus = user?.status === null ? 'pending' : Boolean(user?.status) === true ? 'accepted' : 'rejected'
  return (
    <div className={classes.container}>
        
        {accountStatus === 'pending' && <PendingHome/>}
        {accountStatus === 'rejected' && <RejectedHome/>}
        {accountStatus === 'accepted' && (
            <>
            <div className={classes.greeting}> Hello , {user!.name}</div>
            <EmployerHome/>
            </>
        )}
    </div>
  )
}

export default EmpHomeLayout