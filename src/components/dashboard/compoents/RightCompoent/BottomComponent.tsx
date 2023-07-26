import React, { useState } from 'react';

import List from '@/components/dashboard/compoents/List/List';
import Panel from '@/components/dashboard/compoents/TabsComponent/Tabpane';
import { Tabs } from '@/components/dashboard/compoents/TabsComponent/Tabs';

import { mikestonesMockData } from '@/__mocks__/mikestones';

const BottomComponent = () => {
  const [active, setActive] = useState(1);
  return (
    <div className=' rounded-large bg-fill text-tc flex-1 flex-col  pl-[1.7rem] pr-14 pt-10'>
      <div className=' flex flex-1 justify-between'>
        <div>Milestones</div>
        {/* <Tabs /> */}
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
      <div>
        <List active={active} source={mikestonesMockData} />
      </div>
    </div>
  );
};

export default BottomComponent;
