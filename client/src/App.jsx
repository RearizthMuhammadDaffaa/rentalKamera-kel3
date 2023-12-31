import { useState } from 'react'
import {Box,CssBaseline,List,ListItem,ListItemAvatar,Avatar,Paper,BottomNavigation, BottomNavigationAction} from "@mui/material"
import { RestorePage } from '@mui/icons-material'
import {BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import Katalog from "./pages/Katalog"
import DetailKamera from "./pages/DetailKamera"
import Profile from "./pages/Profile"
import './app.css'
import Navbar from './components/Navbar'

function App() {

  return (
  <BrowserRouter>
  <Routes>
    

    <Route path='/' element={<Home />}/>
    <Route path='/katalog' element={<Katalog />}/>
    <Route path='/:id' element={<DetailKamera />}/>
    <Route path='/profile' element={<Profile />}/>
  
  </Routes>
  <Navbar />
  </BrowserRouter>
  )
}

export default App
