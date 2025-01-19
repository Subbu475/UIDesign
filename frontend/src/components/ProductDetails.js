import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Grid } from "@mui/material";
import Products from "../utils/products.json";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = Products.find((p) => p.uniqueId === id);
    const imagePath = require(`../assets/shirts/${product?.image}`);
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    },[])
    return (
        <Box sx={{ padding: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <img src={imagePath} alt={product.name} style={{ width: "100%", maxHeight: "700px", objectFit: "cover" }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4">{product.name}</Typography>
                    <Typography variant="h6" sx={{ color: "green", marginTop: 2 }}>₹{product.price}</Typography>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>{product.description}</Typography>
                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                        Brand: {product.brand}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                        Color: {product.color}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                        Size: {product.size.join(", ")}
                    </Typography>

                    <Box sx={{ marginTop: 3 }}>
                        <Button variant="contained" sx={{ marginRight: 2,backgroundColor:'#45C0CD',borderRadius:'20px' }}>
                            Add to Cart
                        </Button>
                        <Button variant="outlined" sx={{ marginRight: 2,borderRadius:'20px',color:'#45C0CD' }} onClick={() => navigate("/")}>
                            Back to Products
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetail;
