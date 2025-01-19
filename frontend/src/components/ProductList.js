import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import Products from '../utils/products.json'
import SortByDropdown from "./SortByDropdown";
import { Box, IconButton } from "@mui/material";

const ProductList = ({ products }) => {

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <SortByDropdown />
      </Box>

      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>

  );
};

export default ProductList;
