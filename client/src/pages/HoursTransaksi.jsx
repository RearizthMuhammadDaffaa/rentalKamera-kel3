import { AccountBalanceOutlined, ArrowBack, CreditCardOutlined, PersonOutline } from '@mui/icons-material'
import { Box, Button, Container, InputBase, Typography } from '@mui/material'
import React from 'react'

const HoursTransaksi = () => {
  return (
    <Container sx={{
      height:'100vh',
      width:{md:'50%',sm:"100%"},
    }}>
      <Box display="flex" alignItems="center" gap="40px" padding="25px 0px" width='100%'>
        <Box
          display="flex"
          padding="12px 13px 12px 11px"
          alignItems="center"
          border="1px solid #007bff"
          sx={{
            borderRadius: "20px",
          }}
        >
          <ArrowBack />
        </Box>

        <Typography align="center" fontSize="16px" fontWeight="500">
          Waktu & Tanggal
        </Typography>
      </Box>
      <Container
       sx={{
        width:"100%"
       }}
      >

      </Container>
    <Container
      sx={{
        display:'flex',
        flexDirection:'column',
        alignitems:'center',
        gap:'24px',
        minHeight:'100vh'
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems='flex-start'
        gap="12px"
        alignSelf='stretch'
      >
        <Typography
          fontSize='18px'
          fontWeight='500'
        >
          NAMA
        </Typography>
        <Box 
          display='flex'
          alignItems='center'
          gap="24px"
          alignSelf='stretch'
          padding="0px 10px"
          border="1px solid #9b9b9b"
          borderRadius='16px'
        >
          <PersonOutline />
        <InputBase placeholder="Masukan Nama Anda"/>
        </Box>
        
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='flex-start'
        gap="12px"
        alignSelf='stretch'
      >
        <Typography
          fontSize='18px'
          fontWeight='500'
        >
          NO NIK
        </Typography>
        <Box 
          display='flex'
          alignItems='center'
          gap="24px"
          alignSelf='stretch'
          padding="0px 10px"
          border="1px solid #9b9b9b"
          borderRadius='16px'
        >
          <CreditCardOutlined />
        <InputBase placeholder="Masukan NIK Anda"/>
        </Box>
        
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='flex-start'
        gap="12px"
        alignSelf='stretch'
      >
        <Typography
          fontSize='18px'
          fontWeight='500'
        >
          PEMBAYARAN
        </Typography>
        <Box 
          display='flex'
          alignItems='center'
          gap="24px"
          alignSelf='stretch'
          padding="0px 10px"
          border="1px solid #9b9b9b"
          borderRadius='16px'
        >
          <AccountBalanceOutlined />
        <InputBase placeholder="Masukan Nama Anda"/>
        </Box>
       
      </Box>
      <Button variant="contained" sx={{
        display:'flex',
        padding:'12px 8px',
        borderRadius:'16px',
      }}> |PESAN SEKARANG</Button>
    </Container>
      
    </Container>
  )
}

export default HoursTransaksi