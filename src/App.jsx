import React from 'react'
import Sidbar from './components/Slidebar'
import Navbar from './components/Navbar'
import Feed from './components/Feed'

import {Box, Stack} from '@mui/material'
const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing
      ={2} justifyContent='space-between' >
   <Sidbar/>
   <Feed/>

      </Stack>
    </Box>
  )
}

export default App
