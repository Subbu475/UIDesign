
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
  Button,
  TextField,
  InputAdornment,
  Avatar,
  ListItemAvatar,
  Slider,
  Modal,
  IconButton
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Products from "../utils/products.json";
import nikeLogo from "../assets/brands/Nike.png";
import adidasLogo from "../assets/brands/Adidas.png";
import nbLogo from "../assets/brands/New Balance.png";
import pumaLogo from "../assets/brands/Puma.png";
import uniqloLogo from "../assets/brands/Uniqlo.png";

const SidebarFilter = ({ onFilterChange }) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [modalOpen, setModalOpen] = useState(false);

  const [brands, setBrand] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([100, 700]);
  const [sizes, setSizes] = useState([]);
  const [activeSize, setActiveSize] = useState(null);
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const fetchBrands = () => {
    const getBrands = Products?.map((item) => item?.brand);
    const getSize = Products?.flatMap((item) => item?.size);
    const uniqueColors = [...new Set(Products.map((product) => product.color))];
    setColors(uniqueColors);
    setSizes([...Array.from(new Set(getSize)), "Clear"]);
    setBrand(Array.from(new Set(getBrands)));
    setFilteredBrands(Array.from(new Set(getBrands)));
  };

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
    if (size === "Clear") {
      setActiveSize("");
      onFilterChange({ size: null });
    } else {
      setActiveSize(size);
      onFilterChange({ size });
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const SidebarContent = () => (
    <Box sx={{ overflow: 'auto' }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Filter
        </Typography>
        <Typography sx={{ color: "#45C0CD" }}>Advanced</Typography>
      </Box>

      <Box
        sx={{
          mb: 3,
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "10px 20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">Brand</Typography>
          <ArrowDropUpIcon />
        </Box>

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
            const brandLogo =
              {
                Nike: nikeLogo,
                Adidas: adidasLogo,
                Puma: pumaLogo,
                "New Balance": nbLogo,
                Uniqlo: uniqloLogo,
              }[brand] || "";

            const itemCount = countItemsForBrand(brand);

            return (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "flex", alignItems: "center" }}
              >
                <FormControlLabel
                  control={<Checkbox checked={selectedBrands.includes(brand)}/>}
                  label=""
                  onChange={(e) => handleBrandClick(e, brand)}
                />

                <ListItemAvatar sx={{ mx: 1 }}>
                  <Avatar src={brandLogo} alt={brand} sx={{ width: 24, height: 24 }} />
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

      
      <Box
        sx={{
          mb: 3,
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "10px 20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">Price</Typography>
          <ArrowDropUpIcon />
        </Box>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `₹${value}`}
          min={0}
          max={1000}
          step={10}
          sx={{ mt: 2, color: "#45C0CD" }}
        />
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {`₹${priceRange[0]} - ₹${priceRange[1]}`}
        </Typography>
      </Box>

     
      <Box
        sx={{
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "10px 20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">Size</Typography>
          <ArrowDropUpIcon />
        </Box>

        <List sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {sizes.map((size, index) => (
            <ListItem key={index} disablePadding sx={{ width: "auto" }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: activeSize === size ? "#45C0CD" : "#ccc",
                  color: activeSize === size ? "#45C0CD" : "#000",
                  "&:hover": {
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

      
      <Box
        sx={{
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "10px 20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">Colors</Typography>
          <ArrowDropUpIcon />
        </Box>
        <List sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {colors.map((color, index) => (
            <ListItem key={index} disablePadding sx={{ width: "auto" }}>
              <Button
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: color,
                  border:
                    activeColor === color
                      ? "3px solid #45C0CD"
                      : "2px solid #ccc",
                  "&:hover": {
                    borderColor: "#45C0CD",
                    backgroundColor: "#f0faff",
                  },
                  p: 0,
                  minWidth: "auto",
                }}
                onClick={() => handleColorClick(color)}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box>
      {!isMobile ? (
        <SidebarContent />
      ) : (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              height: "450px",
              maxHeight: "80vh",
              overflowY: "auto",


            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6">Advanced Filters</Typography>
              <IconButton onClick={() => setModalOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <SidebarContent />
          </Box>
        </Modal>
      )}
      {isMobile && (
        <Button onClick={() => setModalOpen(true)} sx={{ mt: 2 ,color:'#45C0CD'}}>
          Open Filters
        </Button>
      )}
    </Box>
  );
};

export default SidebarFilter;
