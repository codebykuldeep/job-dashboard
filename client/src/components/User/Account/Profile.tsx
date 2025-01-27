import React from 'react'
import { IUser } from '../../../types/dataTypes'
import classes from './profile.module.css';
import { nameFormatter } from '../../../helper/helperFunctions';
import { Button } from '@mui/material';

interface ProfileProps{
  user:IUser;
}


function Profile({user}:ProfileProps) {
  const views = ['name','email','education','summary']
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div> Personal Information</div>
      </div>
      <div className={classes.detail}>
        {views.map((view) => (
          <p key={view} className={classes.line}>
            <span>{nameFormatter(view)}</span> :{" "}
            <span>{nameFormatter(user[view])}</span>
          </p>
        ))}
      </div>
      {user?.resume && (
        <div>
          <p className={classes.line}>
            <span>Resume</span> :{" "}
            <span>
              <a href={user.resume} target='_blank' rel="noreferrer">
                <Button variant='outlined'>Open</Button>
              </a>
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile