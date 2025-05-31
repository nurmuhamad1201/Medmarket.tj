import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, message });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Контакты – Medmarket.tj</title>
        <meta
          name="description"
          content="Свяжитесь с нами через форму обратной связи или по телефону и электронной почте Medmarket.tj."
        />
        <meta property="og:title" content="Контакты – Medmarket.tj" />
        <meta
          property="og:description"
          content="Свяжитесь с нами через форму обратной связи или по телефону и электронной почте Medmarket.tj."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="min-h-screen bg-white py-12 px-4 md:px-8" aria-labelledby="contact-heading">
        
        <nav
          className="w-full max-w-5xl ml-35 mb-6 text-left text-gray-600 text-base font-medium"
          style={{ fontFamily: 'Mulish' }}
          aria-label="Breadcrumb"
        >
          <Link to={`/`} className="text-gray-500">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-purple-600 font-semibold" aria-current="page">Контакты</span>
        </nav>

         
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          <article className=" p-8   rounded-lg" aria-labelledby="form-heading">
            <h2 id="form-heading" className="text-3xl font-bold text-[#8168F0] mb-6 font-mulish">
              Форма обратной связи
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold text-gray-700 font-mulish">
                  ФИО
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Введите ваше ФИО"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1 font-semibold text-gray-700 font-mulish">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="Телефон"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-semibold text-gray-700 font-mulish">
                  Ваше сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Напишите ваше сообщение"
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
          </article>

           
          <aside className="bg-[#F4F4F4] p-8 shadow-md rounded-lg" aria-label="Контактная информация">
            <address className="not-italic space-y-6 font-mulish text-gray-800">
              <div>
                <p className="text-[25px] font-bold leading-none">Режим работы</p>
                <p className="text-[20px] font-medium">Ежедневно с 9:00 до 20:00</p>
              </div>

              <div>
                <p className="text-[25px] font-bold leading-none">Телефон</p>
                <a href="tel:+992900223344" className="text-[20px] font-medium text-purple-700 hover:underline">
                  (+992) 900-22-33-44
                </a>
              </div>

              <div>
                <p className="text-[25px] font-bold leading-none">E-mail</p>
                <a href="mailto:help@medmarket.tj" className="text-[20px] font-medium text-purple-700 hover:underline break-words">
                  help@medmarket.tj
                </a>
              </div>
            </address>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
