import img from '../../assets/image4.png';
import img2 from '../../assets/image6.png';
import {useEffect} from 'react'
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
export default function HeroSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-gradient-to-t from-white via-[#F5FCE8] to-white">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center py-16">
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white pb-[8%] p-10 rounded-b-[440px] shadow-lg">
              <img src={img} alt="World" className="w-full mb-1 h-auto p-[70px] " data-aos="zoom-in" />
            </div>
          </div>
          <div className="md:w-1/2 md:px-20  px-10 md:mt-0 mt-10" data-aos="fade-down">
         
            <p className="mt-4 text-[#626262] text-xl flex flex-col justify-end">
              <div className="font-bold text-[28px]  text-right text-main_color2 pb-3 ">القيم التعليمية في العالم</div>

              مبعَث فخرنا أننا نُزَيِّن وجه العالم بالقيم، وبخاصة القيم التعليمية، وهذه الخريطة تأخذك إلى مواضع إنجازاتنا؛ لِتَرَى - بِأُمّ العَين - حدود نجاحاتنا، وكيف أننا قمنا بأخذ عينات محددة، بهدف التأسيس للنهضة التعليمية في العالم، عن طريق القيم التعليمية.
            </p>
            <a href='https://value-platform.com/maindashboard' target='_blank'>
            <button className="mt-6 bg-main_color2 text-white px-4 py-2 rounded-md hover:scale-[1.05] ">اذهب الآن</button>
            </a>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-8 md:mt-0 order-1 md:order-2 bg-white pt-1 rounded-t-[440px]">
            <img src={img2} alt="Chart" className="w-full h-auto mt-[9%] pt-14 px-[120px] rounded-t-2" data-aos="zoom-in" />
          </div>
          <div className="md:w-1/2 order-2 md:order-1 md:px-20 px-10 mt-10 md:mt-0"  data-aos="fade-up">
          
            <p className="mt-4 text-[#626262] font-normal text-[22px]">
              <div className="font-bold text-[28px] text-main_color2 ">مؤشر القيم التعليمية للدول</div>
              لكل أمة قِيم تُعليها، وتبقى القيم التعليمية هي القاسم المشترك بين الأمم جميعاً، وهذا الشكل يكشف عن ترتيب القيم - بحسب أولويتها - وعن مبلغ إنجازها في كل دولة.
            </p>
            <a href='https://value-platform.com/dashboard' target='_blank'>
            <button className="mt-6 bg-main_color2 text-white px-4 py-2 rounded-md hover:scale-[1.05] ">اذهب الآن</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}