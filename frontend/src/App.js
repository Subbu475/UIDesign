import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SidebarFilter from "./components/SidebarFilter";
import ProductList from "./components/ProductList";
import Products from './utils/products.json';
import ProductDetail from "./components/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

const App = () => {

  const [filteredProducts, setFilteredProducts] = useState(Products);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (newSearchTerm) => {
    let filtered = [...Products];
    filtered = filtered.filter((product) => product.name.toLowerCase().includes(newSearchTerm.toLowerCase()));
    setFilteredProducts(filtered);
    setSearchTerm(newSearchTerm);
  };

  const handleFilterChange = (filters) => {
    let filtered = [...Products];

    console.log(filters, "filters");
    if (filters.brands && filters.brands.length > 0) {
      filtered = filtered.filter((product) => filters.brands.includes(product.brand));
    }

    if (filters.color) {
      filtered = filtered.filter((product) => product.color === filters.color);
    }

    if (filters.size) {
      if (filters.size === 'Clear') {
        filtered = filtered;
      }
      else {
        filtered = filtered.filter((product) => product.size.includes(filters.size));
      }

    }

    if (filters.priceRange) {
      const price = filters.priceRange;
      filtered = filtered.filter((product) => product.price >= price[0] && product.price <= price[1]);
    }

    filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(filtered, "filtered")
    setFilteredProducts(filtered);
  };

  return (
    <BrowserRouter>
      <Box>
        <Navbar onSearchChange={handleSearchChange} />
        <Banner />
        <Grid
          container
          spacing={2}
          sx={{
            padding: 2,
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Grid item xs={12} md={3} lg={3}>
            <SidebarFilter onFilterChange={handleFilterChange} />
          </Grid>
          <Grid item xs={12} md={9} lg={9}>

            <Routes>
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/" element={<ProductList products={filteredProducts} />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>

          </Grid>

        </Grid>
      </Box>
    </BrowserRouter>
  );
};

export default App;
