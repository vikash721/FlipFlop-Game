import React from 'react';

const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
      <div className="absolute right-0 top-1/2 -z-10 h-[310px] w-[310px] rounded-full bg-teal-500 opacity-20 blur-[100px]"></div>
    </div>
  );
};

export default BackgroundGrid;