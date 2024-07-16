import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';

Highcharts3D(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
accessibility(Highcharts);

const Highcharts3DColumnChart = () => {
    const dataxxx = [
        { value: 'الإحترام', 'world wide': 12.2, 'saudia': 11.17 },
        { value: 'النزاهة', 'world wide': 12.0, 'saudia': 10.2 },
        { value: 'التفوق', 'world wide': 10.6, 'saudia': 12.0 },
        { value: 'الإستجابة', 'world wide': 8.8, 'saudia': 16.0 },
        { value: 'الإبتكار', 'world wide': 8.1, 'saudia': 8.3 },
        { value: 'الإِبداع', 'world wide': 6.3, 'saudia': 12.3 },
        { value: 'التعلُّم', 'world wide': 5.7, 'saudia': 0 },
        { value: 'التنوع', 'world wide': 5.3, 'saudia': 0 },
        { value: 'الجودة', 'world wide': 5.0, 'saudia': 12.3 },
        { value: 'العمل الجماعي', 'world wide': 4.2, 'saudia': 13.0 },
        { value: 'الشمولية', 'world wide': 3.8, 'saudia': 0 },
        { value: 'الإلتزام', 'world wide': 3.6, 'saudia': 8.0 },
        { value: 'الشفافية', 'world wide': 0, 'saudia': 10.5 },
        { value: 'القيم', 'world wide': 0, 'saudia': 10.2 },
        { value: 'الأمانة', 'world wide': 0, 'saudia': 7.7 },
    ];

    const categories = dataxxx.map(item => item.value);
    const worldWideData = dataxxx.map(item => item['world wide']);
    const saudiaData = dataxxx.map(item => item['saudia']);

    useEffect(() => {
        Highcharts.chart('container', {
            title:false,
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 5,
                    beta: 1,
                    viewDistance: 20,
                    depth: 55
                }
            },
           
            xAxis: {
                categories: categories,
              
                labels: {
                    skew3d: true,
                    style: {
                        fontSize: '16px'
                    }
                }
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title:false,
                // title: {
                //     text: 'Values',
                //     skew3d: true,
                //     style: {
                //         fontSize: '16px'
                //     }
                // }
            },
            tooltip: {
                shared: true,
                useHTML: true,
                headerFormat: '<b>{point.key}</b><br>',
                pointFormat: '% {point.y} : {series.name}<br>'
            },
            plotOptions: {
                column: {
                    depth: 40,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}%'
                    }
                }
            },
            series: [
                {
                    name: 'العالم',
                    data: worldWideData,
                    color: '#BACDA2'
                },
                {
                    name: 'السعودية',
                    data: saudiaData,
                    color: '#4A7B31'
                   
                }
            ]
        });
    }, [categories, worldWideData, saudiaData]);

    return (
        <div className='md:flex gap-10 justify-center items-center '>

<figure className="highcharts-figure md:w-8/12   rounded-[20px] shadow-xl ">
            <div className="" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
               
            <div id="container"></div>
               
         

            </div>


          
        </figure>

               <div data-aos="fade-up"  className='md:w-4/12 mb-10  '>
            <div className='text-3xl text-[#4A7B31] font-bold'>
            مؤشرات القيم التعليمية بين المملكة العالم
            </div>
            <div className='text-[#626262] mt-2'>
            المجتمع الدولي المتوازن المتكامل يقوم على ساقين: هما العالمية، والوطنية .. وهذا الشكل يوضح مؤشر المقارنة بين القيم التعليمية العالمية، والقيم التعليمية الوطنية .. ومن خلال القيم المشتركة نقيم جسور التآخي والترابط بين الهوية الوطنية والانتماء العالمي، الأمر الذي يُسهم في تحقيق التنمية المستدامة والسلام العالمي جميعاً.
            </div>
        </div>
        </div>
       

    );
};

export default Highcharts3DColumnChart;