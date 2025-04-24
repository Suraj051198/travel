import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
  Container
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: trigger ? 1 : 0,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 700,
                letterSpacing: '.1rem',
              }}
            >
              TRAVEL APP
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={RouterLink}
                to="/"
                color="primary"
                sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.04)' } }}
              >
                Home
              </Button>
              <Button
                component={RouterLink}
                to="/destinations"
                color="primary"
                sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.04)' } }}
              >
                Destinations
              </Button>
              <Button
                component={RouterLink}
                to="/about"
                color="primary"
                sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.04)' } }}
              >
                About
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                color="primary"
                sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.04)' } }}
              >
                Contact
              </Button>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={RouterLink} to="/" onClick={handleClose}>
                  Home
                </MenuItem>
                <MenuItem component={RouterLink} to="/destinations" onClick={handleClose}>
                  Destinations
                </MenuItem>
                <MenuItem component={RouterLink} to="/about" onClick={handleClose}>
                  About
                </MenuItem>
                <MenuItem component={RouterLink} to="/contact" onClick={handleClose}>
                  Contact
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Navbar; 