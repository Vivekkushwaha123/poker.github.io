import React from 'react';
import Button from '../Button/Button';

const HomePageHeaderView = () => {
  return (
    <header className=" bg-slate-200 py-4 px-8 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-center md:justify-start">
        <h1 className="text-black text-3xl font-bold">User My Page</h1>
      </div>
      <div className="mt-4 md:mt-0">
        <Button  btnId="logout" btnName="logout"/>
      </div>
    </header>
  );
};

export default HomePageHeaderView;
