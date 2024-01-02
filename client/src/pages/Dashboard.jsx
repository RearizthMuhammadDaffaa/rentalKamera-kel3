import { CameraAltOutlined, Person } from '@mui/icons-material'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Container
    sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      padding:'10px 20px',
     
    }}
    >
      <Typography 
        variant='h3'
        padding={3}
      >Dashboard</Typography>
      <Stack
        flexDirection='column'
        gap="20px"
        height="100vh"
      >
        <Link to="/dashboard/listkamera">
        <Paper 
          sx={{
            padding:'20px',
          
          }}
        >
          <CameraAltOutlined
            sx={{
              width:'200px',
              height:'80px'
            }}
          />

          <Typography variant='h6' align='center'>Kamera</Typography>
          
        </Paper>
        </Link>
        <Link to='/dashboard/UserRental'>
        <Paper 
          sx={{
            padding:'20px',
          
          }}
        >
          <Person
            sx={{
              width:'200px',
              height:'80px'
            }}
          />

          <Typography variant='h6' align='center'>USER RENTAL</Typography>
          
        </Paper>
        </Link>
        
       
      </Stack>
    </Container>
  )
}

export default Dashboard