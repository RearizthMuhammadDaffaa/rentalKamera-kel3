import { Search } from '@mui/icons-material'
import React from 'react'
import Header from '../components/Header'
import { Box } from '@mui/material'
import List from '../components/List'
import "./../app.css"
import HeaderBrand from '../components/HeaderBrand'

const Home = () => {
  return (
   <div className="container">
      <Header />
      <HeaderBrand />
      <List />
   </div>
  )
}

export default Home