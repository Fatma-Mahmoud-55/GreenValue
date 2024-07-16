import React from 'react'
import NewChart from './NewChart/NewChart'
import {useEffect} from 'react'
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Chart1() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
   <>
   <div className='my-20 ' >
    <div className='max-w-xl mx-auto text-center  ' data-aos="zoom-in">

 
    <div className='text-3xl text-[#4A7B31] font-bold'>
    مؤشرات القيم التعليمية في المملكة
   </div>
   <div className='text-[#626262] mt-2'>

   تتمتع الفئات التعليمية في المملكة بألوانٍ من القيم التعليمية، تلك القيم التي لها نصيب الأسد في الإنجازات والابتكارات والتطورات المفصلية في حياتنا التعليمية، وهذا الشكل يوضح تنوعها وتكاملها، من مثل قيمة الانتماء الوطني، والاستجابة، والتسامح، والترابط الأسري، والانضباط، والعزيمة، والإيجابية، والوفاء، والأمانة.. وغيرها.
   </div>
   </div>

   <div className='pt-20'>
   <NewChart/>
   </div>
   </div>
   

   </>
  )
}
