import React from 'react';

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="text-center text-4xl font-semibold mb-8">
      <p className="border-b-4 border-accent inline-block pb-2">{title}</p>
    </div>
  );
};

export default Heading;
