import React from 'react';

import EDButton from '@/components/dashboard/compoents/Buttons/Button';
import Progress from '@/components/dashboard/compoents/List/Process';
import NextImage from '@/components/NextImage';

export type ListItemProp = {
  start: number;
  total: number;
  base: number;
  done: boolean;
  active: number;
  id: number;
};
const ListItem = ({
  start = 0,
  total = 0,
  base = 0,
  done = false,
  active,
  id,
}: ListItemProp) => {
  return (
    <div className='bg-bg relative mb-3 flex max-h-[53px] min-h-[53px] min-w-full items-center rounded-[22px] p-[6px]  text-base font-normal text-white'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='118'
          height='53'
          viewBox='0 0 118 53'
          fill='none'
          className=' absolute left-0 top-0'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M117.891 0C116.921 20.0334 109.508 38.3759 97.6798 53H20C8.95431 53 0 44.0457 0 33V20C0 8.95431 8.9543 0 20 0H117.891Z'
            fill='#232323'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='162'
          height='53'
          viewBox='0 0 162 53'
          fill='none'
        >
          <path
            d='M0 20C0 8.95431 8.9543 0 20 0H161.5L147.255 53H20C8.95431 53 0 44.0457 0 33V20Z'
            fill='#292929'
          />
        </svg>
      </div>
      <div
        style={{ whiteSpace: 'nowrap' }}
        className=' ml-[17.5px] min-w-[200px] max-w-[200px] text-sm'
      >
        {active === 1 && <> Complete {total} Syntax</>}
        {active === 2 && <> Quest Winning Streak {id}</>}
        {active === 3 && <>Track Completion {id}</>}
      </div>
      <NextImage
        useSkeleton
        className='  mr-1 w-5'
        src='/images/start.png'
        width='20'
        height='20'
        alt='Icon'
      />
      <div className=' mr-[70px] min-w-[24px] text-sm font-bold'> {start}</div>

      <Progress
        className=' max-h-3 max-w-[275px]'
        value={(base / total) * 100}
      />
      <div className='min-w-5 ml-3'>
        {base}/{total}
      </div>
      <div className='flex-1  text-end '>
        {done && (
          <button
            style={{ textTransform: 'initial' }}
            className='btn max-h-[40px]  min-h-[40px] min-w-[89px]  rounded-xl  font-normal '
          >
            Claim
          </button>
        )}
        {!done && <EDButton>Start Learning</EDButton>}
      </div>
    </div>
  );
};

export default ListItem;
