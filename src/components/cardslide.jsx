import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import drug from '@/assets/svg/drug.svg';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { Pagination, Navigation } from 'swiper/modules';
import {
  Button,
  IconButton,
  Box,
} from '@mui/material';
import { ShoppingBasket } from 'lucide-react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';

const items = [
  {
    id: 1,
    title: 'Супрастинекс таблетки покрыт.плен.об. 5 мг ...',
    price: 150,
    oldPrice: 150,
    rating: 0,
    country: 'Германия',
    image: drug,
  },
  {
    id: 2,
    title: 'Супрастинекс таблетки покрыт.плен.об. 5 мг ...',
    price: 45,
    oldPrice: 60,
    rating: 5.0 ,
    country: 'Sandoz, Турция',
    image: drug,
  },
  {
    id: 250,
    title: 'Супрастинекс таблетки покрыт.плен.об. 5 мг ...',
    price: 80,
    oldPrice: 100,
    rating: 0,
    country: 'Barbados, Австрия',
    image: drug,
  },
  {
    id: 2500,
    title: 'Супрастинекс таблетки покрыт.плен.об. 5 мг ...',
    price: 80,
    oldPrice: 100,
    rating: 0,
    country: 'Barbados, Австрия',
    image: drug,
  },
  
];

export default function CardSlide() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', py: 5 }}>
       
      <IconButton
        ref={prevRef}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '-68px',
          transform: 'translateY(-50%)',
          backgroundColor: '#8168F0',
          color: '#fff',
          '&:hover': { backgroundColor: '#61D2B9' },
          boxShadow: 3,
          width: '45px',
          height: '45px',
          zIndex: 10,
        }}
      >
        <ArrowBackIosRoundedIcon />
      </IconButton>

           
      <IconButton
        ref={nextRef}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-68px',
          transform: 'translateY(-50%)',
          backgroundColor: '#8168F0',
          color: '#fff',
          '&:hover': { backgroundColor: '#61D2B9' },
          boxShadow: 3,
         width: '45px',
          height: '45px',
          zIndex: 10,
        }}
      >
        <ArrowForwardIosRoundedIcon />
      </IconButton>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Pagination, Navigation]}
      >
        {items.map((item) => (
         <SwiperSlide key={item.id}>
  <Box sx={{ position: 'relative' }}>
    <img
      src={item.image}
      alt={item.title}
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
        bottom: 20,
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
      {item.oldPrice > item.price ? (
      
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}%
        </Typography>
      ) : (
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          Нет скидки
        </Typography>
      )
      }
    </Box>

    
    <IconButton
      onClick={() => toggleLike(item.id)}
      sx={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: liked[item.id] ? '#8168F0' : '#fff',
        '&:hover': {
          backgroundColor: liked[item.id] ? '#8168F0' : '#f0f0f0',
        },
        padding: '6px',
        borderRadius: '50%',
        boxShadow: 2,
        transition: 'all 0.3s ease',
      }}
    >
      <FavoriteIcon
        sx={{
          color: liked[item.id] ? '#FFFFFF' : '#D3D3D3',
          fontSize: 24,
          stroke: liked[item.id] ? '#fff' : 'none',
          strokeWidth: liked[item.id] ? 1.5 : 0,
          transition: 'all 0.3s ease',
        }}
      />
    </IconButton>
  </Box>

            <Box sx={{ textAlign: 'center', px: 3.5, mt: 3 }}>
              <Box sx={{ fontWeight: 'bold', fontSize: 24, textAlign: 'start', color: '#434343' }}>
                {item.price} сом.&nbsp;
                <del style={{ fontSize: 16, fontWeight: 'bold', color: '#BBC3CA' }}>
                  {item.oldPrice} сом.
                </del>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', color: '#BBC3CA', fontSize: 16, py: 0.5 }}>
                <StarBorderRoundedIcon sx={{ fontSize: 20, color: '#BBC3CA', mr: 0.5 }} />
                {item.rating > 0 ? `${item.rating} оценок` : 'Нет оценок'}
              </Box>

              <Box sx={{ color: '#8168F0', fontSize: 18, fontWeight: 600, textAlign: 'start' }}>
                Sandoz, {item.country}
              </Box>

              <Box sx={{ fontWeight: 800, fontSize: 18, py: 1.5, textAlign: 'start' }}>
                {item.title}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
