'use client';

import { useState, useEffect } from 'react';

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
    <div className=''>
      {/* Logo */}
      <div className='flex items-center justify-start m-6'>
        <h1 className='font-bold text-xl tracking-tight'>Linktree</h1>
        <SiLinktree size={16} className='text-green-500' />
      </div>

      {/* Heading */}
      <div className='mt-20'>
        <h1 className=' font-black text-5xl tracking-tight text-center '>
          Find the plan for you
        </h1>
        <h6 className='mt-2 text-center'>You can change at anytime</h6>
      </div>

      {/* Plans */}
      <div className='mt-12'>
        <ul className='flex justify-around'>
          <li>
            <Card title={'Starter'} price={0} features={'feature'} />
          </li>
          <li>
            <span>Starter</span>
          </li>
          <li>
            <span>Pro</span>
          </li>
          <li>
            <span>Premium</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;

const Card = ({
  title,
  price,
  features,
}: {
  title: string;
  price: number;
  features: string;
}) => {
  return (
    <div className='border rounded-2xl'>
      <p className='pt-8 pb-4 px-4'>
        <div>
          <label
            htmlFor='pricing-starter'
            className='font-extrabold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Free
          </label>
          <Checkbox id='pricing-starter' />
        </div>
        <h6 className='text-xs font-bold tracking-tights'>
          For your personal Linktree
        </h6>
      </p>
      <div className='border-t py-4 px-4'>
        <h6 className='font-bold tracking-tight text-sm'>
          For your personal Linktree
        </h6>
        <ul>
          <li className='flex items-center space-x-2'>
            <Check size={18} /> <span>Unlimited links</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
