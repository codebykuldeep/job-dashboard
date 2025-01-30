import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import classes from './loading.module.css'

function Loading() {
  return (
    <Box className={classes.loader} sx={{bgcolor:"background.default"}}>
      <CircularProgress size={60} />
    </Box>
  )
}

export default Loading