import React from 'react'
import { IUser } from '../../../types/dataTypes'
import classes from './emp-account.module.css'

interface DetailsProps{
    user:IUser;
}
function Details({user}:DetailsProps) {
   
  return (
    <div className={classes.container}>
      DETAIL
    </div>
  );
}

export default Details