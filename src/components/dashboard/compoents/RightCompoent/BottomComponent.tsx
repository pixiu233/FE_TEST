import React, { useEffect, useState } from 'react';

import List from '@/components/dashboard/compoents/List/List';
import { getMikestonesList } from '@/components/dashboard/compoents/RightCompoent/api';
import Panel from '@/components/dashboard/compoents/TabsComponent/Tabpane';
import { Tabs } from '@/components/dashboard/compoents/TabsComponent/Tabs';

type activeType = 1 | 2 | 3;

const BottomComponent = () => {
  const listType = {
    1: 'mikestonesMockData',
    2: 'questMockData',
    3: 'trackMockData',
  };
  const [active, setActive] = useState<activeType>(1);
  const [list, setList] = useState<any>({});
  useEffect(() => {
    getMikestonesList(1).then(({ data }) => {
      if (data) {
        setList(data);
      }
    });
  }, []);

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
        {JSON.stringify(list) !== '{}' && (
          <List active={active} source={list[listType[active]]} />
        )}
      </div>
    </div>
  );
};

export default BottomComponent;
