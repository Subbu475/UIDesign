import React from 'react';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const IconWithBadge = () => {

  const cartCount = 5;
  const favoriteCount = 2;

  return (
    <div>
      <IconButton>
        <Badge badgeContent={cartCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <IconButton>
        <Badge badgeContent={favoriteCount} color="error">
          <FavoriteBorderIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default IconWithBadge;
