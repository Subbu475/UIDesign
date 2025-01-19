import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, Checkbox, FormControlLabel, Button, TextField, InputAdornment, Avatar, ListItemAvatar, Slider } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Products from '../utils/products.json'
import SearchIcon from '@mui/icons-material/Search';

import nikeLogo from '../assets/brands/Nike.png';
import adidasLogo from '../assets/brands/Adidas.png';

import nbLogo from '../assets/brands/New Balance.png';
import pumaLogo from '../assets/brands/Puma.png';
import uniqloLogo from '../assets/brands/Uniqlo.png';



const SidebarFilter = ({ onFilterChange }) => {
  const [brands, setBrand] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([100, 700])
  const [sizes, setSizes] = useState([]);
  const [activeSize, setActiveSize] = useState(null);
  const [colors, setsetColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);

  const fetchBrands = () => {
    let getBrands = Products?.map((item) => item?.brand);
    let getSize = Products?.flatMap((item) => item?.size);
    const colors = [...new Set(Products.map(product => product.color))];
    setsetColors(colors);
    setSizes([...Array.from(new Set(getSize)), 'Clear']);
    setBrand(Array.from(new Set(getBrands)));
    setFilteredBrands(Array.from(new Set(getBrands)));
  }

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = brands.filter((brand) =>
      brand.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBrands(filtered);
  };

  const handleColorClick = (color) => {
    setActiveColor(color);
    onFilterChange({ color });
  };
  const [selectedBrands, setSelectedBrands] = useState([]);
  const handleBrandClick = (e, brand) => {
    const updatedBrands = e.target.checked
      ? [...selectedBrands, brand]
      : selectedBrands.filter((item) => item !== brand);

    setSelectedBrands(updatedBrands);
    onFilterChange({ brands: updatedBrands });
  };

  const countItemsForBrand = (brand) => {
    return Products.filter((product) => product.brand === brand).length;
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    onFilterChange({ priceRange: newValue });
  };

  const handleSizeClick = (size) => {
    if (size === 'Clear') {
      setActiveSize("")
      onFilterChange({ size });
    } else {
      setActiveSize(size);
      onFilterChange({ size });
    }

  };

  useEffect(() => {
    fetchBrands();
  }, [])
  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Filter
        </Typography>
        <Typography sx={{ color: '#45C0CD' }}>
          Advanced
        </Typography>
      </div>

      <Box sx={{ mb: 3, borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1">Brand</Typography>
          <ArrowDropUpIcon />
        </div>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Brands..."
          value={searchTerm}
          onChange={handleSearch}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {filteredBrands.map((brand, index) => {

            let brandLogo;
            if (brand === 'Nike') brandLogo = nikeLogo;
            else if (brand === 'Adidas') brandLogo = adidasLogo;
            else if (brand === 'Puma') brandLogo = pumaLogo;
            else if (brand === 'New Balance') brandLogo = nbLogo;
            else if (brand === 'Uniqlo') brandLogo = uniqloLogo;
            else brandLogo = '';

            const itemCount = countItemsForBrand(brand);

            return (
              <ListItem key={index} disablePadding sx={{ display: 'flex', alignItems: 'center' }}>

                <FormControlLabel
                  control={<Checkbox />}
                  label=""
                  onChange={(e) => {
                    handleBrandClick(e, brand);
                  }}
                />


                <ListItemAvatar sx={{ mx: 1 }}>
                  <Avatar
                    src={brandLogo}
                    alt={brand}
                    sx={{ width: 24, height: 24 }}
                  />
                </ListItemAvatar>

                <Typography>{brand}</Typography>
                <Typography variant="body2" color="textSecondary" ml={1}>
                  {itemCount}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box sx={{ mb: 3, borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1">Price</Typography>
          <ArrowDropUpIcon />
        </div>
        <br />
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `₹${value}`}
          min={0}
          max={1000}
          step={10}
          sx={{ mt: 2, color: '#45C0CD' }}
        />
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {`₹${priceRange[0]} - ₹${priceRange[1]}`}
        </Typography>
      </Box>
      <Box sx={{ borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1">Size</Typography>
          <ArrowDropUpIcon />
        </div>

        <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {sizes.map((size, index) => (
            <ListItem key={index} disablePadding sx={{ width: 'auto' }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: activeSize === size ? "#45C0CD" : "#ccc",
                  color: activeSize === size ? "#45C0CD" : "#000",
                  '&:hover': {
                    borderColor: "#45C0CD",
                    backgroundColor: "#f0faff",
                  },
                  padding: "8px 16px",
                  textTransform: "none",
                }}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1">colors</Typography>
          <ArrowDropUpIcon />
        </div>
        <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {colors.map((color, index) => (
            <ListItem key={index} disablePadding sx={{ width: 'auto' }}>
              <Button
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: color,
                  border: activeColor === color ? '3px solid #45C0CD' : '2px solid #ccc', // Border highlighting
                  '&:hover': {
                    borderColor: "#45C0CD", // Hover effect
                    backgroundColor: "#f0faff", // Light background on hover
                  },
                  p: 0, // Remove padding
                  minWidth: 'auto', // Optional: make sure button size doesn't get too big
                }}
                onClick={() => handleColorClick(color)} // Handle color circle click
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SidebarFilter;

