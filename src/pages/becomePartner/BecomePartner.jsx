import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet";

const logos = [
  {
    src: "https://cdn.picodi.com/ua/shop/thumb_400/apteka911_1860_001.png",
    alt: "Аптека 911 Логотип",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.vIGWlZRLg3wDYmbV60V_YgHaCC&pid=Api&P=0&h=220",
    alt: "Партнер 2 Логотип",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.Ws2wZXjUBpsf93u8yLGKywHaB7&pid=Api&P=0&h=220",
    alt: "Партнер 3 Логотип",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.lVK1n8rmtSWC4eGXEizHnAAAAA&pid=Api&P=0&h=220",
    alt: "Партнер 4 Логотип",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.fYPOuIXDu1L84Y2UKl2UYgHaEq&pid=Api&P=0&h=220",
    alt: "Партнер 5 Логотип",
  },
  {
    src: "https://cdn.picodi.com/ua/shop/thumb_400/apteka911_1860_001.png",
    alt: "Аптека 911 Логотип",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.vIGWlZRLg3wDYmbV60V_YgHaCC&pid=Api&P=0&h=220",
    alt: "Партнер 2 Логотип",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.Ws2wZXjUBpsf93u8yLGKywHaB7&pid=Api&P=0&h=220",
    alt: "Партнер 3 Логотип",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.lVK1n8rmtSWC4eGXEizHnAAAAA&pid=Api&P=0&h=220",
    alt: "Партнер 4 Логотип",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.fYPOuIXDu1L84Y2UKl2UYgHaEq&pid=Api&P=0&h=220",
    alt: "Партнер 5 Логотип",
  },
  {
    src: "https://cdn.picodi.com/ua/shop/thumb_400/apteka911_1860_001.png",
    alt: "Аптека 911 Логотип",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.vIGWlZRLg3wDYmbV60V_YgHaCC&pid=Api&P=0&h=220",
    alt: "Партнер 2 Логотип",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.Ws2wZXjUBpsf93u8yLGKywHaB7&pid=Api&P=0&h=220",
    alt: "Партнер 3 Логотип",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.lVK1n8rmtSWC4eGXEizHnAAAAA&pid=Api&P=0&h=220",
    alt: "Партнер 4 Логотип",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.fYPOuIXDu1L84Y2UKl2UYgHaEq&pid=Api&P=0&h=220",
    alt: "Партнер 5 Логотип",
  },
];

export default function BecomePartner() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add form submission logic here
  };

  return (
    <main className="w-[86%] mx-auto py-12 px-4 md:px-8" aria-labelledby="partner-heading">
      <Helmet>
        <title>Стать партнером — MedMarket.tj | Увеличение потока клиентов</title>
        <meta name="description" content="Станьте партнером MedMarket и увеличьте поток покупателей в вашу аптеку. Отправьте заявку онлайн прямо сейчас." />
        <meta name="keywords" content="партнерство, аптека, сотрудничество, MedMarket, стать партнером, фармацевтика Таджикистан" />
        <meta property="og:title" content="Стать партнером — MedMarket.tj" />
        <meta property="og:description" content="Станьте партнером MedMarket и увеличьте поток покупателей в вашу аптеку." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medmarket.tj/become-partner" />
        <link rel="canonical" href="https://medmarket.tj/become-partner" />
      </Helmet>

      <nav className="w-full max-w-5xl mb-6 text-left text-gray-600 text-base font-medium" aria-label="Хлебные крошки">
        <ol className="flex items-center">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-500 hover:text-purple-600 transition-colors" aria-label="Перейти на главную">Главная</Link>
          </li>
          <li className="mx-2" aria-hidden="true">/</li>
          <li className="text-purple-600 font-semibold" aria-current="page">Стать партнером</li>
        </ol>
      </nav>

      <header className="h-auto md:h-[376px] rounded-[20px] flex justify-center items-center bg-[#8168F0] text-center text-white py-12 px-6 md:py-0">
        <div className="max-w-4xl">
          <h1 id="partner-heading" className="text-3xl md:text-5xl font-bold p-4 md:p-8 leading-tight">
            Увеличьте поток покупателей с нашим сервисом
          </h1>
          {/* <p className="text-lg md:text-xl mt-4 opacity-90">
            Присоединяйтесь к нашей сети партнеров и получите доступ к тысячам клиентов
          </p> */}
        </div>
      </header>

      <article className="mt-12" aria-labelledby="partner-form-heading">
        <header className="mb-8">
          <h2 id="partner-form-heading" className="font-bold text-2xl md:text-3xl text-[#434343]">
            Отправить заявку
          </h2>
          {/* <p className="text-gray-600 mt-2">
            Заполните форму ниже и наш менеджер свяжется с вами в ближайшее время
          </p> */}
        </header>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <section className="w-full lg:w-[44%]" aria-labelledby="form-section">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="fullName" className="sr-only">ФИО</label>
                <TextField
                  id="fullName"
                  label="ФИО"
                  variant="outlined"
                  fullWidth
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Введите полное имя"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className="sr-only">Телефон</label>
                <TextField
                  id="phoneNumber"
                  label="Телефон"
                  variant="outlined"
                  fullWidth
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="Введите номер телефона"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">О вашей аптеке</label>
                <TextField
                  id="message"
                  label="О вашей аптеке"
                  multiline
                  rows={8}
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Расскажите кратко о вашей аптеке"
                  aria-required="true"
                />
              </div>
              
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#8168F0",
                  borderRadius: "12px",
                  py: "10px",
                  "&:hover": { backgroundColor: "#6e54d3" },
                }}
                aria-label="Отправить заявку"
                className="w-full md:w-auto"
              >
                Отправить заявку
              </Button>
            </form>
          </section>

        <aside 
  className="w-full lg:w-1/2 p-5 md:p-10 bg-[#F4F4F4] rounded-2xl text-[#000000] self-start"
  aria-label="Контактная информация"
>
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-semibold ">Режим работы</h3>
      <p>Ежедневно с 9:00 до 20:00</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold ">Телефон</h3>
      <p>
        <a 
          href="tel:+992900223344" 
          className="hover:underline text-[#4B4B4B]"
        >
          (+992) 900-22-33-44
        </a>
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold ">E-mail</h3>
      <p>
        <a 
          href="mailto:help@medmarket.tj" 
          className="text-[#4B4B4B] hover:underline"
        >
          help@medmarket.tj
        </a>
      </p>
    </div>
  </div>
</aside>
        </div>
      </article>

      <section className="py-20" aria-labelledby="partners-heading">
        
          <h2 id="partners-heading" className="text-2xl mb-8 md:text-3xl font-bold text-[#000000]">
           С нами сотрудничают
          </h2>
          
   
        
        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center">
          {logos.map((logo, index) => (
            <figure key={index} className="w-full max-w-[160px]">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                width="160"
                height="60"
                className="w-full h-auto max-h-[60px] object-contain transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 cursor-pointer"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}