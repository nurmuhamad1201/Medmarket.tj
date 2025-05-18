import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, message });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
         <div className="w-full max-w-5xl ml-35 mb-6 text-left text-gray-600 text-base font-medium" style={{ fontFamily: 'Mulish' }}>
        <Link to={`/`}><span className="text-gray-500">Главная</span></Link>
        <span className="mx-2">/</span>
        <span className="text-purple-600 font-semibold">Контакты</span>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-[#8168F0] mb-6">Форма обратной связи</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
  <div>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      placeholder="ФИО"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
    />
  </div>

  <div>
    <input
      type="tel"
      id="phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
      placeholder="Телефон"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
    />
  </div>

  <div>
    <textarea
      id="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
      rows={4}
      placeholder="Ваше сообщение"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
    />
  </div>

  <button
    type="submit"
    className="bg-[#8168F0] hover:bg-[#806fc9] text-white font-semibold py-2 px-6 rounded-md transition cursor-pointer duration-200"
  >
    Отправить заявку
  </button>
</form>

        </div>

        {/* Contact Info */}
        <div className="bg-[#F4F4F4] p-8 shadow-md rounded-lg">
  

  <div className="space-y-4">
    <div>
      <p
        className="text-[25px]  text-gray-800"
        style={{ fontFamily: 'Mulish', fontWeight: 700, lineHeight: '100%' }}
      >
        Режим работы
      </p>
      <p
        className="text-[20px] py-1 text-gray-700"
        style={{ fontFamily: 'Mulish', fontWeight: 500, lineHeight: '100%' }}
      >
        Ежедневно с 9:00 до 20:00
      </p>
    </div>

    <div>
      <p
        className="text-[25px] text-gray-800"
        style={{ fontFamily: 'Mulish', fontWeight: 700, lineHeight: '100%' }}
      >
        Телефон
      </p>
      <p
        className="text-[20px] py-1 text-gray-700"
        style={{ fontFamily: 'Mulish', fontWeight: 500, lineHeight: '100%' }}
      >
        (+992) 900-22-33-44
      </p>
    </div>

    <div>
      <p
        className="text-[25px] text-gray-800"
        style={{ fontFamily: 'Mulish', fontWeight: 700, lineHeight: '100%' }}
      >
        E-mail
      </p>
      <p
        className="text-[20px] text-gray-700 py-1 break-words"
        style={{ fontFamily: 'Mulish', fontWeight: 500, lineHeight: '100%' }}
      >
        help@medmarket.tj
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Contact;
