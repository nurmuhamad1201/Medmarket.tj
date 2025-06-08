import React from 'react';
import includeapt from '@/assets/svg/includeapt.svg';

export default function ConnectPharmacy() {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      padding: '40px 5%',
      maxWidth: '1400px',
      margin: '0 auto',
      gap: '30px',
      minHeight: '400px'
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '12px',
        overflow: 'hidden',
         
      }}>
        <img 
          src={includeapt} 
          alt="Pharmacy connection illustration" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block'
          }} 
        />
      </div>

      <article style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <h1 style={{
          fontFamily: 'Mulish',
          fontWeight: 800,
          fontSize: '20px',
          lineHeight: '1',
          margin: 0,
          color: '#333'
        }}>
          Подключите свою аптеку к Medmarket — растите вместе с нами!
        </h1>

        <p style={{
          fontFamily: 'Mulish',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '1',
          margin: 0,
          color: '#555'
        }}>
          Расширьте продажи, находите новых клиентов и управляйте аптекой онлайн — легко и удобно.
        </p>

        <ul style={{
          fontFamily: 'Mulish',
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: '1.3',
          margin: 0,
          paddingLeft: '18px',
          color: '#444',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <li>Выгодные условия сотрудничества.</li>
          <li>Простое добавление товаров.</li>
          <li>Удобное управление заказами.</li>
          <li>Поддержка 24/7 — мы всегда на связи.</li>
          <li>Аналитика и отчёты — следите за продажами.</li>
          <li>Подключение за 1 день.</li>
          <li>Оставьте заявку — всё расскажем и поможем настроить.</li>
        </ul>

        <button style={{
          backgroundColor: '#8168F0',
          color: 'white',
          fontFamily: 'Mulish',
          fontWeight: 700,
          fontSize: '15px',
          padding: '12px 24px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          width: 'fit-content',
          transition: 'background-color 0.3s',
          marginTop: '15px',
          ':hover': {
            backgroundColor: '#6a56cc'
          }
        }}>
          Стать партнером
        </button>
      </article>
    </section>
  );
}