import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Header from './components/Header'
import Body from './components/Body'
import Slidebar from './components/Slidebar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
const theme = createTheme({
  palette:{
    primary: {
       main:"#90EE90"
    },
  },
    typography :{
      myvariant:{
        fontSize : '5rem',
        color :"#CCC"
      }
    }
});

const Applayout = () =>{
  return(
    <>
    <Slidebar/>
   <Header/>
    <Body /> 
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
    <Applayout />
    </ThemeProvider>
  </React.StrictMode>,
)
