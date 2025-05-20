import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Vacancy() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Вакансии – Medmarket.tj</title>
        <meta
          name="description"
          content="Актуальные вакансии компании Medmarket.tj. Присоединяйтесь к нашей команде профессионалов."
        />
      </Helmet>

      {/* Main Content */}
      <main
        className="md:w-[86%] sm:w-[90%] w-[96%] mx-auto py-10"
        role="main"
        aria-labelledby="vacancy-heading"
      >
        {/* Breadcrumbs */}
        <nav
          className="w-full max-w-5xl mb-6 text-left text-gray-600 text-base font-medium"
          aria-label="Breadcrumb"
        >
          <Link to="/">
            <span className="text-[#000000]">Главная</span>
          </Link>
          <span className="mx-2">/</span>
          <span className="text-purple-600 font-semibold">Вакансии</span>
        </nav>

        {/* Page Heading */}
        <h1
          id="vacancy-heading"
          className="font-mulish font-bold md:text-[48px] sm:text-3xl text-[24px] text-[#000000] leading-[100%] tracking-[0]"
        >
          Вакансии
        </h1>

        {/* Vacancy List */}
        <section className="py-8" aria-label="Список вакансий">
          <article className="bg-[#FAFAFA] p-6 rounded-2xl mb-4 w-full mx-auto">
            <details className="group">
              <summary className="cursor-pointer flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <time dateTime="2025-01-14" className="text-sm text-[#0B1F3580] font-normal">
                    14.01.2025
                  </time>
                  <h2 className="text-xl font-bold py-2 text-black">Внутренний аудитор</h2>
                  <p className="text-base font-normal text-[#0B1F3580]">
                    Требуется аудитор в Службе внутреннего аудита
                  </p>
                </div>

                <KeyboardArrowRightIcon
                  className="transform transition-transform duration-300 group-open:rotate-90 text-[#8168F0]"
                  fontSize="large"
                />
              </summary>

              <div className="mt-5">
                <p
                  style={{
                    fontFamily: 'Mulish',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '26px',
                    letterSpacing: '0%',
                    color: '#0B1F3580',
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati magni iste...
                </p>
              </div>
            </details>
          </article>
          <article className="bg-[#FAFAFA] p-6 rounded-2xl mb-4 w-full mx-auto">
            <details className="group">
              <summary className="cursor-pointer flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <time dateTime="2025-01-14" className="text-sm text-[#0B1F3580] font-normal">
                    14.01.2025
                  </time>
                  <h2 className="text-xl font-bold py-2 text-black">Кассир</h2>
                  <p className="text-base font-normal text-[#0B1F3580]">
                    А ещё акционеры крупнейших компаний могут быть обнародованы! 
                  </p>
                </div>

                <KeyboardArrowRightIcon
                  className="transform transition-transform duration-300 group-open:rotate-90 text-[#8168F0]"
                  fontSize="large"
                />
              </summary>

              <div className="mt-5">
                <p
                  style={{
                    fontFamily: 'Mulish',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '26px',
                    letterSpacing: '0%',
                    color: '#0B1F3580',
                  }}
                >
                   Противоположная точка зрения подразумевает, что независимые государства призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям. Сложно сказать, почему предприниматели в сети интернет освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу. И нет сомнений, что интерактивные прототипы лишь добавляют фракционных разногласий и объективно рассмотрены соответствующими инстанциями.
                </p>
              </div>
            </details>
          </article>
        </section>
      </main>
    </>
  );
}
