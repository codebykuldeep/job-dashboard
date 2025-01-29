import { createBrowserRouter } from "react-router-dom";



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
import Home from './components/Common/Home/Home';
import Posts from './components/Employer/Posts/Posts';
import AddPost from './components/Employer/PostsForm/AddPost';
import PostDetail from './components/Employer/PostsDetails/PostDetail';
import EmpAccount from './components/Employer/Account/EmpAccount'
import EditPost from './components/Employer/PostsForm/EditPost';
import JobsPage from './components/User/JobsPage/JobsPage';
import Applications from './components/User/Applications/Applications';
import UserAccount from './components/User/Account/UserAccount';
import UserHome from './components/User/Home/UserHome';
import EmpHomeLayout from './components/Employer/Home/EmpHomeLayout';
import Find from './components/Employer/Find/Find';


export const routerRoutes = createBrowserRouter([
    {
      path: "/",
      errorElement:<div><h1>404 NOT FOUND</h1></div>,
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element: <Home/>,
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
              element: <UserHome/>,
            },
            {
              path:'jobs',
              element: <JobsPage/>,
            },
            {
              path:'applications',
              element: <Applications/>,
            },
            {
              path:'account',
              element: <UserAccount/>,
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
              element: <EmpHomeLayout/>,
            },
            {
              path:'posts',
              element: <Posts/>,
            },
            {
              path:'posts/:id',
              element: <PostDetail/>,
            },
            {
              path:'add-post',
              element: <AddPost/>,
            },
            {
              path:'posts/edit/:id',
              element: <EditPost/>,
            },
            {
              path:'find',
              element: <Find/>,
            },
            {
              path:'account',
              element: <EmpAccount/>,
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