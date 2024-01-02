import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import List from '../components/List'

const SearchList = () => {
  const [data,setData] = useState([])
  const {search} = useParams();

  const getData = async()=>{
    const response = await axios.get(`http://localhost:5000/kamera/search?name=${search}`)
    setData(response.data)
  }

  useEffect(()=>{
    getData()
    console.log(data);
  },[search])

  console.log(data);


  return (
   <Container
    sx={{
      width:{md:'50%',sm:'100%'}
    }}
   >
    <Header />
   
    {data.map((item)=>(
      <List kamera={item}/>
    ))}


   </Container>
  )
}

export default SearchList