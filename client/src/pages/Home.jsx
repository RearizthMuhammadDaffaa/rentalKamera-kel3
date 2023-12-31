import { Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Box } from '@mui/material'
import List from '../components/List'
import "./../app.css"
import HeaderBrand from '../components/HeaderBrand'
import axios from 'axios';

const Home = () => {
  const [data,setData] = useState([]);
  const getData = async ()=>{
    const response = await axios.get('http://localhost:5000/kamera')
    setData(response.data)
    
  }
  useEffect(()=>{  
    getData()
  },[])
  return (
   <div className="container">
      <Header />
      <HeaderBrand />
      {data.map((item)=>(
        <List kamera={item} key={item.id} />
      ))}
      
   </div>
  )
}

export default Home