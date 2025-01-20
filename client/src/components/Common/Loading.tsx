import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <Box sx={{ width:'100%',height:'100vh', display: 'flex',alignItems:'center',justifyContent:'center' }}>
      <CircularProgress size={60} />
    </Box>
  )
}

export default Loading