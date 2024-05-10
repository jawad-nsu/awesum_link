'use client';

import { useState, useEffect } from 'react';

import { pricings } from '@/lib/const';

import { Check } from 'lucide-react';
import { SiLinktree } from 'react-icons/si';

import { Checkbox } from '@/components/ui/checkbox';

const Pricing = () => {
  const [client, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null;
  }

  return (
    <div className='px-6'>
      {/* Logo */}
      <div className='flex items-center justify-start m-6'>
        <h1 className='font-bold text-xl tracking-tight'>Linktree</h1>
        <SiLinktree size={16} className='text-green-500' />
      </div>

      {/* Heading */}
      <div className='mt-20'>
        <h1 className='font-black text-5xl tracking-tight text-center'>
          Find the plan for you
        </h1>
        <h6 className='mt-2 text-center'>You can change at anytime</h6>
      </div>

      {/* Plans */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12'>
        {pricings.map(
          ({
            title,
            subHeading,
            features,
            price,
            billingCycle,
          }: {
            title: string;
            subHeading: string;
            features: string[];
            price: string;
            billingCycle: string;
          }) => (
            <Card {...{ title, subHeading, features, price, billingCycle }} />
          )
        )}
      </div>
    </div>
  );
};

export default Pricing;

const Card = ({
  title,
  subHeading,
  features,
  price,
  billingCycle,
}: {
  title: string;
  subHeading: string;
  features: string[];
  price: string;
  billingCycle: string;
}) => {
  return (
    <div className='border rounded-2xl max-w-[20rem] '>
      <p className='pt-8 pb-4 px-4'>
        <div className='flex justify-between'>
          <label
            htmlFor='pricing-starter'
            className='font-extrabold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            {title}
          </label>
          <Checkbox className='border active:bg-white' id='pricing-starter' />
        </div>
        <h6 className='text-xs font-bold tracking-tights mt-3'>{subHeading}</h6>
      </p>
      <div className='flex flex-col border-t py-4 px-4'>
        <div>
          <h6 className='font-bold tracking-tight'>{subHeading}</h6>
          {/* Features */}
          <ul className='space-y-2 mt-4'>
            {features.map((feature: string) => (
              <li className='flex items-start space-x-2'>
                <Check
                  size={18}
                  className='flex-none mt-[0.25rem]'
                  color='#8b5cf6'
                />{' '}
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* footer - price */}
        <div className='place-items-end mt-6'>
          <h6 className='font-extrabold text-xl tracking-tight'>{price}</h6>
          <h5 className='text-sm font-light tracking-tighter text-gray-800'>
            {billingCycle}
          </h5>
        </div>
      </div>
    </div>
  );
};
