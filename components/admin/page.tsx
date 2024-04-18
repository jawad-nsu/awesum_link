'use client';

// icons
import { Ellipsis } from 'lucide-react';
import { BsTwitterX } from 'react-icons/bs';
import { BsThreads } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';

const MobilePreview = () => {
  return (
    <div className='flex flex-col items-center max-h-[36rem] bg-gradient-to-b from-[#b2cce0] to-[#ecfeff] space-y-2 px-4 py-8 overflow-y-auto border-black border-[0.85rem] rounded-[3rem]'>
      <img
        src='/navbar/avatar1.jpg'
        className='h-[5rem] w-[5rem] rounded-[50%] mt-5'
      />
      <h4 className='font-bold tracking-wide'>Jawad Rahim</h4>
      <p className='font-semibold tracking-tight text-sm text-slate-600	'>
        IndieHacker in making
      </p>
      <div className='flex space-x-4 pt-6 pb-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-instagram cursor-pointer'
        >
          <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
          <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
          <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
        </svg>
        <BsTwitterX className='h-5 w-5 cursor-pointer' />
        <BsThreads className='h-5 w-5 cursor-pointer' />
      </div>
      {/* social links */}
      <div className='space-y-4'>
        {SocialLinks.map((link) => (
          <LinkRow key={link} title={link} />
        ))}
      </div>
      <div className='flex pt-8'>
        <h3 className='font-extrabold text-xl tracking-tight'>Linktree</h3>
        <SiLinktree size={20} />
      </div>
    </div>
  );
};

export default MobilePreview;

const LinkRow = ({ title }: { title: string }) => {
  return (
    <div className='flex justify-between items-center space-x-1 md:space-x-2 bg-[#96afbf] rounded-full p-[0.35rem] max-h-25 cursor-pointer hover:shadow-lg'>
      <img
        src='/navbar/avatar1.jpg'
        className='h-[2.25rem] w-[2.25rem] rounded-[50%]'
      />
      <p className='text-sm font-semibold px-12'>{title}</p>
      <Ellipsis size={16} className='mr-10' />
    </div>
  );
};

const SocialLinks = [
  'Instagram',
  'Twitter',
  'LinkedIn',
  'Facebook',
  'YouTube',
  'TikTok',
  'Snapchat',
  'Pinterest',
  'Twitch',
  'Spotify',
];
