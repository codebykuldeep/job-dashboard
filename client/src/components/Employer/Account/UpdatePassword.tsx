import React from 'react'
import classes from './emp-account.module.css'
import { Button, TextField } from '@mui/material'
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
        </div>
    </div>
  )
}

export default UpdatePassword