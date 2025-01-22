import React from 'react'
import classes from './admin-home.module.css'
import { Box } from '@mui/material'

function AdminHome() {
  return (
    <Box className={classes.container}>
      <Box className={classes.welcome}>
        Hello Admin
      </Box>
    </Box>
  )
}

export default AdminHome