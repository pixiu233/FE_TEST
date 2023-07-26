import React from 'react';

import ListItem from '@/components/dashboard/compoents/List/ListItem';

export type ListProp = {
  source: Array<object>;
  active: number;
};
const List = ({ source, active }: ListProp) => {
  return (
    <div className='mt-8'>
      {source.map(({ start, total, base, done, key }: any, index) => {
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
      })}
    </div>
  );
};

export default List;
