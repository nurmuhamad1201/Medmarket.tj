import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Send } from 'lucide-react';
import qr from '@/assets/svg/qr.svg';

export default function Footer() {
  return (
    <footer className="bg-[#27272D] text-white py-10 md:px-15 px-0 font-montserrat">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo and Socials */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <h1 className="text-[#8168F0] font-extrabold text-3xl mb-4">
              MEDMARKET
            </h1>
          </Link>
          <h2 className="text-[18px] font-[400] leading-[35px] mb-2">Мы в соцсетях</h2>
          <nav aria-label="Социальные сети" className="flex gap-4">
            {[
              { icon: <Instagram className="w-6 h-6 text-[#27272D]" />, href: 'https://instagram.com', label: 'Instagram' },
              { icon: <Facebook className="w-6 h-6 text-[#27272D]" />, href: 'https://facebook.com', label: 'Facebook' },
              { icon: <Send className="w-6 h-6 text-[#27272D]" />, href: 'https://t.me', label: 'Telegram' },
              { icon: <Youtube className="w-6 h-6 text-[#27272D]" />, href: 'https://youtube.com', label: 'YouTube' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded shadow hover:scale-105 transition"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </nav>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-6">
       {/* Company Info */}
    <div>
      <ul className="space-y-1">
     {[
      { label: 'О компании', to: '/about' },
      { label: 'Контакты', to: '/contact' },
      { label: 'Вакансии', to: '/vacancy' },
     { label: 'Соглашение', to: '/terms' },
      { label: 'Обмен и возврат', to: '#' },
      { label: 'Акции в аптеках', to: '#' },
    ].map((item, index) => (
      <li key={index}>
        <Link
          to={item.to}
          className="text-white text-[17px] font-[400] leading-[35px] hover:text-[#8168F0] transition"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
    </div>
          
          <div>
            <ul className="space-y-1">
              {[
                
                { label: 'Вопросы и ответы', to: '/questions' },
                { label: 'Как сделать заказ' , to: '/howto-buy' },
                { label: 'Как получить заказ' , to: '/to-get' },
                { label: 'Доставка' , to: '/delivery' },
                { label: 'Оплата' , to: '/payment' },
                { label: 'Стать партнером' , to: '/become-partner' },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="text-white text-[17px] font-[400] leading-[35px] hover:text-[#8168F0] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="flex flex-col items-center">
          <p className="text-center text-[14px] font-[400] leading-[21px] mb-4">
            Скачать мобильное <br /> приложение
          </p>
          <img
            src={qr}
            alt="QR код для загрузки приложения"
            className="w-[140px] mb-4"
          />
          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Скачать с Google Play"
                className="h-[48px] object-contain"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Скачать в App Store"
                className="h-[48px] object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-10 text-base text-gray-400">
        © MEDMARKET {new Date().getFullYear()} .
      </div>
    </footer>
  );
}
