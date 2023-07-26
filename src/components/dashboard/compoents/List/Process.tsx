import React from 'react';

export type ProgressProp = {
  value: number;
  className: any;
};
const Progress = ({ value, ...props }: ProgressProp) => {
  const progressBarStyles = {
    width: `${value}%`,
    height: '12px',
    backgroundColor: 'F2F2F2',
    borderRadius: '24px',
  };

  const containerStyles = {
    width: '100%',
    height: '12px',
    backgroundColor: '#505050',
    borderRadius: '24px',
  };

  return (
    <div style={containerStyles} {...props}>
      <div style={progressBarStyles}></div>
    </div>
  );
};

export default Progress;
