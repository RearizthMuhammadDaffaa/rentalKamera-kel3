import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import sony from "../assets/img/image 1.png"


const HeaderBrand = ({type}) => {
  return (
    <Box sx={{display:'flex',marginTop:'15px',flexDirection:'column',paddingX:'7px'}}>
      <Container sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'30px'}}>
        <Typography variant='h4' >
          {type === "katalog"? "Katalog" : "Merk"}
        </Typography>

        {type != "katalog"&& <Typography variant='subtitle2'>
          Lihat Semua
         
          <ArrowForwardIosIcon sx={{fontSize:'15px'}} />
        </Typography>}
       
      </Container>
      
      <Container component='div' sx={{display:'flex',overflowX:'scroll',width:'100%',gap:'10px'}}>
       
        <Box elevation={3} sx={{
          display:'flex',
          padding:'21px 0px 21px 0px',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'12px',
          borderRadius:'20px',
          boxShadow:'0px 4px 5.6px 0px rgba(0, 0, 0, 0.08)',
          minWidth: '150px',
          flexShrink:'0'
        }}>
          <img src={sony} alt="" width="60px" height="11"/>
          <Typography variant='subtitle2'>
            Sony
          </Typography>
          <Typography variant="caption" sx={{color:'#007BFF',fontWeight:'700'}}>
            +8
          </Typography>
        </Box>
        <Box elevation={3} sx={{
          display:'flex',
          padding:'21px 0px 21px 0px',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'12px',
          borderRadius:'20px',
          boxShadow:'0px 4px 5.6px 0px rgba(0, 0, 0, 0.08)',
          minWidth: '150px',
          flexShrink:'0'
        }}>
          <img src={sony} alt="" width="60px" height="11"/>
          <Typography variant='subtitle2'>
            Sony
          </Typography>
          <Typography variant="caption" sx={{color:'#007BFF',fontWeight:'700'}}>
            +8
          </Typography>
        </Box>
        <Box elevation={3} sx={{
          display:'flex',
          padding:'21px 0px 21px 0px',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'12px',
          borderRadius:'20px',
          boxShadow:'0px 4px 5.6px 0px rgba(0, 0, 0, 0.08)',
          minWidth: '150px',
          flexShrink:'0'
        }}>
          <img src={sony} alt="" width="60px" height="11"/>
          <Typography variant='subtitle2'>
            Sony
          </Typography>
          <Typography variant="caption" sx={{color:'#007BFF',fontWeight:'700'}}>
            +8
          </Typography>
        </Box>
        <Box elevation={3} sx={{
          display:'flex',
          padding:'21px 0px 21px 0px',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'12px',
          borderRadius:'20px',
          boxShadow:'0px 4px 5.6px 0px rgba(0, 0, 0, 0.08)',
          minWidth: '150px',
          flexShrink:'0'
        }}>
          <img src={sony} alt="" width="60px" height="11"/>
          <Typography variant='subtitle2'>
            Sony
          </Typography>
          <Typography variant="caption" sx={{color:'#007BFF',fontWeight:'700'}}>
            +8
          </Typography>
        </Box>
      
        
      </Container>
      

    </Box>
  )
}

export default HeaderBrand