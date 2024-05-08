'use client';

import { ChevronLeft } from 'lucide-react';

import { z } from 'zod';

import { Button } from '@/components/ui/button';

import _Form from '@/components/common/form';
import { useState, useEffect } from 'react';

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
    <div className='max-w-[35rem] mx-auto space-y-6'>
      <div className=''>
        <Button className='text-purple-700 font-bold bg-white hover:bg-white p-0 m-0'>
          <ChevronLeft />
          Back
        </Button>
      </div>
      <p className='space-y-4'>
        <h1 className='text-3xl font-black'>Enter a password</h1>
        <h6 className=''>
          Choose a strong password with at least 8 characters
        </h6>
      </p>

      {/* Input */}
      <div className=' '>
        <_Form
          formSchema={passwordSchema}
          onSubmit={handleSubmit}
          defaultValues={defaultValues}
          fields={fields}
          submitBtnText={'Continue'}
        />
      </div>
    </div>
  );
};

export default Password;
