'use client';

import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { ModeToggle } from '../../theme-switcher';

const Setting = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`rounded-md bg-block text-sm font-medium   ${toggle ? 'bg-primary' : ''}`}
    >
      {toggle && <ModeToggle />}
      <button
        onClick={handleClick}
        className={` flex
        h-[48px] w-full grow items-center gap-2 rounded-md p-3 hover:bg-primary hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 
        ${toggle ? 'text-white' : ''}`}
      >
        <Cog6ToothIcon className="w-6" />
        <div className="hidden text-default md:block">Settings</div>
      </button>
    </div>
  );
};
export default Setting;
