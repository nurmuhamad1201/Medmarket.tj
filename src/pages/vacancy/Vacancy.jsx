import { Inspect } from 'lucide'
import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export default function Vacancy() {
  return (
    <section className="md:w-[86%] sm:w-[90%] w-[96%] mx-auto py-10">
        <div className="w-full max-w-5xl  mb-6 text-left text-gray-600 text-base font-medium" style={{ fontFamily: 'Mulish' }}>
        <Link to={`/`}><span className="text-[#000000]">Главная</span></Link>
        <span className="mx-2">/</span>
        <span className="text-purple-600 cursor-pointer font-semibold">Вакансии</span>
      </div>

      <h1 className="font-mulish font-bold md:text-[48px] sm:text-3xl text-[24px] text-[#000000] leading-[100%] tracking-[0]">Вакансии</h1>
    

     <section className='py-8'>
     <details className="bg-[#FAFAFA] p-6 rounded-2xl mb-4 w-full mx-auto group">
      <summary className="cursor-pointer flex justify-between items-center">
        <div className="flex flex-col items-start">
          <span className="text-sm text-[#0B1F3580] font-normal ">14.01.2025</span>
          <span className="text-xl font-bold py-2 text-black">Внутренний аудитор</span>
          <span className="text-base font-normal text-[#0B1F3580] ">
            Требуется аудитор в Службе внутреннего аудита
          </span>
        </div>
          
        <KeyboardArrowRightIcon
          className="transition-transform duration-300 group-open:rotate-90 text-[#8168F0]"
          fontSize="large"
        />
      </summary>

      <div className="mt-5  ">
        <p style={{ fontFamily: 'Mulish', fontWeight: 400, fontSize: '18px', lineHeight: '26px', letterSpacing: '0%', color: '#0B1F3580' }}>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati magni iste dicta molestias quaerat iure fugit sint ipsa error nihil? Ratione, asperiores provident. Soluta cumque tempora aspernatur illo temporibus fuga a quo doloremque earum, commodi, reprehenderit officiis dolorem. Neque corporis distinctio ratione perferendis! Repudiandae animi ipsum error laudantium mollitia obcaecati ea voluptatibus praesentium facilis enim dicta nam quas corrupti, nulla ipsa maiores provident placeat qui aut earum alias? Necessitatibus quis totam tempora unde ipsa, vero pariatur quaerat magni explicabo eius, accusamus enim nulla culpa eligendi tenetur praesentium sunt obcaecati ullam? Totam numquam earum dolorum pariatur blanditiis ea aut harum officiis.
        </p>
      </div>
    </details>
     </section>

    </section>
  )
}
