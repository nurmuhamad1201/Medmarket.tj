import React from 'react'
import { CheckCircle } from 'lucide-react';

export default function Massages() {
  return (
    <main>
      
    <h1 className='font-bold text-3xl text-[#000000]'>Ваши уведомления</h1>

    <section>
      <div className='flex flex-col gap-4 mt-4'>
        <div className="bg-[#F6F7FA] shadow-md rounded-xl p-5 space-y-2">
            <p className="text-sm text-gray-400">14.01.2025</p>
        
            <div>
          <h2 className="text-xl font-semibold text-gray-800">Заказ №2211</h2>
          <p className="text-sm text-gray-600">
            Ваш заказ доставлен. Спасибо за вашу покупку.
          </p>
        </div>
      </div>
        <div className="bg-[#F6F7FA] shadow-md rounded-xl p-5 space-y-2">
            <p className="text-sm text-gray-400">14.01.2025</p>
        
            <div className='w-4/5'>
          <h2 className="text-xl font-semibold text-gray-800">Скидка 20% на Парацетамол — надежная помощь при боли и температуре!</h2>
          <p className="text-sm text-gray-600">
           Только до конца месяца! Успей купить Парацетамол 500 мг со скидкой 20% в наших аптеках и на сайте.
          </p>
        </div>
      </div>


      
      </div>
    </section>


    </main>
  )
}
