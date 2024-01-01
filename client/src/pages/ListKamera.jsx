import { ArrowBack } from '@mui/icons-material'
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ListKamera = () => {

  const [data,setData] = useState([]);
  const getData = async ()=>{
    const response = await axios.get('http://localhost:5000/kamera')
    setData(response.data)
    
  }
  useEffect(()=>{  
    getData()
  },[])


  return (
    <Container
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        paddingY:'100px'
        
      }}
    >
      <Container>
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
          Data Kamera
        </Typography>
      </Box>
      
       </Container>
         <Container
          sx={{
            display:'flex',
            justifyContent:'flex-end'
          }}
         >
          
          <Button>Add New</Button>
          </Container> 
        
        <Container
          sx={{
            height:'100%',
            paddingBottom:'30px'
          }}
        >
        <TableContainer component={Paper}
          
        >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>gambar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="center">Merk</TableCell>
            <TableCell align="center">lens</TableCell>
            <TableCell align="center">Cinemacam</TableCell>
            <TableCell align="center">battery</TableCell>
            <TableCell align="center">Harga/Hari</TableCell>
            <TableCell align="center">Harga/Jam</TableCell>
            <TableCell align="center">Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="right"><img src={row.url} alt="" width='50px'  height='50px'/></TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.merk}</TableCell>
              <TableCell align="right">{row.lens}</TableCell>
              <TableCell align="right">{row.cinemacam}</TableCell>
              <TableCell align="right">{row.battery}</TableCell>
              <TableCell align="right">{row.daysPrice}</TableCell>
              <TableCell align="right">{row.hoursPrice}</TableCell>
              <TableCell align="right">
                <Button>Update</Button>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>

    </Container>
  )
}

export default ListKamera