import React, { useRef, useState } from 'react';
import persen from '@/assets/images/persen.jpg';
import searchdoc from '@/assets/images/searchdoc.png';
import fire from '@/assets/svg/fire.svg';
import drugswip from "@/assets/images/drugswip.png"
import CardSlide from '@/components/cardslide';
import { Box, Button, IconButton } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Helmet } from 'react-helmet';
import drug from '@/assets/svg/drug.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import BoltIcon from '@mui/icons-material/Bolt';
import aksiya from '@/assets/svg/aksiya.svg';
import map from '@/assets/images/map.png'
import CardSlide2 from '@/components/Cardslide2';
import ConnectPharmacy from '@/components/ConnectPharmacy';
export const itemsDay = [
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
  <title>Medmarket.tj - Онлайн Аптечный Маркетплейс</title>
  <meta name="description" content="Medmarket — таджикский аптечный маркетплейс для поиска и бронирования лекарств, медтехники и БАДов. Удобный онлайн-заказ с доставкой по Таджикистану." />
  <meta name="keywords" content="Medmarket, аптека онлайн, заказ лекарств, медтехника, БАДы, доставка по Таджикистану" />
  <meta name="robots" content="index, follow" />
  <meta name="og:title" content="Medmarket.tj - Онлайн Аптечный Маркетплейс" />
  <meta name="og:description" content="Medmarket — таджикский аптечный маркетплейс для поиска и бронирования лекарств, медтехники и БАДов. Удобный онлайн-заказ с доставкой по Таджикистану." />
  <meta name="og:type" content="website" />
  <meta name="og:url" content="https://medmarket.tj" />
</Helmet>
    <section className="w-[86%] mx-auto" role="main">
      
      <section
        className="flex flex-col lg:flex-row items-stretch justify-between gap-6 px-6 py-10 bg-white min-h-[450px]"
        aria-labelledby="hero-section"
      >


   <div className="lg:w-1/2 w-full flex items-center justify-center">
  <Swiper
    pagination={{
      dynamicBullets: true,
      clickable: true
    }}
    modules={[Pagination]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{ 
      delay: 3000,
      disableOnInteraction: false 
    }}
    loop={true}
    className="w-full h-full rounded-2xl overflow-hidden"
  >
    <SwiperSlide>
      <div className="relative w-full h-full">
        <img
          src={persen}
          alt="Изображение человека"
          className="w-full h-full object-cover"
        />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="relative w-full h-full">
        <img
          src={drugswip}
          alt="Drugswip изображение"
          className="w-full h-full object-cover"
        />
      </div>
    </SwiperSlide>
  </Swiper>
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
        <BoltIcon sx={{ color: '#FFDD00' , fontSize:"55px" }} />

            Хиты продаж
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

        <section className='grid grid-cols-3 gap-5 py-10'>
          <img src={drugswip} alt="" className='h-55 rounded-2xl' />
          <img src={persen} alt="" className='h-55 rounded-2xl'  />
          <img src={drugswip} alt="" className='h-55 rounded-2xl'  />
        </section>
       

    </section>
       <section className='bg-[#F4F5F8] px-[5%] py-16'>
        <h3
            id="featured-products"
            className="flex items-center gap-2"
            style={{
              fontWeight: 900,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: 0,
              paddingBottom:"20px",
              color: '#5B5858',
            }}
          >
            <img src={aksiya} className='h-9' alt="Огонь" />
            
            Товары дня
          </h3>

          <div className="flex gap-3">
  {[...Array(3)].map((_, index) => (
    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center">
        <img className="h-6" src="https://static.vitaexpress.ru/public/content/baseImg/logo.svg" alt="" />
        <span className="text-[10px] bg-[#61D2B966] text-white px-2 py-1 rounded">Осталось 20 дней</span>
      </div>
      <p className="text-lg font-medium mt-2">Большая весенняя распродажа. Скидки до -50%</p>
      <div className="flex items-center justify-between gap-2 mt-1">
        <span className="text-[#8168F0] text-xs font-medium">31.03.2025 - 20.05.2025</span>
        <button>
          <ArrowForwardIcon sx={{ color: "#8168F0", bgcolor: "#F4F5F8", width: "32px", height: "32px", borderRadius: "50%", p: "4px" }} />
        </button>
      </div>
    </div>
  ))}
</div>
</section>


 <section className='w-[86%] mx-auto py-10'>
 <h1 className='text-3xl text-center font-extrabold py-5'>Что значит «MEDMARKET — маркетплейс аптечных товаров»?</h1>
 
<div className="flex justify-between gap-10 p-4">
  <div className="text-center">
    <img src={map} alt="map" className="w-24 h-24 rounded-2xl mx-auto" />
    <span className="inline-block w-7 h-7 font-bold bg-[#F4F5F8] rounded-full mt-2">1</span>
    <p className="mt-2 text-sm">МедМаркет объединяет крупнейшие аптечные сети и интернет-аптеки.</p>
  </div>

  <div className="text-center">
    <img src={map} alt="map" className="w-24 h-24 rounded-2xl mx-auto" />
    <span className="inline-block w-7 h-7 font-bold bg-[#F4F5F8] rounded-full mt-2">1</span>
    <p className="mt-2 text-sm">МедМаркет объединяет крупнейшие аптечные сети и интернет-аптеки.</p>
  </div>

  <div className="text-center">
    <img src={map} alt="map" className="w-24 h-24 rounded-2xl mx-auto" />
    <span className="inline-block w-7 h-7 font-bold bg-[#F4F5F8] rounded-full mt-4">1</span>
    <p className="mt-2 text-sm">МедМаркет объединяет крупнейшие аптечные сети и интернет-аптеки.</p>
  </div>
</div>

 </section>

 <section className='w-[86%] mx-auto py-10' aria-label="Слайд товаров">
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
              paddingLeft:"20px"
            }}
          >
        Покупайте лекарство Пардифен
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
            <Box sx={{ position: 'relative' }}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
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
                  1024: { slidesPerView: 3.8, spaceBetween: 30 },
                }}
                style={{ padding: '0 15px' }}
              >
                {itemsDay.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CardSlide2 id={item.id}
                    title={item.title} firstImg={item.firstImg}oldPrice={item.oldPrice} image={item.image}  />
                    
                  </SwiperSlide>
                ))}
              </Swiper>

             
             
            </Box>
          </section>

      <section  className='w-[86%] mx-auto py-10'>
        <ConnectPharmacy />
      </section>

      <section style={{
   
  margin: '0 auto',
  paddingLeft: '10%',
  paddingRight: '10%',
  paddingBottom:"80px",
  paddingTop:"50px",
  backgroundColor:"#F4F5F8",

  fontFamily: 'Mulish, Arial, sans-serif',
  color: '#333'
}}>
  <h2 style={{
    fontSize: '28px',
    fontWeight: 800,
    lineHeight: 1.3,
    marginBottom: '25px',
    color: '#2a2a2a',
    textAlign: 'center'
  }}>
    MEDMARKET — все лекарства в Таджикистане.
  </h2>
  
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    lineHeight: 1.6
  }}>
    <p style={{
      fontSize: '20px',
      fontWeight: 500,
      margin: 0,
      color:"black"
    }}>
      «Medmarket» — маркетплейс аптечных товаров, который позволяет выгодно покупать медицинские препараты. Мы работаем с большинством аптечных сетей Москвы и Московской области, наши клиенты могут искать лекарства в аптеках на территории всего региона.
    </p>

    <p style={{
      fontSize: '20px',
      fontWeight: 500,
      margin: 0,
       color:"black"
    }}>
      <strong style={{
        fontWeight: 700,
        color: 'black'
      }}>Особенности маркетплейса «Medmarket»</strong><br />
      Каталог лекарств для интернет-аптек позволяет быстро находить препараты. Для товаров есть: полная инструкция по применению, список форм выпуска, данные о ценах и наличии в аптеках города. Введите название в строку поиска, и сайт предложит все препараты по вашему запросу.
    </p>

    <p style={{
      fontSize: '20px',
      fontWeight: 500,
      margin: 0,
       color:"black"
    }}>
      <strong style={{
        fontWeight: 700,
        color: 'black'
      }}>Покупка лекарств в «Medmarket»</strong><br />
      Чтобы купить лекарства в «Ютеке», нужно зайти в поиск, ввести названия препаратов, поместить их в корзину и выбрать адрес покупки. Искать товары в нашем аптечном интернет-магазине лекарств удобнее с помощью фильтра «По цене». Фильтр запускает поиск аптек с минимальной ценой на выбранные препараты. Когда заказ прибывает в аптечный пункт, мы отправляем клиенту
    </p>
  </div>
</section>

    </>
  );
}
