'use client';

import { useState, useEffect } from 'react';

import { pricings } from '@/lib/const';
import { cn } from '@/lib/utils';

import { Check } from 'lucide-react';
import { SiLinktree } from 'react-icons/si';

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [client, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null;
  }

  return (
    <div>
      {/* Logo */}
      <div className='flex items-center justify-start m-6'>
        <h1 className='font-bold text-xl tracking-tight'>Linktree</h1>
        <SiLinktree size={16} className='text-green-500' />
      </div>

      <div className='flex flex-col items-center px-6'>
        {/* Heading */}
        <div className='mt-20'>
          <h1 className='font-black text-5xl tracking-tight text-center'>
            Find the plan for you
          </h1>
          <h6 className='mt-2 text-center'>You can change at anytime</h6>
        </div>

        {/* Plans */}
        <div className=''>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-stretch mt-12'>
            {pricings.map(
              ({
                id,
                title,
                subHeading,
                features,
                price,
                billingCycle,
              }: {
                id: number;
                title: string;
                subHeading: string;
                features: string[];
                price: string;
                billingCycle: string;
              }) => (
                <Card
                  key={id}
                  {...{ id, title, subHeading, features, price, billingCycle }}
                />
              )
            )}
          </div>
        </div>

        {/* Button */}
        <Button className='max-w-2xl w-full my-20 rounded-full bg-purple-600 hover:bg-purple-800 font-bold text-md py-6'>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Pricing;

const Card = ({
  id,
  title,
  subHeading,
  features,
  price,
  billingCycle,
}: {
  id: number;
  title: string;
  subHeading: string;
  features: string[];
  price: string;
  billingCycle: string;
}) => {
  return (
    <div className={cn(id == 3 ? 'relative' : '')}>
      <div className={cn(id == 3 ? '' : 'hidden')}>
        <h6 className='absolute top-[-0.70rem] left-[33%] z-10 bg-[#d0e91f] text-green-900 rounded-full px-4 py-[0.25rem] text-xs font-bold'>
          Recommended
        </h6>
      </div>
      <div
        className={cn(
          'border rounded-2xl max-w-[20rem] hover:cursor-pointer',
          id == 3 ? 'absolute top-0 left-0 z-0 border-purple-800' : ''
        )}
      >
        {/* Header */}
        <p
          className={cn(
            'pt-8 pb-4 px-4',
            id == 3 ? 'bg-purple-800 rounded-t-xl text-white' : ''
          )}
        >
          <div className='flex items-stretch justify-between'>
            <label
              htmlFor='pricing-starter'
              className='font-extrabold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {title}
            </label>
            <Checkbox className='border active:bg-white' id='pricing-starter' />
          </div>
          <h6 className='text-xs font-bold tracking-tights mt-3'>
            {subHeading}
          </h6>
        </p>

        <div className='flex flex-col border-t py-4 px-4'>
          {/* Features */}
          <div className='h-72'>
            <h6 className='font-bold tracking-tight'>{subHeading}</h6>
            {/* Features */}
            <ul className='space-y-2 mt-4'>
              {features.map((feature: string) => (
                <li key={feature} className='flex items-start space-x-2'>
                  <Check
                    size={18}
                    className='flex-none mt-[0.25rem]'
                    color='#8b5cf6'
                  />{' '}
                  <span className='text-gray-600 text-[.95rem]'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer - price */}
          <div className='place-items-end mt-10'>
            <h6 className='font-extrabold text-xl tracking-tight'>{price}</h6>
            <h5 className='text-sm font-light tracking-tighter text-gray-800'>
              {billingCycle}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
