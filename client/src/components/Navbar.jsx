import {
  Search,
  HomeOutlined,
  ShoppingBagOutlined,
  PersonOutlined,
  Home,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link ,useLocation} from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("Home");
  const [color, setColor] = useState("");
  const location = useLocation()
  console.log(location.pathname);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    if(location.pathname == '/profile'){
      handleChange('Profile')
    }else if(location.pathname == '/katalog'){
      handleChange('Katalog')
    } else{
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
      <BottomNavigation sx={{ gap: "35px" }}  value={value}>
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
      </BottomNavigation>
    </Paper>
  );
};

export default Navbar;
