import React, { useState } from 'react';
import { Typography } from '@mui/material';
import zakaz from '@/assets/svg/zakaz.svg';
import spray from '@/assets/svg/spray.svg';
import EmptyState from '@/components/EmptyState';

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState('all');

 const allOrders = [
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
    },];

  const filteredOrders =
    activeTab === 'all'
      ? allOrders
      : allOrders.filter((order) => order.status === 'Доставлено');

  const statusColor = {
    'Отклонен': '#FF0000',
    'Доставлено': '#61D2B9',
    'На модерации': '#FFCB2B',
    'В пути': '#407BFF',
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
                ) : order.status !== 'Доставлено' ? (
                  <button className="text-xs text-[#FF0000] cursor-pointer">
                    Отменить заказ &gt;
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
