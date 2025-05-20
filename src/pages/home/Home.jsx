import React, { useRef, useState } from 'react';
import persen from '@/assets/images/persen.jpg';
import searchdoc from '@/assets/images/searchdoc.png';
import fire from '@/assets/svg/fire.svg';
import CardSlide from '@/components/cardslide';
import { Box, Button, IconButton } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Helmet } from 'react-helmet';
import drug from '@/assets/svg/drug.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const itemsDay = [
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


const cardData = [
  {
    title: 'Заказ Медтехнику',
    bgColor: '#8168F0',
  },
  {
    title: 'Отправьте фото рецепта',
    bgColor: '#8168F0',
  },
  {
    title: 'Витамины и БАДы из Кореи',
    bgColor: '#3CC9A9',
  },
  {
    title: 'Лекарства под заказ из-за границы',
    bgColor: '#3CC9A9',
  },
];

export default function Home() {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <>
    <Helmet>
     <title>Medmarket.tj</title>
     <meta name="description" content="Онлайн заказ лекарств, медтехники и БАДов. Доставка по Таджикистану." />
    </Helmet>

    <main className="w-[86%] mx-auto" role="main">
      {/* Hero Section */}
      <section
        className="flex flex-col lg:flex-row items-stretch justify-between gap-6 px-6 py-10 bg-white min-h-[450px]"
        aria-labelledby="hero-section"
      >
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <img
            src={persen}
            className="w-full h-full object-cover rounded-2xl"
            alt="Изображение человека"
          />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2"
          aria-label="Услуги"
        >
          {cardData.map((card, index) => (
            <article
              key={index}
              className="relative rounded-2xl h-44 sm:h-48 p-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: card.bgColor }}
            >
             <h3 className="absolute top-4 left-4 text-white text-lg sm:text-xl font-bold leading-tight">
              {card.title}
            </h3>

              <img
                src={searchdoc}
                alt="Иконка документа"
                className="absolute bottom-4 right-4 w-24 h-24 object-contain"
              />
            </article>
          ))}
        </div>
      </section>

     
      <section className="py-10" aria-labelledby="featured-products">
        <header className="flex items-center justify-between pb-10">
          <h3
            id="featured-products"
            className="flex items-center gap-2"
            style={{
              fontWeight: 900,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: 0,
              color: '#5B5858',
            }}
          >
            <img src={fire} alt="Огонь" />

            Товары дня
          </h3>
          <Button
            variant="outlined"
            sx={{
              color: '#8168F0',
              borderColor: '#8168F0',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '20px',
              padding: '10px 10px',
              borderRadius: '20px',
              '&:hover': { backgroundColor: '#8168F0', color: '#fff' },
            }}
          >
            Посмотреть все
          </Button>
        </header>

      <section aria-label="Слайд товаров">
            <Box sx={{ position: 'relative' }}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  setSwiperInstance(swiper);
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                  640: { slidesPerView: 1.2, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 25 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                style={{ padding: '0 15px' }}
              >
                {itemsDay.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CardSlide {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Prev Button */}
              <IconButton
                ref={prevRef}
                onClick={() => swiperInstance?.slidePrev()}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: { xs: '-15px', md: '-60px' },
                  transform: 'translateY(-50%)',
                  backgroundColor: '#8168F0',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#61D2B9' },
                  boxShadow: 3,
                  width: { xs: '20px', md: '45px' },
                  height: { xs: '20px', md: '45px' },
                  zIndex: 10,
                }}
              >
                <ArrowBackIosRoundedIcon />
              </IconButton>

              {/* Next Button */}
              <IconButton
                ref={nextRef}
                onClick={() => swiperInstance?.slideNext()}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: { xs: '-15px', md: '-60px' },
                  transform: 'translateY(-50%)',
                  backgroundColor: '#8168F0',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#61D2B9' },
                  boxShadow: 3,
                  width: { xs: '20px', md: '45px' },
                  height: { xs: '20px', md: '45px' },
                  zIndex: 10,
                }}
              >
                <ArrowForwardIosRoundedIcon />
              </IconButton>
            </Box>
          </section>
        </section>
       
    </main>
    </>
  );
}
