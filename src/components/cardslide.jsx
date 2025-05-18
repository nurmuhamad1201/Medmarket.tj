import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import drug from '@/assets/svg/drug.svg';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { Pagination, Navigation } from 'swiper/modules';
import { Button, IconButton, Box } from '@mui/material';
import { ShoppingBasket } from 'lucide-react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function CardSlide() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box sx={{ position: 'relative', width: '100%', py: 5 }}>
      {/* Previous Button */}
      <IconButton
        ref={prevRef}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '-48px',
          transform: 'translateY(-50%)',
          backgroundColor: '#8168F0',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#61D2B9',
          },
          boxShadow: 3,
          width: 48,
          height: 48,
          zIndex: 10,
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      {/* Next Button */}
      <IconButton
        ref={nextRef}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-48px',
          transform: 'translateY(-50%)',
          backgroundColor: '#8168F0',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#61D2B9',
          },
          boxShadow: 3,
          width: 48,
          height: 48,
          zIndex: 10,
        }}
      >
        <ChevronRightIcon />
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
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src={drug}
              alt=""
              style={{
                borderRadius: 20,
                width: '100%',
                margin: 'auto',
                border: '2px solid #8168F0',
              }}
            />
            <Box sx={{ textAlign: 'center', px: 3.5, mt: 3 }}>
              <Box sx={{ fontWeight: 'bold', fontSize: 24, textAlign: 'start', color: '#434343' }}>
                99 сом.&nbsp;
                <del style={{ fontSize: 16, fontWeight: 'bold', color: '#BBC3CA' }}>150 сом.</del>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', color: '#BBC3CA', fontSize: 16, py: 0.5 }}>
                <StarBorderRoundedIcon sx={{ fontSize: 20, color: '#BBC3CA', mr: 0.5 }} />
                Нет оценок
              </Box>

              <Box sx={{ color: '#8168F0', fontSize: 18, fontWeight: 600, textAlign: 'start' }}>
                Sandoz, Германия
              </Box>

              <Box sx={{ fontWeight: 800, fontSize: 18, py: 1.5, textAlign: 'start' }}>
                Супрастинекс таблетки покрыт.плен.об. 5 мг ...
              </Box>
            </Box>

            <Button
              fullWidth
              startIcon={<ShoppingBasket />}
              sx={{
                backgroundColor: '#8168F0',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#61D2B9',
                },
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
