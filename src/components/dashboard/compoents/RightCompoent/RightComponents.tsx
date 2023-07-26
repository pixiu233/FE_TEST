import React from 'react';

import BottomComponent from '@/components/dashboard/compoents/RightCompoent/BottomComponent';
import TopComponent from '@/components/dashboard/compoents/RightCompoent/TopComponent';

const RightComponents = () => {
  return (
    <div className=' flex min-h-[328px] min-w-[1083px] max-w-[1083px] flex-col '>
      <TopComponent />
      <BottomComponent />
    </div>
  );
};

export default RightComponents;
