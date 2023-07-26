import * as React from 'react';

interface InfoProps {
  content: string;
  title: string;
}
const Info: React.FC<InfoProps> = ({ title, content }) => {
  return (
    <div className='flex-col'>
      <div className='text-tcg mb-3 text-xs'>{title}</div>
      <div className='text-tc text-base'>{content}</div>
    </div>
  );
};

export default Info;
