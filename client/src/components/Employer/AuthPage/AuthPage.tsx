import { Box } from '@mui/material'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import classes from './auth-page.module.css'

function AuthPage() {
    const [ seachParams,setSeachParams]= useSearchParams();
    const auth = seachParams.get('auth');

    function handleFormChange(query:string){
        setSeachParams({auth:query})
    }
  return (
    <Box className={classes.container}>
        <Box className={classes.image}>IMAGE</Box>
        <Box className={classes.form}>
            {auth === 'register' ? <Register handleFormChange={handleFormChange}/> : <Login handleFormChange={handleFormChange}/>}
        </Box>
    </Box>
  )
}

export default AuthPage