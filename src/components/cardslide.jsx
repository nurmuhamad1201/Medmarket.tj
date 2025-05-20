import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ShoppingBasket } from 'lucide-react';
 import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
export default function CardSlide({ id, title, price, oldPrice, rate, country, image }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <img
        src={image}
        alt={title}
        style={{
          borderRadius: 20,
          width: '100%',
          margin: 'auto',
          border: '2px solid #8168F0',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: "270px",
          left: 15,
          width: '68px',
          height: '30px',
          backgroundColor: '#35C128',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 700,
          fontSize: '13px',
          zIndex: 5,
        }}
      >
        {oldPrice > price ? (
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Нет скидки
          </Typography>
        )}
      </Box>

      <IconButton
        onClick={toggleLike}
        sx={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: liked ? '#8168F0' : '#fff',
          '&:hover': {
            backgroundColor: liked ? '#8168F0' : '#f0f0f0',
          },
          padding: '6px',
          borderRadius: '50%',
          boxShadow: 2,
          transition: 'all 0.3s ease',
        }}
      >
        <FavoriteIcon
          sx={{
            color: liked ? '#FFFFFF' : '#D3D3D3',
            fontSize: 24,
            stroke: liked ? '#fff' : 'none',
            strokeWidth: liked ? 1.5 : 0,
            transition: 'all 0.3s ease',
          }}
        />
      </IconButton>

      <Box sx={{ textAlign: 'center', px: 3.5, mt: 3 }}>
        <Box sx={{ fontWeight: 'bold', fontSize: 24, textAlign: 'start', color: '#434343' }}>
          {price} сом.&nbsp;
          <del style={{ fontSize: 16, fontWeight: 'bold', color: '#BBC3CA' }}>
            {oldPrice} сом.
          </del>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', color: '#BBC3CA', fontSize: 16, py: 0.5 }}>
          <StarBorderRoundedIcon sx={{ fontSize: 20, color: '#BBC3CA', mr: 0.5 }} />
          {rate > 0 ? `${rate} оценок` : 'Нет оценок'}
        </Box>

        <Box sx={{ color: '#8168F0', fontSize: 18, fontWeight: 600, textAlign: 'start' }}>
         {country}
        </Box>

        <Box sx={{ fontWeight: 800, fontSize: 18, py: 1.5, textAlign: 'start' }}>
          {title}
        </Box>
      </Box>

      <Button
        fullWidth
        startIcon={<ShoppingBasket />}
        sx={{
          backgroundColor: '#8168F0',
          color: '#fff',
          '&:hover': { backgroundColor: '#61D2B9' },
          py: '10px',
          borderRadius: '25px',
          mt: '10px',
          fontWeight: 600,
          fontSize: 15,
        }}
      >
        В корзину
      </Button>
    </Box>
  );
}