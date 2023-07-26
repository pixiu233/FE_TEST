import React from 'react';

import MidCir from '@/components/dashboard/compoents/CircleCompoent/MidCir';
import NextImage from '@/components/NextImage';

interface RadioProgressProps {
  base: number;
  total: number;
  step: number;
  start: number;
}
const circleStyle: any = {
  width: '123px',
  height: ' 123px',
  borderRadius: '50%',
  border: '1px solid #6F6F6F',
  position: 'relative',
  flexDirection: 'column',
};
const RadioProgress: React.FC<RadioProgressProps> = ({
  base,
  total,
  step,
  start,
}) => {
  const first = step === 1;
  const sprops: any = {
    '--value': (base / total) * 100 || 100,
    '--size': '8.6rem',
    '--thickness': '2px',
  };
  return (
    <div
      className={` bg-fill   z-40 flex flex-col items-center ${
        step === 2 && 'mx-[6.5rem]'
      }`}
    >
      <div
        className='radial-progress z-70  relative mb-5 text-white'
        style={sprops}
      >
        <div
          style={{ border: '4px solid #5C5C5C', zIndex: -1 }}
          className=' absolute  left-0 top-0 z-50 min-h-[137px] min-w-[137px]  rounded-[50%] border'
        ></div>
        <div
          style={
            step === 2
              ? { ...circleStyle, backgroundColor: 'white' }
              : { ...circleStyle }
          }
          className={`bg-fill z-40 flex items-center justify-center text-sm font-normal ${
            step === 2 && 'text-[#030303]'
          } ${step === 3 && 'text-tc'}`}
        >
          {/* backgound */}
          {first ? (
            <>
              <MidCir />
            </>
          ) : (
            <>
              <div>Complete</div> <div className=' mb-3 '>{total} Quest</div>{' '}
              <div className=' text-xs'>
                {base}/{total}
              </div>
            </>
          )}

          {/* 外边框 */}

          {/* button */}
          {first && (
            <button
              style={{
                border: '1px solid #6F6F6F',
                zIndex: 9999,
                textTransform: 'capitalize',
              }}
              className='btn btn-outline  text-g rounded-xl font-normal '
            >
              Claimed
            </button>
          )}
        </div>
      </div>
      <div className='flex  justify-start'>
        <NextImage
          useSkeleton
          className=' mr-[5px] w-5'
          src='/images/start.png'
          width='20'
          height='20'
          alt='Icon'
        />
        <span className='font-blod text-tc text-sm'> {start}</span>
      </div>
    </div>
  );
};

export default RadioProgress;
