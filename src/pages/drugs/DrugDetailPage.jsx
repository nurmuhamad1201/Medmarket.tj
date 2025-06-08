import CardSlide from "@/components/cardslide";
import { ProductDetail } from "@/components/ProductDetail";
import { Box, Button, IconButton, Rating } from "@mui/material";
import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { itemsDay } from "../home/Home";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Navigation } from "swiper/modules";
import PersonIcon from "@mui/icons-material/Person";
import { Helmet } from "react-helmet";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import sertificate from "@/assets/svg/sertificate.svg";
export default function DrugDetailPage() {
  const { drugID } = useParams();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Create refs for each section
  const mainRef = useRef(null);
  const analogsRef = useRef(null);
  const instructionsRef = useRef(null);
  const certificatesRef = useRef(null);
  const relatedRef = useRef(null);
  const reviewsRef = useRef(null);

  const formatDrugName = (name) => {
    return decodeURIComponent(name).replace(/-/g, " ");
  };

  const displayName = formatDrugName(drugID);
  const pageTitle = `${displayName} - Описание, инструкция, аналоги | Аптека`;
  const pageDescription = `Полная информация о препарате ${displayName}: состав, инструкция по применению, аналоги, сертификаты качества. Покупайте в нашей аптеке с гарантией качества.`;

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const tabs = [
    { name: "Основное", ref: mainRef },
    { name: "Аналоги", ref: analogsRef },
    { name: "Инструкция", ref: instructionsRef },
    { name: "Сертификаты", ref: certificatesRef },
    { name: "С этим берут", ref: relatedRef },
    { name: "Отзывы", ref: reviewsRef },
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          name="keywords"
          content={`${displayName}, лекарство, препарат, инструкция, аналоги, купить`}
        />
        <link
          rel="canonical"
          href={`https://yourpharmacy.com/drugs/${drugID}`}
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="w-[86%] mx-auto px-4 py-8">
        <nav aria-label="Хлебные крошки">
          <ol className="flex items-center flex-wrap gap-x-1 gap-y-1">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="text-gray-500 hover:text-purple-600 transition-colors"
              >
                Главная
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="inline-flex items-center">
              <Link
                to="/categories"
                className="text-gray-500 hover:text-purple-600 transition-colors"
              >
                Категории
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="inline-flex items-center">
              <Link
                to="/categories/medicines"
                className="text-gray-500 hover:text-purple-600 transition-colors"
              >
                Лекарства
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="inline-flex items-center">
              <Link
                to="/categories/medicines/pain"
                className="text-gray-500 hover:text-purple-600 transition-colors"
              >
                Боль, температура
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="inline-flex items-center">
              <Link
                to="/categories/medicines/pain/hormones"
                className="text-gray-500 hover:text-purple-600 transition-colors"
              >
                Гормоны-кортикостероиды
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-purple-600 font-semibold" aria-current="page">
              {displayName}
            </li>
          </ol>
        </nav>

        <article>
          <header>
            <h1 className="text-3xl font-extrabold text-[#000000] mb-6">
              {displayName}, 0.01%, аэрозоль для местного и наружного
              применения, 30 мл, 1 шт., Фармстандарт
            </h1>
          </header>

          <nav aria-label="Навигация по странице препарата">
            <div className="flex flex-wrap justify-around gap-4 w-full border-b border-[#C9C9C9] mb-4">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => scrollToSection(tab.ref)}
                  className={`pb-2 px-2 text-[20px] font-medium transition-colors duration-200 ${
                    index === 0
                      ? "text-[#000000] border-b-[3px] border-[var(--Color-main,#8168F0)]"
                      : "text-gray-600 hover:text-[#8168F0]"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </nav>

          <section ref={mainRef} itemScope itemType="https://schema.org/Drug">
            <ProductDetail />
          </section>

          <section
            ref={analogsRef}
            className="py-10"
            aria-labelledby="analogs-heading"
          >
            <h2 id="analogs-heading" className="font-black text-3xl ml-3 py-10">
              Аналоги Митрасептин-Про
            </h2>
            <Box sx={{ position: "relative" }}>
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
                style={{ padding: "0 15px" }}
              >
                {itemsDay.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CardSlide {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <IconButton
                ref={prevRef}
                onClick={() => swiperInstance?.slidePrev()}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: "-15px", md: "-60px" },
                  transform: "translateY(-50%)",
                  backgroundColor: "#8168F0",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#61D2B9" },
                  boxShadow: 3,
                  width: { xs: "20px", md: "45px" },
                  height: { xs: "20px", md: "45px" },
                  zIndex: 10,
                }}
              >
                <ArrowBackIosRoundedIcon />
              </IconButton>

              <IconButton
                ref={nextRef}
                onClick={() => swiperInstance?.slideNext()}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: { xs: "-15px", md: "-60px" },
                  transform: "translateY(-50%)",
                  backgroundColor: "#8168F0",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#61D2B9" },
                  boxShadow: 3,
                  width: { xs: "20px", md: "45px" },
                  height: { xs: "20px", md: "45px" },
                  zIndex: 10,
                }}
              >
                <ArrowForwardIosRoundedIcon />
              </IconButton>
            </Box>
          </section>

          <section
            ref={instructionsRef}
            className="py-10"
            aria-labelledby="instructions-heading"
          >
            <h2
              id="instructions-heading"
              className="font-black text-3xl ml-3 py-10"
            >
              Инструкция по применению {displayName}
            </h2>
            <div itemScope itemType="https://schema.org/Drug">
              <p className="font-semibold text-[25px]" itemProp="description">
                0.01%, аэрозоль для местного и наружного применения, 30 мл, 1
                шт.
              </p>

              <section
                id="composition"
                className="py-8"
                itemScope
                itemType="https://schema.org/Drug"
              >
                <h3 className="text-3xl font-extrabold mb-4">Состав</h3>
                <div className="font-mulish font-normal text-[22px] leading-[39px] tracking-normal">
                  <h3 className="mb-4">Состав на 100 мл:</h3>
                  <ul className="space-y-4">
                    <li>
                      <span className="font-semibold">
                        Действующее вещество:
                      </span>
                      <ul className="mt-2  ">
                        <li className=" ">
                          Бензилдиметил[3-(миристоиламино)пропил] аммоний хлорид
                          10,0 мг
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-semibold">
                        Вспомогательные вещества:
                      </span>
                      <ul className="mt-2   space-y-2">
                        <li className=" ">Вода очищенная до 100 мл</li>
                        <li className=" ">Азот до 5 бар</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <h3 className="text-3xl font-extrabold pt-2 my-4">Описание</h3>
                <div className="font-mulish font-normal text-[22px] leading-[39px] tracking-normal">
                  <p className="mb-4">
                    Прозрачная бесцветная жидкость, пенящаяся при встряхивании,
                    находящаяся под давлением в алюминиевом баллоне, снабженном
                    насадкой и защитным колпачком; препарат при выходе из
                    баллона распыляется в виде аэрозольной струи.
                  </p>
                  <p className="mb-4">Фармакотерапевтическая группа</p>
                  <p className="mb-4">Антисептическое средство</p>
                </div>

                <h3 className="text-3xl font-extrabold pt-2 my-4">
                  Фармакодинамика
                </h3>
                <div className="font-mulish font-normal text-[22px] leading-[39px] tracking-normal">
                  <p className="mb-4">
                    Бензилдиметил-миристоиламино-пропиламмоний обладает широким
                    спектром антимикробного действия, включая госпитальные
                    штаммы, резистентные к антибиотикам. Препарат оказывает
                    выраженное бактерицидное действие в отношении
                    грамположительных (Staphylococcus spp., Streptococcus spp.,
                    Streptococcus pneumoniae и др.), грамотрицательных
                    (Pseudomonas aeruginosa, Escherichia coli, Klebsiella spp. и
                    др.), аэробных и анаэробных бактерий, определяемых в виде
                    монокультур и микробных ассоциаций, включая госпитальные
                    штаммы с полирезистентностью к антибиотикам. Оказывает
                    противогрибковое действие на аскомицеты рода Aspergillus и
                    рода Penicillium, дрожжевые (Rhodotorula rubra, Torulopsis
                    gabrata и т.д.), и дрожжеподобные грибы (Candida albicans,
                    Candida tropicalis, Candida krusei, Pityrosporum orbiculare
                    (Malassezia furfur) и т.д.), дерматофиты (Trychophyton
                    rubrum, Trychophyton mentagrophytes, Trychophyton
                    verrucosum, Trychophyton schoenleini, Trychophyton
                    violacent, Epidermophyton Kaufman-Wolf, Epidermophyton
                    floccosum, Microsporum gypseum
                  </p>
                  {/* Показать полностью */}
                  <Button
                    variant="text"
                    sx={{ color: "#8168F0", fontWeight: 800, fontSize: "25px" }}
                  >
                    Показать полностью{" "}
                  </Button>
                </div>
              </section>
            </div>
          </section>

          <section
            ref={certificatesRef}
            className="py-10"
            aria-labelledby="certificates-heading"
          >
            <h2 id="certificates-heading" className="font-black text-3xl py-10">
              Сертификаты Митрасептин-Про
            </h2>
            <p className="font-semibold text-2xl">
              0.01%, аэрозоль для местного и наружного применения, 30 мл, 1 шт.
            </p>

            <section className="flex flex-wrap gap-6 py-10">
              <img
                src={sertificate}
                alt={`sertificate `}
                className="w-64 h-auto object-contain"
              />
              <img
                src={sertificate}
                alt={`sertificate `}
                className="w-64 h-auto object-contain"
              />
            </section>
          </section>

          <section
            ref={relatedRef}
            className="py-10"
            aria-labelledby="related-heading"
          >
            <h2 id="related-heading" className="font-black text-3xl ml-3 py-10">
              С этим товаром берут
            </h2>

            <Box sx={{ position: "relative" }}>
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
                style={{ padding: "0 15px" }}
              >
                {itemsDay.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CardSlide {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <IconButton
                ref={prevRef}
                onClick={() => swiperInstance?.slidePrev()}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: "-15px", md: "-60px" },
                  transform: "translateY(-50%)",
                  backgroundColor: "#8168F0",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#61D2B9" },
                  boxShadow: 3,
                  width: { xs: "20px", md: "45px" },
                  height: { xs: "20px", md: "45px" },
                  zIndex: 10,
                }}
              >
                <ArrowBackIosRoundedIcon />
              </IconButton>

              <IconButton
                ref={nextRef}
                onClick={() => swiperInstance?.slideNext()}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: { xs: "-15px", md: "-60px" },
                  transform: "translateY(-50%)",
                  backgroundColor: "#8168F0",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#61D2B9" },
                  boxShadow: 3,
                  width: { xs: "20px", md: "45px" },
                  height: { xs: "20px", md: "45px" },
                  zIndex: 10,
                }}
              >
                <ArrowForwardIosRoundedIcon />
              </IconButton>
            </Box>
          </section>

         <section
        ref={reviewsRef}
        className="py-10 flex flex-col md:flex-row items-start gap-12"
        aria-labelledby="reviews-heading"
      >
        <article className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <h2 id="reviews-heading" className="font-black text-2xl md:text-3xl ml-1 md:ml-3 py-2">
              Отзывы о Митрасептин-Про
            </h2>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#8168F0",
                color: "#fff",
                fontSize: "12px",
                px: "16px",
                py: "7px",
                fontWeight: 700,
                marginLeft: "12px",
                borderRadius: "8px",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "#6c54e0",
                },
              }}
            >
              Добавить отзыв
            </Button>
          </div>

          <div itemScope itemType="https://schema.org/Product">
            <div>
              <span className="flex items-center gap-1 text-gray-800 text-xs md:text-sm">
                <Rating
                  value={5}
                  precision={0.1}
                  readOnly
                  icon={<StarRoundedIcon fontSize="inherit" />}
                  emptyIcon={
                    <StarRoundedIcon
                      fontSize="inherit"
                      style={{ opacity: 0.3 }}
                    />
                  }
                />
                <span className="font-medium text-xs md:text-base">
                  Рейтинг 4.6 на основе 75 отзывов
                </span>
              </span>
            </div>

            <div className="my-4 p-2 grid md:grid-cols-2 grid-cols-1 gap-4">
              {[1, 2 , 3, 4 ].map((_, idx) => (
                <div key={idx} className="flex my-1 items-center gap-3">
                  <Box
                    sx={{
                      display: "flex",
                      backgroundColor: "#D9D9D9",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <PersonIcon sx={{ color: "#909090", fontSize: "28px" }} />
                  </Box>
                  <div className="flex flex-col justify-center gap-0.5 text-[11px] leading-tight">
                    <span className="text-black font-medium whitespace-nowrap leading-none">
                      16 января 2024 15:53
                    </span>
                    <p className="text-black font-normal truncate max-w-[180px] leading-snug">
                      У меня горло болит. Лечимся им, не какого жжение нет!
                    </p>
                    <span className="flex items-center gap-1">
                      <Rating
                        name="static-rating"
                        value={5}
                        readOnly
                        max={5}
                        size="small"
                      />
                      <span className="text-[11px] text-black font-medium">
                        5
                      </span>
                    </span>
                  </div>
                </div>
              ))}
               
            </div>
          </div>
        </article>

        <div className="p-10 w-[380px] h-[306px] rounded-3xl bg-[#F6F7FA] mx-auto md:mx-0">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center gap-2">
              <Rating
                value={1}
                max={1}
                precision={0.1}
                readOnly
                icon={<StarRoundedIcon fontSize="medium" />}
                emptyIcon={
                  <StarRoundedIcon
                    fontSize="inherit"
                    style={{ opacity: 0.3 }}
                  />
                }
              />
              <span className="text-xl font-bold">Оценка 5.0</span>
            </div>
            <ul className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <li key={stars}>
                  <div className="flex items-center justify-between gap-2">
                    <Rating
                      value={stars}
                      max={5}
                      precision={0.1}
                      readOnly
                      icon={<StarRoundedIcon fontSize="inherit" />}
                      emptyIcon={
                        <StarRoundedIcon
                          fontSize="inherit"
                          style={{ opacity: 0.3 }}
                        />
                      }
                      size="medium"
                    />
                    <span className="text-base min-w-[60px] font-bold text-right">
                      {stars === 5 ? '2 оценки' : '0 оценок'}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </section>
        </article>
      </main>
    </>
  );
}
