import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/RootLayout';
import AuthPage from './components/Employer/AuthPage/AuthPage';
import AdminLayout from './components/Admin/AdminLayout';
import UserLayout from './components/User/UserLayout';
import EmployerLayout from './components/Employer/EmployerLayout';
import { authPageLoader } from './utils/authLoader';
import Employers from './components/Admin/Employers/Employers';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<div><h1>404 NOT FOUND</h1></div>,
    element:<RootLayout/>,
    children:[
      {
        path:'',
        element: <h1>Home</h1>,
      },
      {
        path:'auth',
        loader:authPageLoader,
        element: <AuthPage/>,
      },
      {
        path: "user",
        element:<UserLayout/>,
        children:
        [
          {
            path:'',
            element: <AuthPage/>,
          }
        ]
      },
      {
        path: "employer",
        element:<EmployerLayout/>,
        children:
        [
          {
            path:'',
            element: <AuthPage/>,
          }
        ]
      },
      {
        path: "admin",
        element:<AdminLayout/>,
        children:
        [
          {
            path:'',
            element: <h1>HOME ADMIN</h1>,
          },
          {
            path:'employers',
            element: <Employers/>,
          }
        ]
      }
    ]
  },
  
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;

