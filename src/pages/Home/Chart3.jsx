import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Exporting from 'highcharts/modules/exporting';
import ExportData from 'highcharts/modules/export-data';
import Accessibility from 'highcharts/modules/accessibility';
import {useEffect} from 'react'
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

HighchartsMore(Highcharts);
Exporting(Highcharts);
ExportData(Highcharts);
Accessibility(Highcharts);

const ApexChart = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    const data = [
        {"Country": "الرياض", "Value Indicators": 90},
        {"Country": "المنطقة الشرقية", "Value Indicators": 83},
        {"Country": "الحدود الشمالية", "Value Indicators": 58},
        {"Country": "تبوك ", "Value Indicators": 73},
        {"Country": "القصيم ", "Value Indicators": 78},
        {"Country": "نجران ", "Value Indicators": 63},
        {"Country": "عسير ", "Value Indicators": 75},
        {"Country": "المدينة المنورة ", "Value Indicators": 80},
        {"Country": "حائل ", "Value Indicators": 70},
        {"Country": "الباحة", "Value Indicators": 68},
        {"Country": "الجوف", "Value Indicators": 65},
        {"Country": "مكة المكرمة ", "Value Indicators": 85},
        {"Country": "جازان ", "Value Indicators": 60},
    ];

    const colors = [
        '#FF4560', '#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5',
        '#546E7A', '#D4526E', '#8D5B4C', '#F86624', '#D7263D', '#1B998B'
    ];

    // Extract categories and series data
    const categories = data.map(item => item.Country);
    const series = data.map((item, index) => ({
        name: item.Country,
        data: [[index, item['Value Indicators'], item['Value Indicators']]],
        marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, 'rgba(255,255,255,0.5)'],
                    [
                        1,
                        colors[index % colors.length]
                    ]
                ]
            },
            lineWidth: 0 // Remove the border of bubbles
        }
    }));

    const options = {
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            height: 500, // Set the height of the chart
            zooming: {
                type: 'xy'
            }
        },
        title:false,
        // {
        //     text: 'Highcharts bubbles with radial gradient fill',
        //     align: 'center'
        // },
        xAxis: {
            gridLineWidth: 1,
            categories: categories,
            accessibility: {
                rangeDescription: 'Range: 0 to 100.'
            },
            title: {
                text: 'المنطقة',
                style:{
                    fontSize: '16px',
                    fontWeight: 'bold',
                }
            },
        },
        yAxis: {
            title: {
                text: 'مؤشرات القيمة'
            },
            startOnTick: false,
            endOnTick: false,
            accessibility: {
                rangeDescription: 'Range: 0 to 100.'
            }
        },
        exporting: {
            enabled: false // Disable exporting functionality
        },
        credits: {
            enabled: false // Hide credits
        },
        tooltip: {
            formatter: function () {
                return `<b>   % ${this.y} :   ${this.series.name}</b>`;
            },

        },
        series: series
    };

    return (<>
     <div className='md:flex  justify-center items-center  mx-auto   gap-20 container my-36  md:p-0 p-10 '>
      
     <div  data-aos="zoom-in"  className="   md:w-8/12   rounded-xl shadow-xl md:my-0  my-10">
            <div className="highcharts-figure">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    style={{height: '60%'}} // Ensure chart fills its container
                />
            </div>
        </div>

        <div className='md:w-4/12  mt-10  ' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" >


            <div className='text-3xl text-[#4A7B31] font-bold'>
            مؤشرات القيم في المديريات التعليمية
            </div>
            <div className='text-[#626262] mt-2'>
            لكل مؤسسة تعليمية دور يتبلور في إنضاج ثمرات القيم التعليمية، والقيام عليها، والحث على التشبث بأهداب النجاح .. وهذا الشكل يوضح مؤشرات القيم بحسب كل منطقة إدارية، ومديرية تعليمية.

            </div>
        </div>
        
        </div>
    </>);
};

export default ApexChart;
