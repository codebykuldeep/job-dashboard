import React from 'react'
import classes from './details.module.css'
import { Button, TextField } from '@mui/material'
import passwordImage from '../../../assets/password-image.png'
function UpdatePassword() {
  return (
    <div className={classes.container}>
        <div className={classes.heading}>Update Password</div>
        <div className={classes.form_box}>
            <form className={classes.form} action="">
                <div>
                <TextField
                    id="old_password"
                    name='old_password'
                    label="Old Password"
                    type="password"
                    variant="standard"
                    />
                </div>
                <div>
                <TextField
                    id="password"
                    name='password'
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    />
                </div>
                <div>
                    <Button variant='contained'>Update</Button>
                </div>
            </form>
            <div className={classes.form_image}>
                <img src={passwordImage} alt="password show img" />
            </div>
        </div>
    </div>
  )
}

export default UpdatePassword