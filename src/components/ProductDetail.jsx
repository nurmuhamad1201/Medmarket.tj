import React, { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Box, Button, IconButton, Rating } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import alif from "@/assets/svg/alif.svg";
import Dc from "@/assets/svg/DC.svg";

import drug from "@/assets/svg/drug.svg";
import aksiya from "@/assets/svg/aksiya.svg";
 
import elsom from "@/assets/svg/rite.svg";


export function ProductDetail() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [valueRate, setValue] = useState(5);

  const product = {
    name: "Кардиомагнил",
    manufacturer: "Такеда Фармасьютикалс ООО",
    activeIngredient: "Амлодипин ацетат натрия, Магний гидроксид",
    category: "Боль, температура / Применен",
    actives:
      "кислота, [Магния гидроксид]",
    expirationDate: "Длинный срок",
    price: 99,
    oldPrice: 150,
    stock: 100,
    quantity: 1,
    deliveryTime: "Доставка в течение дня",
    reviews: [
      { rating: 5, comment: "Отличное средство для снижения давления!" },
      { rating: 4, comment: "Работает хорошо, но нужно принимать регулярно." },
      { rating: 3, comment: "Среднее качество, эффект не всегда стабильный." },
    ],
    images: [drug, drug, elsom, drug],
  };

  const [quantity, setQuantity] = React.useState(1);
  const [activeImage, setActiveImage] = React.useState(0);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease") {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 bg-white rounded-lg max-w-6xl mx-auto">
      {/* Left Section: Images */}
      <div className="w-full lg:w-[35%]">
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg mb-4 bg-gray-100 flex items-center justify-center">
          <IconButton
            aria-label="add to favorites"
            onClick={() => setIsFavorite(!isFavorite)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              color: isFavorite ? "#8168F0" : "rgba(0, 0, 0, 0.54)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>

          <img
            src={product.images[activeImage]}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                index === activeImage
                  ? "ring-2 ring-blue-500"
                  : "border border-gray-200"
              }`}
            >
              <img
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="object-contain w-full h-full bg-gray-100"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Middle Section: Product Info */}
      <div
        className="w-full lg:w-[42%] flex flex-col"
        style={{ minHeight: "400px" }}
      >
        <div className="mb-4 flex-grow">
          <div className="flex justify-between py-2 items-start">
            <span className="text-[#8168F0] px-3 py-1 border-1 rounded-[6px]">
              Без рецепта
            </span>
            <strong className="text-base">Артикул: 234984</strong>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-black text-[10px] font-bold flex gap-1 mt-1">
              <img src={aksiya} alt="img" /> Оригинальный препарат
            </span>
            <span className="text-[#8168F0]">
              <Rating name="read-only" value={valueRate} readOnly />
              <strong className="text-black">5.0</strong> 4 отзыв
            </span>
          </div>

         <div className="mt-4">
  <p className="flex items-center gap-1 pt-0.5 font-medium text-[15px] leading-[21px] align-middle m-0">
    Производитель:
    <span className="text-[#8168F0] font-bold text-[13px]">
      {product.manufacturer}
    </span>
  </p>
  <p className="flex items-center gap-1 pt-0.5 font-medium text-[12px] leading-[21px] align-middle m-0">
    Действующее вещество:
    <span className="text-[#8168F0] font-bold text-[12px]">
      {product.actives}
    </span>
  </p>
  <p className="flex items-center gap-1 pt-0.5 font-medium text-[13px] leading-[21px] align-middle m-0">
    Категории:
    <span className="text-[#8168F0] font-bold text-[13px]">
      {product.category}
    </span>
  </p>
  <p className="flex items-center gap-1 py-1 font-medium text-[15px] leading-[21px] align-middle m-0">
    Срок годности:
    <span className="text-[#000000] font-bold text-[16px]">
      {product.expirationDate}
    </span>
  </p>
</div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mt-2">
              Инструкция по применению
            </h2>
            <p className="text-[#000000] text-sm mt-2">
              Аскорбиновая кислота является витамином, оказывает метаболическое
              действие, не образуется в организме человека,а поступает только с
              пищей.
            </p>
            <Button
              variant="outlined"
              sx={{
                border: "transparent",
                bgcolor: "#F6F7FA",
                color: "#000000",
                marginTop: "30px",
                px: "10px",
                paddingY: "10px",
                borderRadius: "5px",
              }}
            >
              Перейти к описание{" "}
              <ChevronRightIcon color="secondary" sx={{ ml: "20px" }} />
            </Button>

            <Button
              variant="outlined"
              sx={{
                fontSize: "11px",
                marginTop: "30px",
                px: "20px",
                paddingY: "10px",
                borderRadius: "20px",
              }}
            >
              <ShoppingBasketRoundedIcon sx={{ marginRight: "5px" }} />
              24 человек купили на этой недели
            </Button>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2">
              <h2 className="text-[14px] font-bold text-gray-800">
                Последние отзывы
              </h2>
              <Button
                variant="outlined"
                sx={{
                  border: "transparent",
                  backgroundColor: "transparent",
                  color: "#8168F0",
                  fontWeight: 700,
                  fontSize: "13px",
                  textDecoration: "underline",
                  px: "10px",
                  py: "10px",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: "rgba(129, 104, 240, 0.08)",
                  },
                }}
              >
                Все отзывы
              </Button>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#8168F0",
                  color: "#fff",
                  fontSize: "10px",
                  px: "10px",
                  py: "6px",

                  marginLeft: "20px",
                  borderRadius: "10px",
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

            <article className="flex flex-col gap-4 mt-4">
              {[1, 2].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                  <Box
                    sx={{
                      display: "flex",
                      backgroundColor: "#D9D9D9",
                      borderRadius: "50%",
                      width: "64px",  
                      height: "64px", 
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <PersonIcon sx={{ color: "#909090", fontSize: "50px" }} /> 
                  </Box>
                
                  <div className="flex flex-col justify-center gap-1 text-xs leading-tight">  
                    <span className="text-black font-medium whitespace-nowrap leading-none text-[12px]">
                      16 января 2024 15:53
                    </span>
                    <p className="text-black font-normal text-[12px] truncate max-w-[250px] leading-snug">
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
                      <span className="text-[12px] text-black font-medium">5</span>
                    </span>
                  </div>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>

       
      <div
        className="w-full lg:w-[382px]    rounded-lg"
        style={{ minHeight: "400px" }}
      >
        <div className="border-2 border-[#02BC7D] rounded-[20px] px-4 py-2">
          <p className="py-1">Доставка и оплата</p>
          <p className="text-[14px]">
            <span className="text-[#000000] font-extrabold">
              Стоимость доставки:{" "}
            </span>
            от 10 до 20 сомони(город Душанбе)
          </p>
          <p className="text-[14px]">
            <span className="text-[#000000] font-extrabold">
              Минимальная сумма заказа:
            </span>{" "}
            50 сомони{" "}
          </p>
        </div>

        <div className="mt-5 border border-[#8168F0] px-4 rounded-[20px] py-2">
          <div className="flex items-center justify-between"><p className="text-[#000000] text-base font-medium">Цена:</p>
          <span className="  text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
           <CheckCircleIcon sx={{fontSize:"15px"}} /> В наличии 
          </span></div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-[#434343]">
              {product.price} сом.
            </span>
            <span className="text-[20px] font-bold text-gray-400 line-through">
              {product.oldPrice} сом.
            </span>
          </div>
        

        <div className="mt-6">
         

          <Button sx={{ width: "100%", height: "50px", borderRadius: "10px" , bgcolor:"#8168F0" }} variant="contained" >
            <LocalMallIcon />  Купить
          </Button>

          
             
            <div className="flex items-center w-full justify-around  border border-[#8168F0] my-3 rounded-[15px]">
  <button
    onClick={() => handleQuantityChange("decrease")}
    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md text-xl font-medium"
  >
    -
  </button>
  <span className="px-4 py-2 text-gray-800 text-xl font-semibold">
    {quantity}
  </span>
  <button
    onClick={() => handleQuantityChange("increase")}
    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md text-xl font-medium"
  >
    +
  </button>
</div>
           
        </div>
        </div>

        <div className=" border border-[#8168F0] bg-[#F5F7FA] p-6 my-6 rounded-[20px]">
          <h3 className="text-sm font-extrabold text-gray-700 mb-2">
            Доставим в течение дня
          </h3>
          <p className="text-xs font-bold text-black mb-3">
            Безопасная оплата удобным способом
          </p>

           <p className="text-xs text-gray-500 mb-4">
            Оплачивайте картой или наличными
          </p>

        <div className="flex items-center space-x-2 mb-3">
  
  <img 
    src={alif} 
    alt="Alif" 
    className="h-8 object-contain" 
  />
  
  
  <img 
    src={Dc} 
    alt="DC" 
    className="h-8  " 
  />
  
  
  <img 
    src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/48/Visa-icon.png" 
    alt="Visa" 
    className="h-8 object-contain" 
  />
  
   
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/2560px-Mastercard_2019_logo.svg.png" 
    alt="Mastercard" 
    className="h-8 object-contain" 
  />
  
  
  <img 
    src="https://kortimilli.tj/_nuxt/img/logo.7d3cc77.svg" 
    alt="Korti Milli" 
    className="h-8 object-contain" 
  />
</div>

         

        </div>
          <Button sx={{border:"1px solid #61D2B9" , color:"#61D2B9" , borderRadius:"8px"}}>
            Сообщите о неточности
          </Button>
      </div>
    </div>
  );
}