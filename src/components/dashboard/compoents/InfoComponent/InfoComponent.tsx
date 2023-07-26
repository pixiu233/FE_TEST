import React from 'react';

import EDButton from '@/components/dashboard/compoents/Buttons/Button';
import CircleComponent from '@/components/dashboard/compoents/CircleCompoent/page';
import Info from '@/components/dashboard/compoents/InfoComponent/page';

const InFoComponent = () => {
  return (
    <div className='bg-fill text-tc rounded-large mr-3 flex min-h-[561px] min-w-[345px]  flex-col items-center   pt-[37px]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='103'
        height='102'
        viewBox='0 0 103 102'
        fill='none'
        className='pb-[20px]'
      >
        <circle cx='51.5' cy='51' r='51' fill='#D9D9D9' />
      </svg>
      <div className='mb-3 text-xl font-bold'>Carina Geng</div>
      <div className='mb-14 flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          className='mr-2'
        >
          <circle cx='10' cy='10' r='10' fill='#D9D9D9' />
        </svg>

        <div className='mr-5 text-[13px] font-normal '>Level 3</div>
        <div className='relative flex items-center justify-center '>
          <div className='absolute text-[11.55px] font-bold leading-[20px] text-[#828282]'>
            ?
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <circle
              cx='10'
              cy='10'
              r='9.51875'
              stroke='#828282'
              strokeWidth='0.9625'
            />
          </svg>
        </div>
      </div>
      <div className='mb-14 flex'>
        <Info title={`Today's XP`} content='50' />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='13'
          height='44'
          viewBox='0 0 13 44'
          fill='none'
          className='mx-8'
        >
          <path d='M12 1L1 43' stroke='#7D7D7D' />
        </svg>
        <Info title='Total XP' content='750/800' />
      </div>
      {/* right */}
      <div className='mb-6 flex items-center'>
        <CircleComponent />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='92'
          height='92'
          viewBox='0 0 92 92'
          fill='none'
          className='z-10 mx-[-23px]'
        >
          <circle cx='46' cy='46' r='46' fill='#D9D9D9' />
        </svg>
        <CircleComponent />
      </div>
      <div>
        <EDButton>View all badges</EDButton>
      </div>
    </div>
  );
};

export default InFoComponent;
