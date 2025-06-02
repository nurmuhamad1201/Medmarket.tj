import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
 import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { IconButton, Rating } from '@mui/material';

import drug from '@/assets/svg/drug.svg';
import aksiya from '@/assets/svg/aksiya.svg';
import mastercard from '@/assets/svg/rite.svg';
import alif from '@/assets/svg/rite.svg';
import mb from '@/assets/svg/rite.svg';
import elsom from '@/assets/svg/rite.svg';

export function ProductDetail() {

  const [isFavorite, setIsFavorite] = useState(false);
 const [valueRate, setValue] = useState(5);

  const product = {
    name: 'Кардиомагнил',
    
    manufacturer: 'Такеда Фармасьютикалс ООО',
    activeIngredient: 'Амлодипин ацетат натрия, Магний гидроксид',
    category: 'Боль, температура / Применения-кортикостероиды',
    actives: "Действующее вещество: Ацетилсалициловая кислота, [Магния гидроксид]",

    instruction: 'Аскорбиновая кислота является витамином, оказывает метаболическое действие, не образуется в организме человека, а поступает только с пищей.',
    expirationDate: 'Длинный срок',
    price: 99,
    oldPrice: 150,
    stock: 100,
    quantity: 1,
    deliveryTime: 'Доставка в течение дня',
    reviews: [
      { rating: 5, comment: 'Отличное средство для снижения давления!' },
      { rating: 4, comment: 'Работает хорошо, но нужно принимать регулярно.' },
      { rating: 3, comment: 'Среднее качество, эффект не всегда стабильный.' },
    ],
    images: [
      drug,
      drug,  
      drug,  
      drug,  
    ],
  };

  const [quantity, setQuantity] = React.useState(1);
  const [activeImage, setActiveImage] = React.useState(0);

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrease') {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 bg-white rounded-lg shadow-md max-w-6xl mx-auto">
      {/* Left Section: Images */}
      <div className="w-full lg:w-2/5">
  <div className="relative w-full h-80 overflow-hidden rounded-lg mb-4 bg-gray-100 flex items-center justify-center">
     
    <IconButton
      aria-label="add to favorites"
      onClick={() => setIsFavorite(!isFavorite)}
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
        color: isFavorite ? '#8168F0' : 'rgba(0, 0, 0, 0.54)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }
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
          index === activeImage ? 'ring-2 ring-blue-500' : 'border border-gray-200'
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
 
      <div className="w-full lg:w-2/5">
        <div className="mb-4">
          <div className="flex justify-between py-2 items-start">
            <span className='text-[#8168F0] px-3 py-1 border-1 rounded-[6px] '>Без рецепта</span>
             <strong className='text-base'>Артикул: 234984</strong>
          </div>
          
         <div className='flex justify-between items-center'> <span className="text-black text-[10px] font-bold flex gap-1 mt-1"><img src={aksiya} alt="img" /> Оригинальный препарат </span>
          <span className='text-[#8168F0]  '><Rating name="read-only" value={valueRate} readOnly /><strong className='text-black'>5.0</strong>  4 отзыв</span>     
      </div>




          <div className="mt-4">
             
           <span className="flex items-center gap-1 font-normal text-[15px] leading-[21px] align-middle">
  Производитель:
  <p className="text-[#8168F0] font-medium text-[13px] m-0">{product.manufacturer}</p>
</span>
           <span className="flex items-center gap-1 font-normal text-[15px] leading-[21px] align-middle">
  Действующее вещество:
  <p className="text-[#8168F0] font-medium text-[13px] m-0">{product.actives}</p>
</span>
           <span className="flex items-center gap-1 font-normal text-[15px] leading-[21px] align-middle">
  Категории:
  <p className="text-[#8168F0] font-medium text-[13px] m-0">{product.category}</p>
</span>
           <span className="flex items-center gap-1 font-normal text-[15px] leading-[21px] align-middle">
  Срок годности:
  <p className="text-[#000000] font-medium text-[16px] m-0">{product.expirationDate}</p>
</span>
          </div>



        


          
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Доставка и оплата</h2>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Доставка по Бишкеку от 10 до 20 сомов</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Самовывоз из аптек</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="w-full lg:w-1/5 bg-gray-50 p-4 rounded-lg">
        <div className="mb-4">
          <p className="text-gray-500 text-sm">Цена:</p>
           <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              В наличии
            </span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-blue-600">{product.price} сом.</span>
            <span className="text-sm text-gray-400 line-through">{product.oldPrice} сом.</span>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">Количество:</span>
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md"
              >
                -
              </button>
              <span className="px-3 py-1 text-gray-800">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
            Купить
          </button>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Доставим в течение дня</h3>
          <p className="text-xs text-gray-500 mb-3">Безопасная оплата удобным способом</p>
          
          <div className="flex items-center space-x-2 mb-3">
            <img src={aksiya} alt="Visa" className="h-6" />
            <img src={mastercard} alt="Mastercard" className="h-6" />
            <img src={alif} alt="Alif" className="h-6" />
            <img src={mb} alt="MBank" className="h-6" />
            <img src={elsom} alt="Elsom" className="h-6" />
          </div>
          
          <p className="text-xs text-gray-500 mb-4">Оплачивайте картой или наличными</p>
          
          <button className="text-xs text-blue-600 hover:text-blue-800">
            Сообщите о неточности
          </button>
        </div>
      </div>
    </div>
  );
}




export default function DrugDetailPage() {
  
  const { drugID } = useParams()

  
  const formatDrugName = (name) => {
    return decodeURIComponent(name).replace(/-/g, ' ')
  }

  const displayName = formatDrugName(drugID)

  return (
    <main className='w-[86%] mx-auto px-4 py-8'>
      <nav className="w-full max-w-5xl mb-6 text-left text-gray-600 text-base font-medium" aria-label="Хлебные крошки">
        <ol className="flex items-center flex-wrap gap-x-1 gap-y-1">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-500 hover:text-purple-600 transition-colors" aria-label="Перейти на главную">Главная</Link>
          </li>
          <li className="mx-1" aria-hidden="true">/</li>
          <li className="inline-flex items-center">
            <Link to="/categories" className="text-gray-500 hover:text-purple-600 transition-colors">Категории</Link>
          </li>
          <li className="mx-1" aria-hidden="true">/</li>
          <li className="inline-flex items-center">
            <Link to="/categories/medicines" className="text-gray-500 hover:text-purple-600 transition-colors">Лекарства</Link>
          </li>
          <li className="mx-1" aria-hidden="true">/</li>
          <li className="inline-flex items-center">
            <Link to="/categories/medicines/pain" className="text-gray-500 hover:text-purple-600 transition-colors">Боль, температура</Link>
          </li>
          <li className="mx-1" aria-hidden="true">/</li>
          <li className="inline-flex items-center">
            <Link to="/categories/medicines/pain/hormones" className="text-gray-500 hover:text-purple-600 transition-colors">Гормоны-кортикостероиды</Link>
          </li>
          <li className="mx-1" aria-hidden="true">/</li>
          <li className="text-purple-600 font-semibold" aria-current="page">
            {displayName}
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-extrabold text-[#000000] mb-6">{displayName}, 0.01%, аэрозоль для местного и наружного применения, 30 мл, 1 шт., Фармстандарт</h1>
      
      <div className="flex flex-wrap justify-around gap-4 w-full border-b border-[#C9C9C9] mb-4">
  {['Основное', 'Аналоги', 'Инструкция', 'Сертификаты', 'С этим берут', 'Отзывы'].map((tab, index) => (
    <button
      key={tab}
      className={`pb-2 px-2 text-[20px] font-medium transition-colors duration-200 ${
        index === 0
          ? 'text-[#000000] border-b-[3px] border-[var(--Color-main,#8168F0)]'
          : 'text-gray-600  hover:text-[#8168F0]'
      }`}
    >
      {tab}
    </button>
  ))}
</div>


<section>
  <ProductDetail />
</section>

    </main>
  )
}

