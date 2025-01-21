import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/RootLayout';
import AuthPage from './components/Common/AuthPage/AuthPage';
import AdminLayout from './components/Admin/AdminLayout';
import UserLayout from './components/User/UserLayout';
import EmployerLayout from './components/Employer/EmployerLayout';
import { authPageLoader } from './utils/authLoader';
import Employers from './components/Admin/Employers/Employers';
import AdminHome from './components/Admin/Home/AdminHome';
import PendingEmps from './components/Admin/Employers/PendingEmps';
import Logout from './components/Common/Logout';
import AdminAccount from './components/Admin/Account/AdminAccount';
import EmpDetails from './components/Admin/Employers/Details/EmpDetails';



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
        path:'logout',
        element: <Logout/>,
      },
      {
        path: "user",
        element:<UserLayout/>,
        children:
        [
          {
            path:'',
            element: <div>USER HOME</div>,
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
            element: <div>EMPLOYER HOME</div>,
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
            element: <AdminHome/>,
          },
          {
            path:'employers',
            element: <Employers/>,
          },
          {
            path:'employers/:id',
            element: <EmpDetails/>,
          },
          {
            path:'pendings',
            element: <PendingEmps/>,
          },
          {
            path:'account',
            element: <AdminAccount/>,
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

