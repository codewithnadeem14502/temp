import React from 'react';
import Sidbar from './components/Slidebar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import {Box, Stack} from '@mui/material';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import DetailPatient from './components/DetailPatient';
import Error from './components/Error'
const AppLayout = () =>{
  return (
    <>
       <Box>
      <Navbar/>
      <Stack direction="row" spacing
      ={2} justifyContent='space-between' >
   <Sidbar/>
   {/* <Feed/> */}
  <Outlet/>
      </Stack>
    </Box>
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/patient/:id",
        element: <DetailPatient/>,
    
      },
    ],
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={appRouter} />
)
