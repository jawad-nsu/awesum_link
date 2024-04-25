import Image from 'next/image';

import { Check, Zap } from 'lucide-react';
import { Button } from '../ui/button';

const UpgradeCta = () => {
  return (
    <div className='md:w-9/12 p-8 rounded-3xl bg-[#d3e822]'>
      <h3 className='font-black text-2xl text-green-950 text-opacity-80'>
        Get unlimited customization
      </h3>

      <div className='flex space-x-3 '>
        {/* Text & Button */}
        <div className='w-full md:w-3/6'>
          <p className='font-medium tracking-tight text-opacity-75 text-green-950 mt-3'>
            Transform your Linktree with Pro. Cancel anytime.
          </p>

          <div className='my-6 space-y-3'>
            {ProBenefits.map((title) => (
              <div key={title} className='flex space-x-4'>
                <Check size={18} className='opacity-60 mt-0.5 flex-none' />
                <p className='font-medium tracking-tight text-opacity-75 text-green-950 leading-5'>
                  {title}
                </p>
              </div>
            ))}
          </div>

          <Button className='bg-[#1f4317] text-[#d3e822] font-bold text-lg py-6 rounded-full w-full'>
            <Zap fill='#d3e822' size={16} className='mr-2' /> Upgrade
          </Button>
          <p className='text-center pt-2 font-bold text-[0.7rem] tracking-tight text-opacity-55 text-green-950'>
            $10/month after
          </p>
        </div>
        {/* Image */}
        <div className='hidden md:flex md:w-3/6  items-start justify-center'>
          <Image
            src='/appearance/demo.png'
            width={350}
            height={225}
            alt='multi variant cards'
          />
        </div>
      </div>
    </div>
  );
};

export default UpgradeCta;

const ProBenefits = [
  'Showcase your brand with custom background images and videos',
  'Pick your perfect font, theme and buttons',
  'Remove the Linktree logo',
];
