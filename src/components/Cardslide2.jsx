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

export default function CardSlide2({ id, title, price, oldPrice, rate, country, image }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <Box sx={{ 
      position: 'relative',
      width: 'calc(33.33% - 16px)',
      minWidth: '280px',
      mx: '8px',
      flexShrink: 0
    }}>
      <img
        src={image}
        alt={title}
        style={{
          borderRadius: 16,
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          border: '1.5px solid #8168F0',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          width: '52px',
          height: '24px',
          backgroundColor: '#35C128',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 700,
          fontSize: '11px',
          zIndex: 5,
        }}
      >
        {oldPrice > price ? (
          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.7rem' }}>
            -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.7rem' }}>
            Нет скидки
          </Typography>
        )}
      </Box>

      <IconButton
        onClick={toggleLike}
        sx={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          backgroundColor: liked ? '#8168F0' : '#fff',
          '&:hover': {
            backgroundColor: liked ? '#8168F0' : '#f0f0f0',
          },
          padding: '4px',
          borderRadius: '50%',
          boxShadow: 1,
          transition: 'all 0.3s ease',
        }}
      >
        <FavoriteIcon
          sx={{
            color: liked ? '#FFFFFF' : '#D3D3D3',
            fontSize: 18,
            stroke: liked ? '#fff' : 'none',
            strokeWidth: liked ? 1.5 : 0,
            transition: 'all 0.3s ease',
          }}
        />
      </IconButton>

      <Box sx={{ textAlign: 'center', px: 1.5, mt: 1.5 }}>
        

        

      

        <Box sx={{ 
          fontWeight: 800, 
          fontSize: 15, 
          py: 0.8, 
          textAlign: 'start',
          lineHeight: 1.3
        }}>
          {title}
        </Box>
      </Box>

      <Button
        fullWidth
        startIcon={<ShoppingBasket size={16} />}
        sx={{
          backgroundColor: '#8168F0',
          color: '#fff',
          '&:hover': { backgroundColor: '#61D2B9' },
          py: '8px',
          borderRadius: '12px',
          fontWeight: 600,
          fontSize: 14,
          mt: 1,
          display: 'flex',
          justifyContent: 'space-between',
          px: 2
        }}
      >
          <Typography sx={{fontSize:"13px", fontWeight:"600" , marginRight:"20px"}}>В корзину</Typography>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}>
          <Typography sx={{ 
            fontWeight: 700, 
            fontSize: '15px',
            color: '#fff'
          }}>
            {price} сом.
          </Typography>
          {oldPrice > price && (
            <Typography sx={{ 
              fontSize: '12px',
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'line-through'
            }}>
              {oldPrice} сом.
            </Typography>
          )}
        </Box>
        
      </Button>
    </Box>
  );
}