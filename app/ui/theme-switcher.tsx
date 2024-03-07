'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const icon =
    theme === 'light' ? (
      <MoonIcon className="w-6" width={24} />
    ) : (
      <SunIcon className="w-6" width={24} />
    );

  return (
    <div className="flex h-[48px] items-center justify-between p-3 text-white md:p-2 md:px-3">
      <div>
        Theme
        <span>({theme})</span>
      </div>
      <div className="text-0 leading-0 ">
        <button
          className={`text-secondary text-white`}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme}
          {icon}
        </button>
      </div>
    </div>
  );
}
