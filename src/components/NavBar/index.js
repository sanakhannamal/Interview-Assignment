
import React from "react";
import i2cLogo from '../../assets/i2clogo.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";
import './index.css';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', width: 250 }}
    >
      <List>
        {['About us', 'Registration', 'Careers', 'Contact us'].map((text) => (
          <ListItem button key={text} component="a" href="/">
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="navbar">
        <Box sx={{ flexGrow: 1 }}>
          <img className="logo" src={i2cLogo} alt="logo" />
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box className="right-nav" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography variant="body1" className="nav-tags" sx={{ mr: 2 }}>
              <a href="/">About us</a>
            </Typography>
            <Typography variant="body1" className="nav-tags" sx={{ mr: 2 }}>
              <a href="/">Registration</a>
            </Typography>
            <Typography variant="body1" className="nav-tags" sx={{ mr: 2 }}>
              <a href="/">Careers</a>
            </Typography>
            <Button variant="contained" className="button">
              Contact us
            </Button>
          </Box>
      </Toolbar>
    </AppBar>
    <Drawer
    anchor="right"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    sx={{ display: { xs: 'block', md: 'none' } }}
  >
    {drawer}
  </Drawer>
  </>
  );
};

export default NavBar;