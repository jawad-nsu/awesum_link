'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { LoginForm } from '@/components/auth';

import { SiLinktree } from 'react-icons/si';

const Signup = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {/* Auth */}
      <section className='col-span-2'>
        {/* Logo */}
        <div className='flex items-center justify-start m-6'>
          <h1 className='font-bold text-xl tracking-tight'>Linktree</h1>
          <SiLinktree size={16} className='text-green-500' />
        </div>

        <div className='flex flex-col items-center pt-10 space-y-3'>
          <h2 className='h2 font-black text-3xl '>Join Linktree</h2>
          <h4 className='text-gray-500 tracking-tight'>Sign up for free!</h4>
        </div>

        {/* Form */}
        <div className='px-12 py-4 mx-auto'>
          <LoginForm />
        </div>

        <p className='text-[.95rem]'>
          <h3 className='text-center text-gray-500'>
            Already have an account?
            <Link
              href='/auth/signup'
              className='text-purple-700 underline tracking-tight'
            >
              Log in
            </Link>
          </h3>
        </p>
      </section>
      {/* Image */}
      <section className='hidden md:grid col-span-1 bg-[#d7a337] h-screen place-items-center'>
        <Image
          src='/analytics/upgrade-banner.png'
          width={350}
          height={350}
          alt='multi variant cards'
        />
      </section>
    </div>
  );
};

export default Signup;
