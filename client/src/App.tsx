import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import {routerRoutes} from './Router'

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';



declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary'];
  }

  interface PaletteOptions {
    custom?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette:{
    mode:'light',
    custom:{
    }
  },
  colorSchemes: {
    dark: {
      palette:{
        background:{
          //default:'#202020',
          
        }
      }
    },
    light:true,
  },
});

// const theme = createTheme({
//   colorSchemes: {
//     light: {
//       palette: {
        
//       },
//     },
//     dark: {
//       palette: {
//         primary:{
//         },
//         background:{
          
//         }
//       },
//     },
//   },
// });


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  console.log(prefersDarkMode);
  
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routerRoutes}/> 
    </ThemeProvider>
    
  )
}

export default App;





