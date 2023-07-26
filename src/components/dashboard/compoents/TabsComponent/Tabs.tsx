import React, { ReactElement } from 'react';

import TabsContext from '@/components/dashboard/compoents/TabsComponent/context';

export type TTabsProp = {
  children: ReactElement[];
  activeKey: string | number;
  onChange?: (value: any) => void;
};

function Tabs({ children, activeKey, onChange }: TTabsProp) {
  return (
    <div style={{ display: 'initial', borderBottom: '1px solid #282828' }}>
      <TabsContext.Provider value={{ activeKey, onChange }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
}
export { Tabs };
