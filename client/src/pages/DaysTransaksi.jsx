import { Box, Button, Container, InputBase, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowBack ,PersonOutline,CreditCardOutlined,AccountBalanceOutlined} from "@mui/icons-material";
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import { useParams } from "react-router-dom";
import axios from "axios";


const DaysTransaksi = () => {
  const {id} = useParams();
  const [data,setData] = useState({})
  const [hargaTotal,setHargaTotal] = useState(data.daysPrice)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const getData = async () =>{
    const response = await axios.get(`http://localhost:5000/kamera/${id}`)
    setData(response.data)
  }
  function calculateHarga(item){
    setDate([item.selection]);
    const differenceInTime = item.selection.endDate.getTime() - item.selection.startDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Perbedaan waktu dalam hari
  
    // Memperbarui harga total
    if (differenceInDays > 0 && data.daysPrice) {
      setHargaTotal(data.daysPrice * differenceInDays);
    } else {
      setHargaTotal(0); // Menghindari harga negatif jika tidak ada perbedaan hari atau harga awal tidak tersedia
    }
  }

  
  useEffect(()=>{
    
    
    getData(id)
  },[hargaTotal])
 


 

  


  return (
    <Container sx={{
      height:'100vh',
      width:'100%'
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

      <DateRange
  editableDateInputs={true}
  onChange={item => {
    calculateHarga(item)
  }}

  moveRangeOnFirstSelection={false}
  ranges={date}
/>
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
      }}>{hargaTotal} |PESAN SEKARANG</Button>
    </Container>
      
    </Container>
  );
};

export default DaysTransaksi;
