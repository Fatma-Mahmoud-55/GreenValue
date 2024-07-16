import { Line } from '@ant-design/plots';
import { Scatter } from '@ant-design/plots';
import img from '../../assets/1.png'

import {useEffect} from 'react'
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
    { "القيمة": "الانتماء الوطني",  'مؤشرات القيمة': 90.1, "continent": '#D64F5C' },
    { "القيمة": "التسامح",  'مؤشرات القيمة': 65, "continent": '#E5645B' },
    { "القيمة": "الانضباط",  'مؤشرات القيمة': 81, "continent": '#F78F60' },
    { "القيمة": "العزيمة",  'مؤشرات القيمة': 42, "continent": '#FDBF7A' },
    { "القيمة": "الإيجابية",  'مؤشرات القيمة': 62, "continent": '#FEE49D' },
    { "القيمة": "الأمانة",  'مؤشرات القيمة': 48, "continent": '#E8F5AB' },
    { "القيمة": "العدالة",  'مؤشرات القيمة': 79, "continent": '#E8F5AB' },
    { "القيمة": "الكرم",  'مؤشرات القيمة': 86, "continent": '#D6EDA7' },
    { "القيمة": "التعاون",  'مؤشرات القيمة': 72, "continent": '#BEE5AA' },
    { "القيمة": "الوفاء",  'مؤشرات القيمة': 37, "continent": '#A4DAAC' },
    { "القيمة": "الترابط الاسري",  'مؤشرات القيمة': 55, "continent": '#71BFB2' },
    { "القيمة": "النزاهة",  'مؤشرات القيمة': 75, "continent": '#5DAAB8' },
];




const config = {
    data,
    xField: 'القيمة',
    yField: 'مؤشرات القيمة',
    sizeField: 'مؤشرات القيمة',
    colorField: 'القيمة',
    xAxis: {
        tickCount: 13,
        label: {
            rotate: -120,
            style: {
                fontSize: 15,
                fontWeight: 'bold',
            },
            offset: 40,
        },
    },
    pointStyle: {
        fillOpacity: 0.3,
        stroke: '#777',
        lineWidth: 1,

    },
    size: [4, 30],
    shape: 'circle',
    tooltip: {
        fields: ['القيمة', 'مؤشرات القيمة'],
    },
    annotations: [
        {
            type: 'line',
            start: ['min', 66],
            end: ['max', 66],
            style: {
                stroke: '#D64F5C',
                lineWidth: 2,
            },
            text: {
                content: 'المتوسط : 66',
                position: 'start',
                style: {
                    fill: '#D64F5C',
                    fontSize: 14,
                    fontWeight: 'bold',
                },
            },
        },
    ],
};
export default function Chart4() {
    useEffect(() => {
        AOS.init();
      }, []);

  return (
    <>
 <div className='md:flex  justify-center  mx-auto items-center   gap-20 container md:my-36   md:p-0 p-10 '>

     

        <div className='md:w-4/12  mt-10  '  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" >


        <div className='text-3xl text-[#4A7B31] font-bold'>
        مؤشر القيم وفق المعيار الوطني
            </div>
            <div className='text-[#626262] mt-2'>

            في إطار سعينا الدءوب نحو تحقيق المعايير التعليمية العليا، وملامسة سقف طموحاتنا، فإننا نطبق المعيار الوطني على منجزاتنا؛ ليكشف لنا - في وضوح وجلاء - عن مواطن تفوقنا، وعن المواضع التي تحتاج إلى تعزيز الجهود والدعم. 
            وهذا الشكل يبين مؤشر القيم بالمعيار الوطني ( أعلى، أدنى، مساوٍ).
            </div>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  className=" md:w-8/12   rounded-xl shadow-xl md:my-0  my-1 p-2"  dir="ltr">
            <Scatter {...config} />
        </div>
        </div>


    </>
  )
}
