import Image from 'next/image';

import { Check, LockKeyhole, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { SiLinktree } from 'react-icons/si';

const LogoUpgradeCta = () => {
  return (
    <div className='md:w-9/12 p-5 rounded-3xl bg-white'>
      <div className='flex justify-between'>
        <h3>Hide the Linktree logo</h3>
        <Button className='px-2 py-0 leading-1 font-bold text-base'>
          Upgrade
          <LockKeyhole size={14} className='ml-1' />
        </Button>
      </div>
      <div className='flex items-center'>
        <h1 className='font-bold text-2xl'>Linktree</h1>
        <SiLinktree size={20} className='' />
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
