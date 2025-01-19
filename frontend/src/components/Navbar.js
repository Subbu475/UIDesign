import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from '../styles/Navbar.module.css';
import LanguageDropdown from './LanguageDropdown';
import UserDropdown from "./UserDropdown";
import IconWithBadge from "./IconWithBadge";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", color: '#45C0CD', fontSize: '2rem' }}>
          <span className={styles.geostarregular}>s</span>Stella
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 3 }}>
          <SearchIcon />
          <InputBase
            placeholder="What are you looking for?"
            sx={{ ml: 1, flex: 1, border: "1px solid #ddd", borderRadius: 2, padding: "2px 8px" }}
          />
        </Box>
        <IconWithBadge />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LanguageDropdown />
          <Typography variant="body2" sx={{ mx: 1, backgroundColor: '#E8ECED', padding: '4px 8px', borderRadius: '50%' }}>
            SI
          </Typography>
          <div>
            <Typography variant="body2" sx={{ color: '#cfd9df' }}>Welcome Back!</Typography>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Subramani</Typography>
          </div>
          <UserDropdown />

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
