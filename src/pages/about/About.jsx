import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import aboutimg from '@/assets/svg/about.svg';

export default function About() {
  return (
    <>
      <Helmet>
        <title>О нас — Medmarket | Таджикский аптечный маркетплейс</title>
        <meta
          name="description"
          content="Medmarket — сервис для поиска и бронирования лекарств в таджикских аптеках."
        />
        <meta name="robots" content="index, follow" />
        {/* <link rel="canonical" href="https://yourdomain.com/about" /> */}

        <meta property="og:title" content="О нас — Medmarket" />
        <meta
          property="og:description"
          content="Сервис для поиска и бронирования лекарств в таджикских аптеках."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://yourdomain.com/about" /> */}

     
        <meta name="twitter:title" content="О нас — Medmarket" />
        <meta
          name="twitter:description"
          content="Сервис для поиска и бронирования лекарств в таджикских аптеках."
        />
      </Helmet>

      <section className="w-[86%] mx-auto py-10" lang="ru" aria-label="О нас - Medmarket">
        <nav
          className="w-full max-w-5xl mb-6 text-left text-gray-600 text-base font-medium"
          style={{ fontFamily: 'Mulish' }}
          aria-label="Навигация по сайту"
        >
          <Link to={`/`}>
            <span className="text-gray-500">Главная</span>
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-purple-600 font-semibold" aria-current="page">
            О нас
          </span>
        </nav>

        <article className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-white rounded-xl">
          <img
            src={aboutimg}
            alt="О компании Medmarket"
            className="w-1/2"
            width="500"
            height="auto"
            loading="lazy"
          />

          <aside className="text-left space-y-6" aria-label="Описание компании Medmarket">
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
              А ещё акционеры крупнейших компаний могут быть обнародованы! Противоположная точка зрения подразумевает, что независимые государства призывают нас к новым свершениям, которые, в свою очередь, становятся частью повседневной практики.
            </p>
          </aside>
        </article>

        <section className="pt-10 pb-10" aria-label="Дополнительная информация о компании">
          <p
            className="text-[20px] text-gray-700 leading-relaxed"
            style={{
              fontWeight: 400,
              lineHeight: '39px',
              letterSpacing: '0%',
            }}
          >
            А ещё акционеры крупнейших компаний могут быть обнародованы! Противоположная точка зрения подразумевает, что независимые государства призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям. Сложно сказать, почему предприниматели в сети интернет освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу. И нет сомнений, что интерактивные прототипы лишь добавляют фракционных разногласий и объективно рассмотрены соответствующими инстанциями.
          </p>
          <p
            className="text-[20px] text-gray-700 leading-relaxed"
            style={{
              fontWeight: 400,
              paddingTop: '20px',
              lineHeight: '39px',
              letterSpacing: '0%',
            }}
          >
            А ещё акционеры крупнейших компаний могут быть обнародованы! Противоположная точка зрения подразумевает, что независимые государства призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям. Сложно сказать, почему предприниматели в сети интернет освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу. И нет сомнений, что интерактивные прототипы лишь добавляют фракционных разногласий и объективно рассмотрены соответствующими инстанциями.
          </p>
        </section>
      </section>
    </>
  );
}
