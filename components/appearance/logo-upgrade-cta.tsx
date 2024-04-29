import Image from 'next/image';

// icons
import { Check, LockKeyhole, Zap } from 'lucide-react';
import { SiLinktree } from 'react-icons/si';

// shadcn
import { Button } from '../ui/button';

// utility
import { cn } from './../../lib/utils';

const LogoUpgradeCta = () => {
  return (
    <div className='md:w-9/12 p-5 rounded-3xl bg-white space-y-6'>
      <div className='flex justify-between'>
        <h3>Hide the Linktree logo</h3>
        <button className='px-2 font-bold text-sm bg-black text-white flex items-center rounded-md'>
          Upgrade
          <LockKeyhole size={14} className='ml-1' />
        </button>
      </div>
      <div className='flex items-center'>
        <h1 className='font-extrabold text-2xl'>Linktree</h1>
        <SiLinktree size={22} className='text-green-500' />
      </div>
    </div>
  );
};

export default LogoUpgradeCta;

const ProBenefits = [
  'Showcase your brand with custom background images and videos',
  'Pick your perfect font, theme and buttons',
  'Remove the Linktree logo',
];
