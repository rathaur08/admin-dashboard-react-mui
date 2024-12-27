import React from 'react'
import SideBar from './SideBar'
import Box from '@mui/material/Box';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About Page</h1>
        </Box>
      </Box>
    </>
  )
}

export default About