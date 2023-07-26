import React from 'react';

import EDButton from '@/components/dashboard/compoents/Buttons/Button';
import RadioProgress from '@/components/dashboard/compoents/radioRing/RadialProgress';

import { radialProgressMockData } from '@/__mocks__/progress';
const TopComponent = () => {
  return (
    <div className='bg-fill  relative mb-3 flex min-h-[220px] rounded-[22px] text-left leading-4'>
      {/* Text */}
      <div className='text-tc absolute ml-7 mt-10 text-base font-bold'>
        <div>Daily</div>
        <div>Quests</div>
      </div>

      {/* 左边svg */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='189'
        height='220'
        viewBox='0 0 189 220'
        fill='none'
      >
        <path
          d='M0 20C0 8.9543 8.9543 0 20 0H188.426L128.78 220H20C8.9543 220 0 211.046 0 200V20Z'
          fill='#1C1C1C'
        />
      </svg>
      {/* 左下椭圆 */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='142'
        height='115'
        viewBox='0 0 142 115'
        fill='none'
        className='absolute bottom-0 left-0'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M141.739 67.2027L128.78 115H20C8.9543 115 0 106.046 0 95V17.2623C15.0458 6.40044 33.5254 0 53.5 0C95.6215 0 131.095 28.4618 141.739 67.2027Z'
          fill='#232323'
        />
      </svg>
      {/* mid */}
      <div className='relative flex  pt-6'>
        {radialProgressMockData.map((item) => {
          return (
            <RadioProgress
              step={item.step}
              key={item.step}
              base={item.base}
              total={item.total}
              start={item.start}
            />
          );
        })}

        {/* 圆圈连接线 */}
        <div
          style={{ width: 'calc(100% - 6.5rem - 1rem)' }}
          className=' absolute top-[5.7rem] ml-4 h-[1px] bg-white '
        />
      </div>
      <div className='ml-[59px] flex flex-col items-center justify-center'>
        <EDButton
          style={{
            marginBottom: '0.75rem',
            background: '#404040',
            color: 'black',
          }}
          classname='mt-3 '
        >
          Claim
        </EDButton>
        <EDButton>View all badges</EDButton>
      </div>
    </div>
  );
};

export default TopComponent;
