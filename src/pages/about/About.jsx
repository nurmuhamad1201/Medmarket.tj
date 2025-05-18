import React from 'react';
import { Link } from 'react-router-dom';
import aboutimg from '@/assets/svg/about.svg';

export default function About() {
  return (
    <section className="w-[86%] mx-auto py-10">
      
      <div
        className="w-full max-w-5xl mb-6 text-left text-gray-600 text-base font-medium"
        style={{ fontFamily: 'Mulish' }}
      >
        <Link to={`/`}>
          <span className="text-gray-500">Главная</span>
        </Link>
        <span className="mx-2">/</span>
        <span className="text-purple-600 font-semibold">О нас</span>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10  bg-white rounded-xl ">
        <img
          src={aboutimg}
          alt="О компании Medmarket"
          className=" w-1/2"
        />

        <aside className=" text-left space-y-6">
          <h1
            className="font-bold text-2xl md:text-3xl text-gray-800"
            style={{ fontFamily: 'Mulish', lineHeight: '1.4' }}
          >
            Medmarket — таджикский аптечный маркетплейс, сервис для поиска и
            бронирования лекарств в аптеках.
          </h1>

          <p
            className="text-[20px] text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Mulish', fontWeight: 400 }}
          >
            А ещё акционеры крупнейших компаний могут быть обнародованы!
            Противоположная точка зрения подразумевает, что независимые
            государства призывают нас к новым свершениям, которые, в свою
            очередь, становятся частью повседневной практики.
          </p>
        </aside>
      </div>

    
    <section className='pt-10 pb-10 '>
    <p
              className="text-[20px] text-gray-700 leading-relaxed"
              style={{
                 
                fontWeight: 400,
                 
                lineHeight: '39px',
                letterSpacing: '0%',
              }}>А ещё акционеры крупнейших компаний могут быть обнародованы! Противоположная точка зрения подразумевает, что независимые государства призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям. Сложно сказать, почему предприниматели в сети интернет освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу. И нет сомнений, что интерактивные прототипы лишь добавляют фракционных разногласий и объективно рассмотрены соответствующими инстанциями.</p>
        <p className="text-[20px] text-gray-700 leading-relaxed"
              style={{
                 
                fontWeight: 400,
                 paddingTop: '20px',
                lineHeight: '39px',
                letterSpacing: '0%',
              }}>А ещё акционеры крупнейших компаний могут быть обнародованы! Противоположная точка зрения подразумевает, что независимые государства призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям. Сложно сказать, почему предприниматели в сети интернет освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу. И нет сомнений, что интерактивные прототипы лишь добавляют фракционных разногласий и объективно рассмотрены соответствующими инстанциями.</p>
    </section>

      
    </section>
  );
}
