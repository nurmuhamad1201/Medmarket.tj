import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import sprey from "@/assets/svg/spray.svg";  
import { Button, IconButton, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Cart() {
    const cartProdTotal = 5;  

     const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
   <section className="w-[86%] mx-auto py-10">
  <nav
    className="w-full max-w-5xl mb-6 text-left text-gray-600 text-base font-medium"
    style={{ fontFamily: 'Mulish' }}
    aria-label="Навигация по сайту"
  >
    <Link to={`/`}>
      <span className="text-gray-500">Главная</span>
    </Link>
    <span className="mx-2" aria-hidden="true">
      /
    </span>
    <span className="text-purple-600 font-semibold" aria-current="page">
      Корзина
    </span>
  </nav>

  <h1 className="text-[30px] text-black font-bold mb-6">
    В корзине {cartProdTotal} товаров
  </h1>

<section className="flex flex-col md:flex-row gap-6 p-4">
  <div className="border-2 border-[#E2E3EC] p-4 rounded-lg w-full md:w-2/3 mx-auto">
 
         
  {[...Array(4)].map((_, index) => (
    <div key={index} className="flex border-b border-[#858585] py-5 items-start gap-4">
      <div className="flex flex-col items-center gap-2">
        <img
          src={sprey}
          className="w-20 h-20 rounded-xl object-cover"
          alt="drug"
        />
        <div className="flex gap-1">
          <IconButton size="small" sx={{ color: '#8168F0', padding: '4px' }}>
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#8168F0', padding: '4px' }}>
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <h3 className="font-semibold text-sm leading-tight">
          Мирамистин, 0.01%, раствор для местного применения, с насадкой-распылителем, 150 мл, 1 шт.
        </h3>
        <p className="text-xs font-medium text-gray-600">
          Доставка: <span className="text-[#8168F0] font-semibold">в течение дня</span>
        </p>
        <div className="border border-[#8168F0] w-20 flex items-center justify-between rounded-xl h-7 px-1.5">
          <button
            className="text-black font-bold text-xs w-5 h-5 flex items-center justify-center hover:bg-[#8168F0]/10 rounded"
            onClick={decrement}
          >
            -
          </button>
          <span className="text-black font-medium text-xs min-w-[16px] text-center">
            {quantity}
          </span>
          <button
            className="text-black font-bold text-xs w-5 h-5 flex items-center justify-center hover:bg-[#8168F0]/10 rounded"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 min-w-[100px]">
        <p className="text-xs font-medium text-gray-600">
          Количество: <span className="text-black">1 шт.</span>
        </p>
        <del className="text-gray-400 text-xs">2100 сомони</del>
        <p className="text-base font-bold text-[#8168F0]">1500 сомони</p>
      </div>
    </div>
  ))}
 
       
  </div>

  <div className="w-full md:w-1/3 flex flex-col gap-4">
    <Typography
      variant="h6"
      sx={{
        fontWeight: 600,
        fontSize: '16px',
        border: '2px solid #84B2FE',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      Минимальный заказ: от 50 сомони
    </Typography>

    <div className="flex flex-col gap-3 border-2 border-[#8168F0] p-4 bg-gray-50 rounded-lg">
      <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '25px' }}>
        Ваш заказ
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        Товары внутри страны ({cartProdTotal}): <span className="font-bold text-sm">500 сомони</span>
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        Скидка: <span className="font-bold text-sm">57 сомони</span>
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        Общая сумма доставки: <span className="font-bold text-sm">20 сомони</span>
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 500,
          fontSize: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Итого:
        <p className="text-[#444444] text-lg font-extrabold">
          1 757 сомони
          <span className="block text-[10px] text-[#35C128] font-medium">
            Вы экономите: 57 сомони
          </span>
        </p>
      </Typography>
 

        <div className='flex items-center gap-2 mt-4'> 
            
       <input type="text" placeholder='Введите купон' className='border-2 p-3 border-[#02BC7D] rounded-[16px]' />

        <button className='bg-[#02BC7D] p-3 rounded-2xl text-white cursor-pointer'>Применить</button>
        </div>

        <Link to="/checkout" className="w-full">
        <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
                borderRadius: '8px',
                backgroundColor: "transparent",
                padding: '12px',
                fontWeight: 700,
                fontSize: '18px',
                color: "#8168F0",
                mt: 1,
                border: '2px solid #8168F0',
                '&:hover': {
                backgroundColor: "#f3f3f3",
                color: "#8168F0",
                },
            }}
        >
            
            Перейти к оформлению
        </Button>
        </Link>

    </div>
  </div>
</section>
</section>

  )
}
