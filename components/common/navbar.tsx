import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { SiLinktree } from 'react-icons/si';
import { HiBolt } from 'react-icons/hi2';
import { SlShare } from 'react-icons/sl';
import { DropdownMenuDemo } from '@/components/common/menu';

export const Navbar = () => {
  return (
    <nav className='bg-white shadow rounded-full mx-8 mt-5 '>
      <div className='px-2 sm:px-4 lg:px-1 mx-7'>
        <div className='flex justify-between h-16'>
          <div className='flex px-2 lg:px-0'>
            <div className='flex-shrink-0 flex items-center'>
              <SiLinktree size={'1.5rem'} />
            </div>
            <div className='hidden lg:flex lg:space-x-8 lg:ml-6'>
              <Link
                className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
                href='#'
              >
                <LinkIcon className='mr-3 h-5 w-5 text-gray-400' />
                <p className='font-bold'>Links</p>
              </Link>
              <Link
                className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
                href='#'
              >
                <ViewIcon className='mr-3 h-5 w-5 text-gray-400' />
                <p className='font-semibold'>Appearance</p>
              </Link>
              <Link
                className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
                href='#'
              >
                <PieChartIcon className='mr-3 h-5 w-5 text-gray-400' />
                <p className='font-semibold'>Analytics</p>
              </Link>
              <Link
                className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
                href='#'
              >
                <SettingsIcon className='mr-3 h-5 w-5 text-gray-400' />
                <p className='font-semibold'>Settings</p>
              </Link>
            </div>
          </div>
          <div className='flex items-center lg:hidden'>
            <Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'>
              <MenuIcon className='h-6 w-6' />
            </Button>
          </div>
          <div className='hidden lg:flex lg:items-center lg:space-x-4'>
            <Button className='flex-shrink-0 bg-neutral-200 text-gray-900 text-base font-bold px-4 py-2 border border-transparent rounded-full hover:bg-zinc-300 active:bg-zinc-300 transition duration-150 ease-in-out'>
              <HiBolt className='mr-2' />
              Try Pro for free
            </Button>
            <Button className='flex-shrink-0 border border-gray-300 bg-white text-gray-900 text-base font-bold px-4 py-2 rounded-full hover:bg-zinc-200 transition duration-150 ease-in-out'>
              <SlShare className='mr-2' />
              Share
            </Button>
            <DropdownMenuDemo />
          </div>
        </div>
      </div>
    </nav>
  );
};

function FlagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' />
      <line x1='4' x2='4' y1='22' y2='15' />
    </svg>
  );
}

function FlashlightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z' />
      <line x1='6' x2='18' y1='6' y2='6' />
      <line x1='12' x2='12' y1='12' y2='12' />
    </svg>
  );
}

function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
      <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function PieChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21.21 15.89A10 10 0 1 1 8 2.83' />
      <path d='M22 12A10 10 0 0 0 12 2v10z' />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}

function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' />
      <polyline points='16 6 12 2 8 6' />
      <line x1='12' x2='12' y1='2' y2='15' />
    </svg>
  );
}

function ViewIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z' />
      <path d='M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
      <path d='M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2' />
      <path d='M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2' />
    </svg>
  );
}
