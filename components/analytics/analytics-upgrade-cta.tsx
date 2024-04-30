import Image from 'next/image';

import { Check, Zap } from 'lucide-react';
import { Button } from '../ui/button';

const AnalyticsUpgradeCta = () => {
  return (
    <div className='max-w-[40rem] p-8 rounded-3xl bg-[#512275]'>
      <h3 className='font-black text-2xl text-white'>
        Unlock powerful insights
      </h3>

      <div className='flex space-x-3 '>
        {/* Text & Button */}
        <div className='w-full md:w-3/6'>
          <p className='font-medium tracking-tight text-white mt-3'>
            Find out how your Linktree is performing with Pro. Cancel anytime.
          </p>

          <div className='my-6 space-y-3'>
            {ProBenefits.map((title) => (
              <div key={title} className='flex space-x-4'>
                <Check size={18} className='mt-0.5 flex-none text-white' />
                <p className='font-medium text-opacity-90 text-white leading-5'>
                  {title}
                </p>
              </div>
            ))}
          </div>

          <Button className='bg-[#d716e6] hover:bg-[#ac13b8] text-white font-bold text-lg py-6 rounded-full w-full'>
            <Zap fill='#d3e822' size={16} className='mr-2' /> Upgrade
          </Button>
          <p className='text-center pt-2 font-bold text-[0.7rem] tracking-tight text-opacity-85 text-white'>
            $10/month after
          </p>
        </div>
        {/* Image */}
        <div className='hidden md:flex md:w-3/6  items-start justify-center'>
          <Image
            src='/analytics/upgrade-banner.png'
            width={350}
            height={225}
            alt='multi variant cards'
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsUpgradeCta;

const ProBenefits = [
  'See your top performing links',
  'Track your revenue and sales',
  "Get the full picture with a year's worth of data",
];
