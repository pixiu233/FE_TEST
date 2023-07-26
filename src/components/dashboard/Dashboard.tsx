import React from 'react';

import InFoComponent from '@/components/dashboard/compoents/InfoComponent/InfoComponent';
import RightComponents from '@/components/dashboard/compoents/RightCompoent/RightComponents';

const Dashboard = () => {
  return (
    <div className='flex '>
      <InFoComponent />
      <RightComponents />
    </div>
  );
};

export default Dashboard;
