import classnames from 'classnames';
import { useContext } from 'react';

import TabsContext from './context';

export type TPanelProp = {
  tab: any;
  tabKey: string | number;
  classname?: any;
};
const activeClas = ' border-b-white font-bold ';

const defaultClas = `tab tab-bordered text-tc text-base  border-b-4  px-0  text-sm hover:border-b-white hover:font-bold  `;

/* TODO 优化下划线 */
export default function Panel({
  tab,
  tabKey,
  classname,
}: TPanelProp): JSX.Element {
  const tabCtx = useContext(TabsContext);
  return (
    <a
      href='./'
      title={tab}
      className={classnames(
        defaultClas,
        {
          [activeClas]: tabCtx.activeKey == tabKey,
        },
        classname
      )}
      onClick={() => tabCtx.onChange(tabKey)}
    >
      {tabCtx.activeKey == tabKey ? `</ ${tab} >` : tab}
    </a>
  );
}
