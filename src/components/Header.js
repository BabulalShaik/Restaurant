import React, { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider, Avatar } from "@mui/material"
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { NavLink } from 'react-router-dom';
import '.././styles/navigationstyles.css'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  
  const drawer = (
    <>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography
          component="div"
          variant='h6'
          sx={{ flexGrow: 1, my: 2 }}
          color={"goldenrod"}
        >
          <RestaurantIcon />
          My Restaurant</Typography>
        <Divider />
        <ul className="mobile_nav">
          <li>
            <NavLink activeClassName="active" to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={"/Restaurants"}>Restaurants</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={"/About"}>About</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={"/Contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={"/Cart"}>Cart</NavLink>
          </li>
        </ul>
      </Box>
      {document.cookie ? (<NavLink to='/logout'><Avatar alt="Avatar" src="https://www.superclouds.org/img/testimonials/male.png" sx={{ backgroundColor: 'white' }} /></NavLink>)
        : (<NavLink to='/login'> <Button variant='contained'>LogIn/Signup</Button></NavLink>)
      }
    </>
  )
  return (
    <>
      <Box >
        <AppBar sx={{ bgcolor: "black" }} component={"nav"}>
          <Toolbar>
            <IconButton
              color={"inherit"}
              aria-label='open drawer'
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" }
              }}
              onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <RestaurantIcon />
            <Typography
              component="div"
              variant='h6'
              sx={{ flexGrow: 1 }}
              color={"goldenrod"}>
              My Restaurant</Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul class="navigation_bar">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/Restaurants"}>Restaurants</NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"/Cart"}><Button sx={{ color: "blue", bgcolor: "darkred", marginLeft: "-20px" }}><ShoppingCartIcon /></Button></NavLink>
                </li>
              </ul>
            </Box>
            {document.cookie ? (<NavLink to='/logout'><Avatar alt="Avatar" src="https://www.superclouds.org/img/testimonials/male.png" sx={{ backgroundColor: 'white' }} /></NavLink>)
              : (<NavLink to='/login'> <Button variant='contained'>LogIn/Signup</Button></NavLink>)
            }
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { sm: "none", xs: "block" },
              "&.MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px"
              },
            }}>
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
}

export default Header;