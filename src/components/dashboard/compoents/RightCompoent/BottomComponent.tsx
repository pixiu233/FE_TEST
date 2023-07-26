import React, { Suspense, useState } from 'react';

import MyContext from '@/components/dashboard/compoents/RightCompoent/context';
import ListC from '@/components/dashboard/compoents/RightCompoent/List';
import Panel from '@/components/dashboard/compoents/TabsComponent/Tabpane';
import { Tabs } from '@/components/dashboard/compoents/TabsComponent/Tabs';

type activeType = number;

const BottomComponent = () => {
  const [active, setActive] = useState<activeType>(1);

  return (
    <div className=' rounded-large bg-fill text-tc flex-1 flex-col  pl-[1.7rem] pr-14 pt-10'>
      <div className=' flex flex-1 justify-between'>
        <div>Milestones</div>
        <Tabs
          activeKey={active}
          onChange={(item) => {
            setActive(item);
          }}
        >
          <Panel tab='Course Completion' tabKey={1} />
          <Panel tab='Quest Winning Streak' tabKey={2} classname='mx-10' />
          <Panel tab='Track Completion' tabKey={3} />
        </Tabs>
      </div>
      <MyContext.Provider value={{ active }}>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <ListC />
          </div>
        </Suspense>
      </MyContext.Provider>
    </div>
  );
};

export default BottomComponent;
