'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import { SignupForm } from '@/components/auth';

const Signup = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <>
      <div className='flex flex-col items-center pt-10 space-y-3'>
        <h2 className='h2 font-black text-3xl '>Join Linktree</h2>
        <h4 className='text-gray-500 tracking-tight'>Sign up for free!</h4>
      </div>

      {/* Form */}
      <div className='px-12 py-4'>
        <SignupForm />
      </div>

      <p className='text-[.95rem]'>
        <h3 className='text-center text-gray-500'>
          Already have an account?{' '}
          <Link
            href='/auth/signup'
            className='text-purple-700 underline tracking-tight'
          >
            Log in
          </Link>
        </h3>
      </p>
    </>
  );
};

export default Signup;
