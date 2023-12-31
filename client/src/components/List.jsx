import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import kamera from "../assets/img/image 6.png"

const List = () => {
  return (  

      <Stack direction='column' 
      spacing={3} sx={{padding:'40px 20px',gap:'30px',margin:'40px 0px'}}>
        <Box sx={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          gap:'20px',
          padding:'13px 16px 5px 16px',
          borderRadius:'20px',
          boxSizing:'border-box',
          background:'#F2F2F2'}}>
          <Container sx={{display:'flex',justifyContent:'space-between',position:'relative'}}>
            <Typography variant='h5'>
              Sony FX30
            </Typography>
            <img src={kamera} alt="" 
            width="150px" 
            height="150px" 
            style={{
              position:'absolute',
              right:'-20px',
              top:'-65px'
              }}/>
          </Container>

          <Container sx={{marginTop:'30px',boxSizing:'border-box'}}>
          <Typography sx={{color:'#ABABAB',fontSize:'14px'}}>
            CinemaCam <span>|</span> 3 Battery <span>|</span> G Master 50MM 
          </Typography>
          </Container>
          <Container sx={{display:'flex',justifyContent:'center',paddingBottom:'15px'}}>
            <Button variant='contained' sx={{width:'50%'}}>Rental</Button>
            <Button variant='outlined' sx={{width:'50%',marginLeft:'10px'}}>Info</Button>
          </Container>
        </Box>
        <Box sx={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          gap:'20px',
          padding:'13px 16px 5px 16px',
          borderRadius:'20px',
          boxSizing:'border-box',
          background:'#F2F2F2'}}>
          <Container sx={{display:'flex',justifyContent:'space-between',position:'relative'}}>
            <Typography variant='h5'>
              Sony FX30
            </Typography>
            <img src={kamera} alt="" 
            width="150px" 
            height="150px" 
            style={{
              position:'absolute',
              right:'-20px',
              top:'-65px'
              }}/>
          </Container>

          <Container sx={{marginTop:'30px',boxSizing:'border-box'}}>
          <Typography sx={{color:'#ABABAB',fontSize:'14px'}}>
            CinemaCam <span>|</span> 3 Battery <span>|</span> G Master 50MM 
          </Typography>
          </Container>
          <Container sx={{display:'flex',justifyContent:'center',paddingBottom:'15px'}}>
            <Button variant='contained' sx={{width:'50%'}}>Rental</Button>
            <Button variant='outlined' sx={{width:'50%',marginLeft:'10px'}}>Info</Button>
          </Container>
        </Box>
        <Box sx={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          gap:'20px',
          padding:'13px 16px 5px 16px',
          borderRadius:'20px',
          boxSizing:'border-box',
          background:'#F2F2F2'}}>
          <Container sx={{display:'flex',justifyContent:'space-between',position:'relative'}}>
            <Typography variant='h5'>
              Sony FX30
            </Typography>
            <img src={kamera} alt="" 
            width="150px" 
            height="150px" 
            style={{
              position:'absolute',
              right:'-20px',
              top:'-65px'
              }}/>
          </Container>

          <Container sx={{marginTop:'30px',boxSizing:'border-box'}}>
          <Typography sx={{color:'#ABABAB',fontSize:'14px'}}>
            CinemaCam <span>|</span> 3 Battery <span>|</span> G Master 50MM 
          </Typography>
          </Container>
          <Container sx={{display:'flex',justifyContent:'center',paddingBottom:'15px'}}>
            <Button variant='contained' sx={{width:'50%'}}>Rental</Button>
            <Button variant='outlined' sx={{width:'50%',marginLeft:'10px'}}>Info</Button>
          </Container>
        </Box>
        <Box sx={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          gap:'20px',
          padding:'13px 16px 5px 16px',
          borderRadius:'20px',
          boxSizing:'border-box',
          background:'#F2F2F2'}}>
          <Container sx={{display:'flex',justifyContent:'space-between',position:'relative'}}>
            <Typography variant='h5'>
              Sony FX30
            </Typography>
            <img src={kamera} alt="" 
            width="150px" 
            height="150px" 
            style={{
              position:'absolute',
              right:'-20px',
              top:'-65px'
              }}/>
          </Container>

          <Container sx={{marginTop:'30px',boxSizing:'border-box'}}>
          <Typography sx={{color:'#ABABAB',fontSize:'14px'}}>
            CinemaCam <span>|</span> 3 Battery <span>|</span> G Master 50MM 
          </Typography>
          </Container>
          <Container sx={{display:'flex',justifyContent:'center',paddingBottom:'15px'}}>
            <Button variant='contained' sx={{width:'50%'}}>Rental</Button>
            <Button variant='outlined' sx={{width:'50%',marginLeft:'10px'}}>Info</Button>
          </Container>
        </Box>
       
       
      </Stack>
 
  )
}

export default List