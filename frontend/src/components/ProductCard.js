import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Chip, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ name, price, image, isNew, brand, uniqueId, totalItems, size }) => {
  const navigate = useNavigate();
  const imagePath = require(`../assets/shirts/${image}`);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };
  return (
    <Card sx={{
      width: {
        xs: "100%", sm: "90%", md: "300px", lg: "310px"
      }
      , position: "relative", cursor: 'pointer'
    }} >
      {isNew && (
        <Chip
          label="New Arrival"
          color="primary"
          size="small"
          sx={{ position: "absolute", top: 10, left: 10, backgroundColor: '#45C0CD', padding: '5px 10px', borderRadius: "4px" }}
        />
      )}
      <CardMedia
        component="img"
        height="500"
        image={imagePath}
        alt={name}
        sx={{ borderRadius: '20px' }}
        onClick={(e) => {
          navigate(`/product/${uniqueId}`)
        }}
      />
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="textSecondary">{brand}</Typography>
          <IconButton
            sx={{ color: isWishlisted ? "red" : "gray" }}
            onClick={handleWishlistToggle}
          >
            {isWishlisted ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>

        <Typography variant="h6">{name}</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }} onClick={(e) => {
          navigate(`/product/${uniqueId}`)
        }}>
          <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem' }}>
            <CurrencyRupeeIcon /> {price}
          </Typography>
          <Typography variant="body2" sx={{ color: 'red' }}>
            {totalItems} items left!
          </Typography>
        </div>

      </CardContent>
    </Card>
  );
};

export default ProductCard;
