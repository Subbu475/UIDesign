import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SidebarFilter from "./components/SidebarFilter";
import ProductList from "./components/ProductList";
import Products from './utils/products.json';

const App = () => {

  const [filteredProducts, setFilteredProducts] = useState(Products);

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

    setFilteredProducts(filtered);
  };

  return (
    <Box>
      <Navbar />
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
          <ProductList products={filteredProducts} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
