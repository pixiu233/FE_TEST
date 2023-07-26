'use client';

import React, { use } from 'react';

import List from '@/components/dashboard/compoents/List/List';
import { getMikestonesList } from '@/components/dashboard/compoents/RightCompoent/api';

const ListC = () => {
  const { data } = use(getMikestonesList());
  return <List source={data} />;
};

export default ListC;
