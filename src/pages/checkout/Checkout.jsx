import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import alif from "@/assets/svg/alif.svg";
import Dc from "@/assets/svg/DC.svg";

export default function Checkout() {

    const [openDialog, setOpenDialod] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialod(true);
  };

  const handleClose = () => {
    setOpenDialod(false);
  };

  return (
  <section className="w-[86%] mx-auto py-10">
    <nav
      className="w-full max-w-5xl mb-6 text-left text-gray-600 text-base font-medium"
      style={{ fontFamily: 'Mulish' }}
      aria-label="Навигация по сайту"
    >
      <Link to={`/`}><span className="text-gray-500">Главная</span></Link>
      <span className="mx-2" aria-hidden="true">/</span>
      <span className="text-purple-600 font-semibold" aria-current="page">Оформления товара</span>
    </nav>

    <h1 className="text-[30px] text-black font-bold mb-6">Оформления товара</h1>

    <section className='flex flex-col md:flex-row items-start gap-3'>


         <article className=' w-4/6 mx-auto p-6 bg-white border-2 border-[#E2E3EC] rounded-lg '>
        <h2 className='text-3xl font-medium mb-4'>Адрес и время</h2>
<div className="mb-4 flex items-end gap-3">
  <div className="w-[65%]">
    <label className="block mb-2 text-base font-semibold text-gray-700">
      Город и адрес доставки
    </label>
    <select
      name="city"
      id="city"
      defaultValue=""
      required
      className="w-full bg-[#F6F7FA] p-3 border border-[#8168F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b65df] text-sm"
    >
      <option value="" disabled>Выберите адрес</option>
      <optgroup label="Душанбе">
        <option value="Rudaki3/3">Душанбе, Рудаки 3/3</option>
        <option value="Sino">Душанбе, Сино</option>
        <option value="Zarafshon">Душанбе, Заравшон</option>
        <option value="Sakhovat">Душанбе, Саховат</option>
        <option value="OrientirSiyoma">Душанбе, ориентир Сиёма Молл</option>
        <option value="82mkr">Душанбе, 82 мкр</option>
        <option value="Shohmansur">Душанбе, Шохмансур</option>
        <option value="Firdavsi">Душанбе, Фирдавси</option>
        <option value="IsmoiliSomoni">Душанбе, Исмоили Сомони</option>
        <option value="21mkr">Душанбе, 21 мкр</option>
      </optgroup>
      <optgroup label="Другие города">
        <option value="Samarqand">Самарканд</option>
        <option value="Bukhara">Бухара</option>
        <option value="Khujand">Худжанд</option>
      </optgroup>
    </select>
  </div>
  <Button
    variant="outlined"
    sx={{
      border: '1px solid #8168F0',
      color: '#000000',
      bgcolor: '#F6F7FA',
      padding: '8px 20px',
      fontSize: '14px',
      fontWeight: 500,
      borderRadius: '8px',
      textTransform: 'none',
      '&:hover': {
        bgcolor: '#8168F0',
        color: '#FFFFFF',
        borderColor: '#8168F0',
      },
    }}
  >
    Добавить адрес
  </Button>
</div>

 
     <div className="mt-10  w-[65%]">
  
  <textarea
    name="addressDetails"
    id="addressDetails"
    placeholder="Комментарий курьеру, ориентир место доставки и тд. "
    rows="3"
    className="w-full p-2 border border-[#8168F0] h-36 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8168F0] text-sm"
  ></textarea>

    <div className="mt-4">
  <span className="block mb-2 text-sm font-semibold text-[#000000]">
    Доставка
  </span>
  <p className="mb-3 text-[16px] font-normal text-[#000000]">
    Доставка от 10 до 20 сомони (точная сумма зависит от территории).
  </p>
  <div className="flex flex-col gap-2">
    <label className="flex items-center gap-2  text-[16px] font-normal text-[#000000]">
      <input
        type="radio"
        name="delivery"
        value="standard"
        defaultChecked
        className="text-[#8168F0] size-4 focus:ring-[#8168F0]"
      />
      Стандартная доставка в течение 3 часов — 10 сомони
    </label>
    <label className="flex items-center gap-2  text-[16px] font-normal text-[#000000]">
      <input
        type="radio"
        name="delivery"
        value="express"
        className="text-[#8168F0] size-4 focus:ring-[#8168F0]"
      />
      Срочная доставка в течение 1 часа — 20 сомони
    </label>
  </div>

    <span className='text-base font-normal text-gray-800 bg-[#8168F038] rounded-lg p-4 mt-4 block'>
    После подтверждения заявки вам доставят товар в ближайшие дни к этому времени. Пожалуйста, ждите звонка.
</span>

  <h2 className='font-medium text-[20px] py-6 text-black'>Список товаров с доставкой</h2>

    <ul>
        <li className='flex items-center justify-between  mb-4 '>
            <span className='font-bold text-[12px]'>Мирамистин, 0.01%, раствор для местного применения, ...</span>
            <p className=' text-[12px] text-[#787878] font-semibold'>Количество: <span className='text-black'>1 шт.</span></p>
        </li>
        <li className='flex items-center justify-between  mb-4 '>
            <span className='font-bold text-[12px]'>Мирамистин, 0.01%, раствор для местного применения, ...</span>
            <p className=' text-[12px] text-[#787878] font-semibold'>Количество: <span className='text-black'>1 шт.</span></p>
        </li>
        <li className='flex items-center justify-between  mb-4 '>
            <span className='font-bold text-[12px]'>Мирамистин, 0.01%, раствор для местного применения, ...</span>
            <p className=' text-[12px] text-[#787878] font-semibold'>Количество: <span className='text-black'>1 шт.</span></p>
        </li>
    </ul>

</div>
</div>
 


         </article>


     <article className='w-2/6 mx-auto p-4  rounded-lg border-2 border-[#8168F0] bg-white'>

        <h2 className='text-3xl font-bold mb-4'>Ваш заказ</h2>

        <ul className="space-y-3 mb-5">
    <li className="flex justify-between text-[14px] text-black">
      <span>Товары внутри страны (5):</span>
      <span className="font-[700]"><span className="font-[700]">500</span> сомони</span>
    </li>
    <li className="flex justify-between text-[14px] text-black">
      <span>Скидка:</span>
      <span className="font-[700]"><span className="font-[700]">57</span> сомони</span>
    </li>
    <li className="flex justify-between text-[14px] text-black">
      <span>Общая сумма доставки:</span>
      <span className="font-[700]"><span className="font-[700]">20</span> сомони</span>
    </li>
    <li className="flex justify-between text-[16px] font-bold mt-4 text-black">
      <span>Итого:</span>
      <span className="text-[#8168F0] font-[700]"><span className="font-[700]">463</span> сомони</span>
    </li>
  </ul>

        <div className=' gap-2 mt-4'>
            
            <span className='text-[18px]  text-black font-semibold'>Способ оплаты:</span>

            
            <label className='flex items-center mt-2 gap-2'>
                <input defaultChecked type="radio" name="payment" value="online" className='text-[#8168F0] size-4 focus:ring-[#8168F0]' />
                Картой онлайн
            </label>




        
<div className="flex items-center justify-between gap-3 my-4">
  <label className="flex-1">
    <input
      type="radio"
      name="paymentwallet"
      value="alif"
      className="hidden peer"
       
    />
    <img
      src={alif}
      alt="Alif"
      className="h-16 w-[74px] object-contain border-2 border-transparent rounded-lg p-1 peer-checked:border-[#8168F0] cursor-pointer"
    />
  </label>

  <label className="flex-1">
    <input
      type="radio"
      name="paymentwallet"
      value="dc"
      className="hidden peer"
       
    />
    <img
      src={Dc}
      alt="DC"
      className="h-16 w-[74px] object-contain border-2 border-transparent rounded-lg p-1 peer-checked:border-[#8168F0] cursor-pointer"
    />
  </label>


<label className="flex-1">
    <input
      type="radio"
      name="paymentwallet"
      value="korti-milli"
      className="hidden peer"

     defaultChecked
    />
    <img
      src="https://kortimilli.tj/_nuxt/img/logo.7d3cc77.svg"
      alt="Korti Milli"
      className="h-16 w-[74px] object-contain border-2 border-transparent rounded-lg p-1 peer-checked:border-[#8168F0] cursor-pointer"
    />
  </label>

  <label className="flex-1">
    <input
      type="radio"
      name="paymentwallet"
      value="visa"
      className="hidden peer"
       
    />
    <img
      src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/48/Visa-icon.png"
      alt="Visa"
      className="h-16 w-[74px] object-contain border-2 border-transparent rounded-lg p-1 peer-checked:border-[#8168F0] cursor-pointer"
    />
  </label>

  
</div>


        </div>

    
          <Button
            variant="contained"
            onClick={handleClickOpen}
            size="large"
            fullWidth
            sx={{
              borderRadius: '8px',
              backgroundColor: '#8168F0',
              padding: '12px',
              fontWeight: 700,
              fontSize: '14px',
              color: "#FFFFFF",
              '&:hover': {
                backgroundColor: '#6a54d8',
              },
            }}
          >
            Оформить заказ
          </Button>
        


     </article>
    </section>



     <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            width: '50%',
            maxWidth: '500px',
            borderRadius: '16px',
            padding: '20px',
          },
        }}
      >
        <DialogTitle  sx={{textAlign: "center" , color:"#8168F0" , fontWeight:800, fontSize:"30px"}} id="alert-dialog-title">
          {"Оплата прошла успешно!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{textAlign: "center" , fontSize:"20px", fontWeight:500 , color:"#152242"}} id="alert-dialog-description">
            Ваш заказ успешно оплачен, и мы уже начали его обработку. Спасибо за покупку!
          </DialogContentText>
          <DialogContentText sx={{ marginTop: '10px', fontWeight: 'bold' , textAlign: 'center' , fontSize:"25px"}}>
            Заявка №263666519
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', padding: '20px' }}>
          
          <Button onClick={handleClose} fullWidth variant='contained' sx={{bgcolor:"#8168F0" , borderRadius:"10px" , height:"50px"}} autoFocus>
            Посмотреть статус заказа
          </Button>
        </DialogActions>
      </Dialog>


  </section>
  )
}
