




import { Area } from '@ant-design/plots';
import React from "react";
import {useEffect} from 'react'
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";


function DemoArea() {
    useEffect(() => {
        AOS.init();
      }, []);

    const data = [
        { year: '2025', value: 40 },
        { year: '2026', value: 45 },
        { year: '2027', value: 60 },
        { year: '2028', value: 70 },
        { year: '2029', value: 80 },
        { year: '2030', value: 89 },
    ];

    const config = {
        data,
        xField: 'year',
        yField: 'value',
        smooth: true,
        point: {
            shape: 'square',
            size: 5,
            color: 'green',
        },
        label: {
            formatter: (datum) => `${datum.value}%`, 
            style: {
                fill: 'green',
                fontSize: 12,
                fontWeight: 'bold',
            },
        },

        line: {
            style: {
                stroke: 'darkgreen',
                strokeWidth: 2,
            },
        },
        areaStyle: {
            fill: 'l(270) 0:rgba(57,107,16,0.1) 1:rgba(57,107,16,3)', 
        },
    };

    return (<>
    <div className='md:flex  justify-center items-center  mx-auto   gap-20 container md:my-20 mt-10  md:p-0 p-10'>


    <div className='  md:w-4/12 ' data-aos="fade-up"
     data-aos-duration="3000" >


<div className='text-3xl text-[#4A7B31] font-bold'>
مؤشر تنامي الانضباط الطلابي
</div>
<div className='text-[#626262] mt-2'>

نبذل وُسعَنا، ونقدِّم للقيم التعليمية دعمَنا؛ لتكون متناميةً في ازدياد، نترقب نموَّها ، ونرصد تطورها عند الطلاب، والمعلمين، والقادة، والبيئات التعليمية، مؤمنين بأن هذه القيم نور على الدرب، يسطع فوق جبين الأوطان.. وهذا الشكل يبيّن القراءة الحالية لمؤشرات القيم التعليمية، مقارنةً بقراءات مستقبلية تصبو إليها نفوسنا الطامحة،   وخطواتنا الناجحة.


</div>
</div>
   
        <div data-aos="zoom-in" className=" md:w-8/12 rounded-[20px] shadow-xl md:my-0 p-2  my-10" >
            <Area {...config} />

        </div>
      
        </div>
    </>);
}

export default DemoArea;
