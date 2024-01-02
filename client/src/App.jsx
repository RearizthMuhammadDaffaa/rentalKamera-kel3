import { useState } from 'react'
import {Box,CssBaseline,List,ListItem,ListItemAvatar,Avatar,Paper,BottomNavigation, BottomNavigationAction} from "@mui/material"
import {  RestorePage } from '@mui/icons-material'
import {BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import Katalog from "./pages/Katalog"
import DetailKamera from "./pages/DetailKamera"
import Profile from "./pages/Profile"
import './app.css'
import Navbar from './components/Navbar'
import DaysTransaksi from './pages/DaysTransaksi'
import Dashboard from './pages/Dashboard'
import ListKamera from './pages/ListKamera'
import AddKamera from './pages/AddKamera'
import EditKamera from './pages/EditKamera'
import SearchList from './pages/SearchList'
import HoursTransaksi from './pages/HoursTransaksi'
import UserRental from './pages/UserRental'



function App() {

  return (
  <BrowserRouter>
  <Routes>
    

    <Route path='/' element={<Home />}/>
    <Route path='/katalog' element={<Katalog />}/>
    <Route path='/:id' element={<DetailKamera />}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/dashboard' element={<Dashboard />}/>
    <Route path='/dashboard/ListKamera' element={<ListKamera />}/>
    <Route path='/dashboard/UserRental' element={<UserRental />}/>
    <Route path='/dashboard/addkamera' element={<AddKamera />}/>
    <Route path='/dashboard/editkamera/:id' element={<EditKamera />}/>
    <Route path='/transaksi/:id' element={<DaysTransaksi />}/>
    <Route path='/day/:id' element={<HoursTransaksi/>}/>
    <Route path='/search/:search' element={<SearchList />}/>
  
  </Routes>
    <Navbar />
  </BrowserRouter>
  )
}

export default App
