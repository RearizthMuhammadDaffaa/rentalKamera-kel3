import {
  Search,
  HomeOutlined,
  ShoppingBagOutlined,
  PersonOutlined,
  Home,
  Dashboard,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Container, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link ,useLocation} from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("Home");
  const [color, setColor] = useState("");
  const location = useLocation()
 
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    if(location.pathname == '/profile'){
      handleChange('Profile')
    }else if(location.pathname == '/katalog'){
      handleChange('Katalog')
    }else if(location.pathname == '/dashboard'){
      handleChange('Dashboard')
    }
     else{
      handleChange('Home')
    }
  
  },[location.pathname])

  return (
   
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "12px 24px",      
      }}
      elevation={3}
    >
      <BottomNavigation sx={{ gap: "10px" }}  value={value}>
        <Link to="/" >
          <BottomNavigationAction
            value="Home"
            label="Home"
            icon={
              value === "Home" ? <Home color="primary" /> : <HomeOutlined />
            }
          />
        </Link>
        <Link to="/katalog">
          <BottomNavigationAction
            value="Katalog"
            label="Katalog"
            sx={{ color: value === "Katalog" ? "#007BFF" : "" }}
            icon={<ShoppingBagOutlined />}
          />
        </Link>
        <Link to="/profile">
          <BottomNavigationAction
            value="Profile"
            label="Profile"
            sx={{ color: value === "Profile" ? "#007BFF" : "" }}
            icon={<PersonOutlined />}
          />
        </Link>
        <Link to="/dashboard">
          <BottomNavigationAction
            value="Dashboard"
            label="dasboard"
            sx={{ color: value === "Dashboard" ? "#007BFF" : "" }}
            icon={<Dashboard />}
          />
        </Link>
      </BottomNavigation>
    </Paper>
   
  );
};

export default Navbar;
