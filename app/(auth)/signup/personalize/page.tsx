'use client';

import { useState, useEffect } from 'react';

import { categories } from '@/lib/const';

import { Button } from '@/components/ui/button';

const Personalize = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleSubmit = () => {};
  return (
    <div className='max-w-[35rem] mx-auto my-24 px-6'>
      <p className='space-y-4'>
        <h1 className='text-5xl font-black tracking-tight'>
          Tell us about yourself
        </h1>
        <h6 className='text-gray-500 tracking-tight'>
          This will personalize your Linktree experience
        </h6>
      </p>

      {/* Input */}
      <section className='mt-14'>
        <h6 className='font-bold'>
          Select one category that best describes your Linktree:
        </h6>

        {/* Buttons - categories*/}
        <div className='mt-3'>
          <Category />
        </div>

        <Button className='mt-6 w-full rounded-full bg-white text-black font-bold border border-gray-500 hover:bg-purple-600 hover:text-white'>
          <span>Continue</span>
        </Button>
      </section>
    </div>
  );
};

export default Personalize;

const Category = () => {
  return (
    <ul className='flex flex-wrap gap-1.5'>
      {categories.map(({ name, icon }) => (
        <li key={name}>
          <Buttons name={name} icon={icon} />
        </li>
      ))}
    </ul>
  );
};

const Buttons = ({ name, icon }: { name: string; icon: React.ReactNode }) => {
  return (
    <Button className='rounded-full bg-white hover:border-2 hover:bg-white text-black border space-x-2 items-center active:bg-purple-600 active:text-white'>
      <div>{icon}</div>
      <h6>{name}</h6>
    </Button>
  );
};
