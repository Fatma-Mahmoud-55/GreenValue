import React, { useState, useRef } from 'react';
import { Pie } from '@ant-design/plots';
import ChartDetails from "./ChartDetails.jsx";
import { TbArrowWaveRightDown } from "react-icons/tb";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import {useEffect} from 'react'
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
function NewChart() {
    useEffect(() => {
        AOS.init();
      }, []);
    
    const [selectedSection, setSelectedSection] = useState('الانتماء الوطني');
    const pieChartRef = useRef(null);

    const pieData = [
        { name: 'الانتماء الوطني', value: 1, color: '#d44654' },
        { name: 'التسامح', value: 1, color: '#e45c53' },
        { name: 'الانضباط', value: 1, color: '#f78958' },
        { name: 'العزيمة', value: 1, color: '#fdbc73' },
        { name: 'الإيجابية', value: 1, color: '#fee398' },
        { name: 'الأمانة', value: 1, color: '#f4fab0' },
        { name: 'العدالة', value: 1, color: '#e7f5a7' },
        { name: 'الكرم', value: 1, color: '#d4eda3' },
        { name: 'التعاون', value: 1, color: '#bbe4a6' },
        { name: 'الوفاء', value: 1, color: '#a0d9a8' },
        { name: 'الترابط الاسري', value: 1, color: '#6abcae' },
        // { name: 'النزاهة', value: 1, color: '#55a6b5' },
    ];

    const config = {
        data: pieData,
        angleField: 'value',
        colorField: 'name',
        color: ({ name }) => {
            const item = pieData.find(d => d.name === name);
            return item ? item.color : '#000000';
        },
        legend: false,
        innerRadius: 0.4,
        label: {
            type: 'inner',
            offset: '-50%',
            content: ({ name }) => name,
            style: {
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                fill: '#2a2929',
            },
        },
        interactions: [{ type: 'element-active' }],
        responsive: true,
        onReady: (plot) => {
            plot.on('element:click', (evt) => {
                const clickedData = evt.data?.data;
                if (clickedData) {
                    setSelectedSection(clickedData.name);
                }
            });
        },
    };

    return (
        <>
          
           
<div className='flex flex-col justify-center items-center  md:mx-0  radial-gradient-background '>


                <div className=' flex flex-col justify-center items-center  max-w-3xl shadow-md rounded-2xl p-10  '  >
                    {/* <div 
                         style={{ fontWeight: 500, fontSize: '34px', color: '#626262' }}>
                        Students Values
                    </div> */}
                    <Pie {...config} chartRef={pieChartRef}  />
<div className='flex justify-start mt-4 '>
<h4 className='border  shadow-sm rounded-xl p-2 bg-main_color2  text-white '>{selectedSection}</h4>
</div>

                   
{selectedSection==="الانضباط"?(
  <div className='py-5 text-center'>
  <div className='text-xl pb-5 text-[#4A7B31] font-bold'>
  مؤشر الانضباط التعليمي
</div>

  يتنافس الطلاب والمعلمون والقادة وأولياء الأمور في قيمة الانضباط التعليمي؛ لتثمر جهودهم إبداعاً - بعدُ - في مضمار التعليم، فما من شك في أن الانضباط هو المفتاح على باب النجاح ... يتجلى ذلك كله في هذا الشكل التوضيحي.
  </div>
):""}
                </div>
              
            </div>


<div className='mt-[200px] ' >
    <div className='h-[200px] !rounded-t-[99%]  bg-[#E9F2DE]'></div>
                <div className='  flex flex-col justify-center items-center  bg-[#E9F2DE]  ' >
                   <div className='md:w-5/12' data-aos="zoom-in" > <ChartDetails selectedSection={selectedSection} /></div>
                   
                    <div className='max-w-xl mx-auto text-center py-20  '>
   <div className='text-3xl text-[#4A7B31] font-bold'>
   مؤشرات القيم التعليمية ونِسَبها
   </div>
   <div className='text-[#626262] mt-2'>
   انعكاسات القيم - الاثنتَيْ عشرةَ - على الطلاب، وعائلاتهم، وبيئاتهم، ومعلميهم، وقادتهم،   تبدو متفاوتةً كما في هذا الشكل.

    
   </div>
   </div>
   </div>
  
 
               
</div>   
                
<style jsx>{`
.radial-gradient-background {
  background: radial-gradient(circle at left, #BACDA2 1%, #FFF 24.5%);
}
`}</style>
            
        </>

    );
}

export default NewChart;
