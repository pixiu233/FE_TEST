import React, { useContext } from 'react';

import ListItem from '@/components/dashboard/compoents/List/ListItem';
import MyContext from '@/components/dashboard/compoents/RightCompoent/context';

export type ListProp = {
  source: any;
  active?: number;
};
const listType: any = {
  1: 'mikestonesMockData',
  2: 'questMockData',
  3: 'trackMockData',
};
const List = ({ source }: ListProp) => {
  const { active } = useContext(MyContext);
  return (
    <div className='mt-8'>
      {source[listType[active]].map(
        ({ start, total, base, done, key }: any) => {
          return (
            <ListItem
              key={key}
              id={key}
              start={start}
              total={total}
              base={base}
              done={done}
              active={active}
            />
          );
        }
      )}
    </div>
  );
};

export default List;
