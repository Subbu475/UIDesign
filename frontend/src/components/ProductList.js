import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import Products from '../utils/products.json'

const ProductList = ({ products }) => {

  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
