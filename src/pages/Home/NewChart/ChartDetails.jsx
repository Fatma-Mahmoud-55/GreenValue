import React, { useState, useEffect } from 'react';
import { RadialBar } from '@ant-design/plots';
import { PiArrowBendRightDownBold } from "react-icons/pi";

const dataSets = {
    'الانتماء الوطني': [
        { name: 'Student discipline', percentage: '22%', star: 22, color: '#55a6b5' },
        { name: 'Family discipline', percentage: '66%', star: 66, color: '#a0d9a8' },
        { name: 'Leader discipline', percentage: '89%', star: 89, color: '#e7f5a7' },
        { name: 'Teacher discipline', percentage: '95%', star: 95, color: '#f78958' },
        { name: 'Environment discipline', percentage: '100%', star: 100, color: '#d44654' },
    ],
    'التسامح': [
        { name: 'Student tolerance', percentage: '30%', star: 30, color: '#55a6b5' },
        { name: 'Family tolerance', percentage: '70%', star: 70, color: '#a0d9a8' },
        { name: 'Leader tolerance', percentage: '90%', star: 90, color: '#e7f5a7' },
        { name: 'Teacher tolerance', percentage: '85%', star: 85, color: '#f78958' },
        { name: 'Environment tolerance', percentage: '95%', star: 95, color: '#d44654' },
    ],
    'الانضباط': [
        { name: 'Student discipline', percentage: '25%', star: 25, color: '#55a6b5' },
        { name: 'Family discipline', percentage: '65%', star: 65, color: '#a0d9a8' },
        { name: 'Leader discipline', percentage: '88%', star: 88, color: '#e7f5a7' },
        { name: 'Teacher discipline', percentage: '92%', star: 92, color: '#f78958' },
        { name: 'Environment discipline', percentage: '97%', star: 97, color: '#d44654' },
    ],
    'العزيمة': [
        { name: 'Student determination', percentage: '25%', star: 25, color: '#55a6b5' },
        { name: 'Family determination', percentage: '65%', star: 65, color: '#a0d9a8' },
        { name: 'Leader determination', percentage: '88%', star: 88, color: '#e7f5a7' },
        { name: 'Teacher determination', percentage: '92%', star: 92, color: '#f78958' },
        { name: 'Environment determination', percentage: '97%', star: 97, color: '#d44654' },
    ],
    'الإيجابية': [
        { name: 'Student Positivity', percentage: '25%', star: 25, color: '#55a6b5' },
        { name: 'Family Positivity', percentage: '65%', star: 65, color: '#a0d9a8' },
        { name: 'Leader Positivity', percentage: '88%', star: 88, color: '#e7f5a7' },
        { name: 'Teacher Positivity', percentage: '92%', star: 92, color: '#f78958' },
        { name: 'Environment Positivity', percentage: '97%', star: 97, color: '#d44654' },
    ],
    'الأمانة': [
        { name: 'Student Honesty', percentage: '25%', star: 25, color: '#55a6b5' },
        { name: 'Family Honesty', percentage: '65%', star: 65, color: '#a0d9a8' },
        { name: 'Leader Honesty', percentage: '88%', star: 88, color: '#e7f5a7' },
        { name: 'Teacher Honesty', percentage: '92%', star: 92, color: '#f78958' },
        { name: 'Environment Honesty', percentage: '97%', star: 97, color: '#d44654' },
    ],

    'العدالة': [
        { name: 'Student Justice', percentage: '25%', star: 25, color: '#55a6b5' },
        { name: 'Family Justice', percentage: '65%', star: 65, color: '#a0d9a8' },
        { name: 'Leader Justice', percentage: '88%', star: 88, color: '#e7f5a7' },
        { name: 'Teacher Justice', percentage: '92%', star: 92, color: '#f78958' },
        { name: 'Environment Justice', percentage: '97%', star: 97, color: '#d44654' },
    ],
    'الكرم': [
        { name: 'Student Generosity', percentage: '25%', star: 25, color: '#55a6b5' },
        { name: 'Family Generosity', percentage: '65%', star: 65, color: '#a0d9a8' },
        { name: 'Leader Generosity', percentage: '88%', star: 88, color: '#e7f5a7' },
        { name: 'Teacher Generosity', percentage: '92%', star: 92, color: '#f78958' },
        { name: 'Environment Generosity', percentage: '97%', star: 97, color: '#d44654' },
    ],
    'التعاون': [
        { name: 'Student Cooperation', percentage: '25%', star: 25, color: '#55a6b5' },
        { name: 'Family Cooperation', percentage: '65%', star: 65, color: '#a0d9a8' },
        { name: 'Leader Cooperation', percentage: '88%', star: 88, color: '#e7f5a7' },
        { name: 'Teacher Cooperation', percentage: '92%', star: 92, color: '#f78958' },
        { name: 'Environment Cooperation', percentage: '97%', star: 97, color: '#d44654' },
    ],
    'الوفاء': [
        { name: 'Student Loyalty', percentage: '25%', star: 25, color: '#55a6b5' },
        { name: 'Family Loyalty', percentage: '65%', star: 65, color: '#a0d9a8' },
        { name: 'Leader Loyalty', percentage: '88%', star: 88, color: '#e7f5a7' },
        { name: 'Teacher Loyalty', percentage: '92%', star: 92, color: '#f78958' },
        { name: 'Environment Loyalty', percentage: '97%', star: 97, color: '#d44654' },
    ],
    'الترابط الاسري': [
        { name: 'Student bonding', percentage: '25%', star: 25, color: '#55a6b5' },
        { name: 'Family bonding', percentage: '65%', star: 65, color: '#a0d9a8' },
        { name: 'Leader bonding', percentage: '88%', star: 88, color: '#e7f5a7' },
        { name: 'Teacher bonding', percentage: '92%', star: 92, color: '#f78958' },
        { name: 'Environment bonding', percentage: '97%', star: 97, color: '#d44654' },
    ],
    // 'النزاهة': [
    //     { name: 'Student Integrity', percentage: '25%', star: 25, color: '#55a6b5' },
    //     { name: 'Family Integrity', percentage: '65%', star: 65, color: '#a0d9a8' },
    //     { name: 'Leader Integrity', percentage: '88%', star: 88, color: '#e7f5a7' },
    //     { name: 'Teacher Integrity', percentage: '92%', star: 92, color: '#f78958' },
    //     { name: 'Environment Integrity', percentage: '97%', star: 97, color: '#d44654' },
    // ],
};

const detailMessages = {
    'الانتماء الوطني': {
        'Student discipline': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family discipline': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age.',
        'Leader discipline': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher discipline': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment discipline': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },
    'التسامح': {
        'Student tolerance': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family tolerance': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age.',
        'Leader tolerance': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher tolerance': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment tolerance': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },
    'الانضباط': {
        'Student discipline': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family discipline': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age. Discipline',
        'Leader discipline': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher discipline': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment discipline': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },
    'العزيمة': {
        'Student determination': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family determination': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age.',
        'Leader determination': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher determination': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment determination': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },
    'الإيجابية': {
        'Student Positivity': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family Positivity': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age.',
        'Leader Positivity': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher Positivity': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment Positivity': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },

    'الأمانة': {
        'Student Honesty': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family Honesty': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age. Discipline',
        'Leader Honesty': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher Honesty': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment Honesty': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },
    'العدالة': {
        'Student Justice': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family Justice': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age.',
        'Leader Justice': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher Justice': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment Justice': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },
    'الكرم': {
        'Student Generosity': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family Generosity': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age.',
        'Leader Generosity': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher Generosity': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment Generosity': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },

    'التعاون': {
        'Student Cooperation': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family Cooperation': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age. Discipline',
        'Leader Cooperation': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher Cooperation': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment Cooperation': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },

    'الوفاء': {
        'Student Loyalty': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family Loyalty': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age.',
        'Leader Loyalty': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher Loyalty': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment Loyalty': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },
    'الترابط الاسري': {
        'Student bonding': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
        'Family bonding': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age.',
        'Leader bonding': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
        'Teacher bonding': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
        'Environment bonding': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    },

    // 'Integrity': {
    //     'Student Integrity': 'The value of student discipline represents 22% of the index, reflecting students\' ability to control themselves and direct their energies towards specific goals, confirming their potential to achieve success in various fields.',
    //     'Family Integrity': 'value represents 66% of the index. Family discipline is considered a cornerstone in building an aware and responsible generation, where individuals learn values of commitment, resilience, and cooperation from an early age. Discipline',
    //     'Leader Integrity': 'The value of leadership discipline represents 89% of the index. Leadership discipline is considered the fundamental element that distinguishes exceptional leaders, as they remain steadfast on their path to success regardless of the challenges they face.',
    //     'Teacher Integrity': 'The value of teacher discipline represents 95% of the index. The disciplined teacher excels in effectively managing the classroom and motivating students to excel and achieve their academic goals.',
    //     'Environment Integrity': 'The value of environmental discipline represents 100% of the index. Environmental discipline enhances personal and social discipline, as it encourages adherence to societal rules, traditions, and values.',
    // },
};
const ChartDetails = ({ selectedSection }) => {
  const [selectedDetailSection, setSelectedDetailSection] = useState(null);
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  useEffect(() => {
    setSelectedDetailSection(null);
    setShowInitialMessage(true);
  }, [selectedSection]);

  const handleClick = (detail) => {
    setSelectedDetailSection(detail);
    setShowInitialMessage(false);
  };

  const data = dataSets[selectedSection];

  const config = {
    data: data.map((d) => ({
      ...d,
      percent: parseFloat(d.percentage) / 100,
    })),
    xField: 'percentage',
    yField: 'percent',
    colorField: 'name',
    color: ({ name }) => data.find(d => d.name === name)?.color || '#000000',
    maxAngle: 360,
    radius: 0.8,
    innerRadius: 0.2,
    barStyle: {
      lineCap: 'round',
    },
    label:false,
    // label: {
    //   position: 'bottom',
    //   style: {
    //     fontSize: 10,
    //     textAlign: 'center',
    //     fill: '#2a2929',
    //   },
    // },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  return (
    <>
      <div dir='ltr' className='details-container  w-[48rem] bg-white'>
        {/* <div className='details-title'>Values Indicators</div> */}
        <div className='details-chart'>
          <RadialBar {...config} onReady={(plot) => {
            plot.on('element:click', (evt) => {
              const clickedData = evt.data?.data;
              if (clickedData) {
                handleClick(clickedData.name);
              }
            });
          }} />
        </div>
        <div className='details-description  border-2 border-gray-400 rounded-xl'>
          {showInitialMessage && (
            <p className=' p-9'>Click on a specific section to see more details........</p>
          )}
          {selectedDetailSection && (
            <>
            <div className='p-4'>
              <div className='details-heade   '>
                <h3 className='border w-[180px]  shadow-sm rounded-xl p-2 bg-gray-100'>{selectedDetailSection}</h3>
                <PiArrowBendRightDownBold className="icon" />
              </div>
              <p className='text-gray-500' >{detailMessages[selectedSection][selectedDetailSection]}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .details-container {
          padding: 20px;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          border-radius: 1.5rem;
          width: 100%;
        }

        .details-title {
          font-weight: 500;
          font-size: 24px;
          color: #626262;
        }

        .details-chart {
          margin: 20px 0;
        }

        .details-description {
          margin-top: 20px;
        }

        .details-header {
          display: flex;
          align-items: center;
        }

        .icon {
          font-size: 24px;
          margin-left: 10px;
        }
      `}</style>
    </>
  );
};

export default ChartDetails;
