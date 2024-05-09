'use client';

import { z } from 'zod';

import _Form from '@/components/common/form';
import { useState, useEffect } from 'react';

import { categories } from '@/lib/const';

const Password = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
  const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );

  const passwordSchema = z.object({
    password: z.string().min(8).max(32).regex(passwordValidation, {
      message:
        'Password must contain at least 1 Uppercase letter, 1 lowercase letter, 1 number and 1 special character',
    }),
  });

  // Define default values
  const defaultValues = {
    password: '',
  };

  // Define fields array
  const fields = [
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
    },
  ];

  // Define onSubmit function
  const handleSubmit = (formData: Record<string, string | number>) => {
    console.log('Form data:', formData);
    // Handle form submission logic here
  };
  return (
    <div className='max-w-[35rem] mx-auto my-24'>
      <p className='space-y-4'>
        <h1 className='text-5xl font-black tracking-tight'>
          Tell us about yourself
        </h1>
        <h6 className='text-gray-500 tracking-tight'>
          This will personalize your Linktree experience
        </h6>
      </p>

      {/* Input */}
      <section className='mt-20'>
        <h6 className='font-bold'>
          Select one category that best describes your Linktree:
        </h6>

        <Category />
      </section>
    </div>
  );
};

export default Password;

const Category = () => {
  return (
    <ul className='flex'>
      {categories.map((category) => (
        <li key={category.name}>
          <h6>{category.name}</h6>
          {/* <h5>{category.icon}</h5> */}
        </li>
      ))}
    </ul>
  );
};
