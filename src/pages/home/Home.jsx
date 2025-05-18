import React from 'react'
import persen from '@/assets/images/persen.jpg'
import searchdoc from '@/assets/images/searchdoc.png'
import fire from '@/assets/svg/fire.svg'
import CardSlide from '@/components/cardslide'
const cardData = [
  {
    title: 'Заказ <br /> Медтехнику',
    bgColor: '#8168F0',
  },
  {
    title: 'Отправьте <br />фото рецепта',
    bgColor: '#8168F0',
  },
  {
    title: 'Витамины и БАД <br />ы из Кореи',
    bgColor: '#3CC9A9',
  },
  {
    title: 'Лекарства под <br />заказ из-за границы',
    bgColor: '#3CC9A9',
  },
]

export default function Home() {
  return (
    <main className="w-[86%] mx-auto">
      <section className="flex flex-col lg:flex-row items-stretch justify-between gap-6 px-6 py-10 bg-white min-h-[450px]">
       
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <img
            src={persen}
            className="w-full h-full object-cover rounded-2xl"
            alt="person"
          />
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl h-44 sm:h-48 p-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: card.bgColor }}
            >
              <p
                className="absolute top-4 left-4 text-white text-lg sm:text-xl font-bold leading-tight"
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
              <img
                src={searchdoc}
                alt="icon"
                className="absolute bottom-4 right-4 w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
      <section className='py-10'>
        <h2 className="flex items-center gap-2 pb-10" style={{ fontWeight: 900, fontSize: '30px', lineHeight: '100%', letterSpacing: 0, color: '#5B5858', }}><img src={fire} alt="fire" /> Товары дня</h2>
      <CardSlide />
      </section>
    </main>
  )
}
