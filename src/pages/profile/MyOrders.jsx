import React, { useState } from 'react';
import { Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import zakaz from '@/assets/svg/zakaz.svg';
import spray from '@/assets/svg/spray.svg';
import EmptyState from '@/components/EmptyState';
import { CheckCircle } from 'lucide-react';

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState('all');
  const [cancelOrderId, setCancelOrderId] = useState(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [showReasonSelect, setShowReasonSelect] = useState(false);
  const [showCancelSuccess, setShowCancelSuccess] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');
  const [orders, setOrders] = useState([
    {
      id: 628,
      imagedrug: spray,
      tittle: "Заказ №628",
      price: "110 c",
      qualit: 1,
      dostavka: "Доставка 20c",
      apteka: "APTEKA 1",
      metodpay: "Карта Салом",
      date: '14.01.2025',
      status: 'Доставлено',
      rated: false,
      text: 'Мирамистин, 0.01%, раствор для местного применения, с насадкой-распылителем, 150 мл, 1 шт.',
      oldprice: "2100 сомони",
      newprice: "1 670 сомони"
    },
    {
      id: 629,
      imagedrug: spray,
      tittle: "Заказ №629",
      price: "210 c",
      qualit: 2,
      dostavka: "Доставка 10c",
      apteka: "APTEKA 2",
      metodpay: "Наличные",
      date: '15.01.2025',
      status: 'Отклонен',
      rated: false,
      text: 'Мирамистин, 0.01%, раствор для местного применения, с насадкой-распылителем,150 мл, 1 шт.',
      oldprice: "1100 сомони",
      newprice: "890 сомони",
    },
    {
      id: 630,
      imagedrug: spray,
      tittle: "Заказ №630",
      price: "90 c",
      qualit: 3,
      dostavka: "Доставка 15c",
      apteka: "APTEKA 3",
      metodpay: "Payme",
      date: '16.01.2025',
      status: 'На модерации',
      rated: false,
      text: 'Мирамистин, 0.01%, раствор для местного применения, с насадкой-распылителем, 150 мл, 1 шт.',
      oldprice: "600 сомони",
      newprice: "450 сомони"
    },
    {
      id: 631,
      imagedrug: spray,
      tittle: "Заказ №631",
      price: "300 c",
      qualit: 1,
      dostavka: "Доставка 25c",
      apteka: "APTEKA 4",
      metodpay: "Click",
      date: '17.01.2025',
      status: 'В пути',
      rated: false,
      text: 'Мирамистин, 0.01%, раствор для местного применения, с насадкой-распылителем, 150 мл, 1 шт.',
      oldprice: "800 сомони",
      newprice: "670 сомони"
    },
  ]);

  const cancellationReasons = [
    'Долго ждать одобрения заказа',
    'Не устраивает срок доставки',
    'Ошибка в выборе товара',
    'Нашел подешевле',
    'Необходимость в товаре отпала'
  ];

  const filteredOrders =
    activeTab === 'all'
      ? orders
      : orders.filter((order) => order.status === 'Доставлено');

  const statusColor = {
    'Отклонен': '#FF0000',
    'Доставлено': '#61D2B9',
    'На модерации': '#FFCB2B',
    'В пути': '#407BFF',
  };

  const handleCancelClick = (orderId) => {
    setCancelOrderId(orderId);
    setShowCancelConfirm(true);
  };

  const handleConfirmCancel = () => {
    setShowCancelConfirm(false);
    setShowReasonSelect(true);
  };

  const handleSubmitCancellation = async () => {
    try {
      // Here you would typically call your backend API to cancel the order
      // await cancelOrderApi(cancelOrderId, selectedReason);
      
      // For demo purposes, we'll just update the local state
      setOrders(orders.map(order => 
        order.id === cancelOrderId ? { ...order, status: 'Отменен' } : order
      ));
      
      setShowReasonSelect(false);
      setShowCancelSuccess(true);
      setSelectedReason('');
    } catch (error) {
      console.error('Error cancelling order:', error);
      // Handle error (show error message, etc.)
    }
  };

  const handleBackToHome = () => {
    setShowCancelSuccess(false);
    // You might want to redirect to home or refresh orders here
  };

  return (
    <main className="p-3">
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Заказы
      </Typography>

      <section className="mt-2 mb-4">
        <ul className="flex justify-center gap-4 border-b pb-3 text-sm">
          <li
            onClick={() => setActiveTab('all')}
            className={`cursor-pointer font-medium ${
              activeTab === 'all'
                ? 'underline underline-offset-4 text-[#8168F0]'
                : 'text-gray-700'
            }`}
          >
            Все заказы
          </li>
          <li
            onClick={() => setActiveTab('success')}
            className={`cursor-pointer font-medium ${
              activeTab === 'success'
                ? 'underline underline-offset-4 text-[#8168F0]'
                : 'text-gray-700'
            }`}
          >
            Успешные
          </li>
        </ul>
      </section>

      {filteredOrders.length === 0 ? (
        <EmptyState image={zakaz} title="Здесь будут Ваши заказы" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white border rounded-lg p-3 shadow-sm hover:shadow-md transition border-[#8168F0] text-sm"
            >
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs text-gray-500">{order.date}</p>
                <span
                  className="text-[10px] text-white px-2 py-[2px] rounded-md"
                  style={{ backgroundColor: statusColor[order.status] || '#999' }}
                >
                  {order.status}
                </span>
              </div>

              <h2 className="text-base font-semibold mb-1">{order.tittle}</h2>

              <div className="text-xs text-gray-600 space-y-0.5">
                <p>Цена: <span className="font-medium">{order.price}</span></p>
                <p>Кол-во: <span className="font-medium">{order.qualit}</span></p>
                <p>{order.dostavka}</p>
                <p>Аптека: <span className="font-medium">{order.apteka}</span></p>
                <p>Метод оплаты: <span className="font-medium">{order.metodpay}</span></p>
              </div>

              <div className="flex items-center mt-2 gap-2">
                <img src={order.imagedrug} alt="drug" className="w-8 h-8 object-contain" />
                <p className="text-[10px] text-gray-700 line-clamp-3 w-[110px]">{order.text}</p>
                <div>
                  <p>
                    <del className="text-red-500 text-[11px]">{order.oldprice}</del>
                  </p>
                  <p>
                    <span className="font-bold text-green-600 text-xs">{order.newprice}</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3">
                <button className="text-xs text-[#8168F0] cursor-pointer">
                  Все детали &gt;
                </button>

                {order.status === 'Доставлено' && !order.rated ? (
                  <button className="text-xs text-white bg-[#152242] rounded-xl px-4 py-1">
                    Оценить
                  </button>
                ) : ['На модерации', 'В пути'].includes(order.status) ? (
                  <button 
                    onClick={() => handleCancelClick(order.id)}
                    className="text-xs text-[#FF0000] cursor-pointer"
                  >
                    Отменить заказ &gt;
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}

      
 <Dialog
  open={showCancelConfirm}
  onClose={() => setShowCancelConfirm(false)}
  maxWidth="xs"
  PaperProps={{
    sx: {
      borderRadius: "30px",
      width: "100%",
      maxWidth: "480px",
    }
  }}
>
  <DialogTitle sx={{
    textAlign: "center",
    fontSize: "28px",
    fontWeight: 700,
    pt: "40px",
    px: "50px",
    fontFamily: "Mulish"
  }}>
    Отмена заказа
  </DialogTitle>
  <DialogContent>
    <DialogContentText sx={{
      textAlign: "center",
      fontSize: "22px",
      fontWeight: 500,
      px: "24px",
      fontFamily: "Mulish",
      color: "#000"
    }}>
      Вы уверены, что хотите отменить заказ?
    </DialogContentText>
  </DialogContent>
  <DialogActions sx={{
    display: "flex",
    justifyContent: "space-between",
    px: "24px",
    pb: "24px",
    pt: 0
  }}>
    <Button
      onClick={() => setShowCancelConfirm(false)}
      variant="outlined"
      sx={{
        color: "#8168F0",
        borderColor: "#8168F0",
        borderRadius: "8px",
        height: "48px",
        width: "45%",
        fontSize: "16px",
        fontWeight: 600,
        textTransform: "none",
        '&:hover': {
          borderColor: "#6a54d8",
        }
      }}
    >
      Назад
    </Button>
    <Button
      onClick={handleConfirmCancel}
      variant="contained"
      sx={{
        backgroundColor: "#8168F0",
        color: "white",
        borderRadius: "8px",
        height: "48px",
        width: "45%",
        fontSize: "16px",
        fontWeight: 600,
        textTransform: "none",
        '&:hover': {
          backgroundColor: "#6a54d8",
        },
        '&:disabled': {
          backgroundColor: "#E0E0E0",
        }
      }}
    >
      Отменить заказ
    </Button>
  </DialogActions>
</Dialog>

 
<Dialog
  open={showReasonSelect}
  onClose={() => setShowReasonSelect(false)}
  maxWidth="sm"
  PaperProps={{
    sx: {
      borderRadius: "30px",
      width: "100%",
      maxWidth: "480px",
    }
  }}
>
  <DialogTitle sx={{
    textAlign: "start",
    fontSize: "20px",
    fontWeight: 700,
    pt: "40px",
    px: "50px",
    fontFamily: "Mulish"
  }}>
    Выберите причину отмены заказа
  </DialogTitle>
  <DialogContent sx={{ px: "24px" }}>
    <RadioGroup
      value={selectedReason}
      onChange={(e) => setSelectedReason(e.target.value)}
      sx={{ mt: 2 }}
    >
      {cancellationReasons.map((reason) => (
        <FormControlLabel
          key={reason}
          value={reason}
          control={<Radio sx={{
            color: "#8168F0",
            '&.Mui-checked': {
              color: "#8168F0",
            }
          }} />}
          label={reason}
          sx={{
            mb: 2,
            '& .MuiTypography-root': {
              fontSize: "16px",
              fontFamily: "Mulish",
              fontWeight: 700,

            }
          }}
        />
      ))}
    </RadioGroup>
  </DialogContent>
  <DialogActions sx={{
    justifyContent: "center",
    px: "24px",
    pb: "24px",
    pt: 0
  }}>
    <Button
      onClick={handleSubmitCancellation}
      variant="contained"
      disabled={!selectedReason}
      sx={{
        backgroundColor: "#8168F0",
        color: "white",
        borderRadius: "8px",
        height: "48px",
        width: "100%",
        fontSize: "16px",
        fontWeight: 600,
        textTransform: "none",
        '&:hover': {
          backgroundColor: "#6a54d8",
        },
        '&:disabled': {
          backgroundColor: "#E0E0E0",
        }
      }}
    >
      Отправить
    </Button>
  </DialogActions>
</Dialog>

 
<Dialog
  open={showCancelSuccess}
  onClose={() => setShowCancelSuccess(false)}
  maxWidth="sm"
  PaperProps={{
    sx: {
      borderRadius: "30px",
      width: "100%",
      maxWidth: "480px",
    }
  }}
>
  <DialogContent sx={{
    textAlign: "center",
    py: "40px",
    px: "24px"
  }}>
    
    <DialogTitle sx={{
      textAlign: "center",
      fontSize: "28px",
      fontWeight: 700,
      fontFamily: "Mulish",
      color: "#000",
      p: 0,
      mb: "8px"
    }}>
      Заказ отменен
    </DialogTitle>
    <DialogContentText sx={{
      fontSize: "18px",
      fontFamily: "Mulish",
      color: "#000",
      mb: "24px",
      py:"20px"
    }}>
      Ваш заказ был успешно отменен.
    </DialogContentText>
    <Button
      onClick={handleBackToHome}
      variant="contained"
      sx={{
        backgroundColor: "#8168F0",
        color: "white",
        borderRadius: "8px",
        height: "48px",
        width: "100%",
        fontSize: "16px",
        fontWeight: 600,
        textTransform: "none",
        '&:hover': {
          backgroundColor: "#6a54d8",
        }
      }}
    >
      На главную
    </Button>
  </DialogContent>
</Dialog>
    </main>
  );
}