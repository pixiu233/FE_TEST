import React, { ReactElement } from 'react';
export type ButtonProp = {
  classname?: any;
  children: ReactElement | string;
  style?: any;
};

const EDButton = ({ children, classname, style, ...props }: ButtonProp) => {
  return (
    <button
      style={{
        textTransform: 'initial',
        border: 'none',
        background: 'linear-gradient(180deg, #353535 0%, #2E2E2E 100%)',
        ...style,
      }}
      className={
        'btn text-tc  max-h-[40px] min-h-[40px] min-w-[145px]  rounded-xl font-normal ' +
        classname
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default EDButton;
