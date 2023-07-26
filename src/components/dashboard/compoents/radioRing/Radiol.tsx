'use client';

import React, { use } from 'react';

import RadioProgress from '@/components/dashboard/compoents/radioRing/RadialProgress';
import { getRadialProgressList } from '@/components/dashboard/compoents/RightCompoent/api';

const Radiol = () => {
  const { data } = use(getRadialProgressList());

  return data.map((item: any) => {
    return (
      <RadioProgress
        step={item.step}
        key={item.step}
        base={item.base}
        total={item.total}
        start={item.start}
      />
    );
  });
};

export default Radiol;
