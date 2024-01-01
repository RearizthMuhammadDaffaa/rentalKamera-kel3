import { Box, Container, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import sony from "../assets/img/image 1.png"
import axios from 'axios';

const HeaderBrand = ({type,setSelectedMerk}) => {
  const [data,setData] = useState([]);

  const getData = async ()=>{
    const response = await axios.get('http://localhost:5000/merk')
    setData(response.data)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <Box 
   
    sx={{display:'flex',marginTop:'15px',flexDirection:'column',paddingX:'7px'}}>
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
       
       {data.map((item)=>(
          <Box 
            key={item.id}
            component='div'
            onClick={()=>setSelectedMerk(item.name)}
          sx={{
            display:'flex',
            padding:'21px 0px 21px 0px',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:'12px',
            borderRadius:'20px',
            boxShadow:'0px 4px 5.6px 0px rgba(0, 0, 0, 0.08)',
            minWidth: '150px',
            flexShrink:'0',
            cursor:'pointer'
          }}>
            <img src={item.url} alt="" width="60px" height="11"/>
            <Typography variant='subtitle2'>
              {item.name}
            </Typography>
            <Typography variant="caption" sx={{color:'#007BFF',fontWeight:'700'}}>
              +8
            </Typography>
          </Box>
       ))}
        
       
        
      </Container>
      

    </Box>
  )
}

export default HeaderBrand