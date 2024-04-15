'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GripVertical, Info, Plus } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { GoGrabber } from 'react-icons/go';

const Admin = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-7'>
      <div className='col-span-5 p-6 bg-inherit'>
        {/* Link URL */}
        <div className='flex justify-between bg-[#e4edff] px-3 py-4 rounded-[1.25rem] shadow-sm shadow-[#e0e2d9]'>
          <div className='flex items-center space-x-2'>
            <Info className='mr-2 h-4 w-4' />
            <span>
              <span className='font-semibold text-base'>
                Your Linktree is live:{' '}
              </span>
              <Link className='underline' href='#'>
                linktr.ee/jrahim
              </Link>
            </span>
          </div>
          <div className='space-x-2'>
            <span className='tracking-tight text-[0.9rem] text-zinc-800 font-medium'>
              Share your Linktree to your socials
            </span>
            <Button className='rounded-full text-black bg-white font-bold md:text-lg tracking-tight md:py-6 md:px-4 shadow-sm border hover:bg-gray-100'>
              Copy URL
            </Button>
          </div>
        </div>

        <div className='grid place-items-center'>
          {/* Add Link Btn */}
          <Button className='mt-10 max-w-2xl w-9/12 place-items-center py-6 bg-purple-700 rounded-full font-bold text-lg hover:bg-purple-800'>
            <Plus className='mr-2 h-5 w-5' /> Add link
          </Button>

          {/* List of Social Links */}
          <Card className='w-[450px] max-w-2xl w-9/12 mt-10 rounded-3xl px-4 py-6'>
            <div className='flex flex-auto gap-4'>
              <div className='flex-none my-auto'>
                <GoGrabber size={24} />
              </div>
              <div className='grow'>
                <CardHeader>
                  <CardTitle>Instagram</CardTitle>
                  <CardDescription>
                    https://www.instagram.com/jawadur_rahim{' '}
                  </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className='flex justify-between'>
                  <Button variant='outline'>Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Mobile Preview */}
      <div className='hidden md:grid col-span-2 m-auto'>
        <span className='font-bold text-lg'>Jawad Rahim</span>
        <div>Instagram</div>
        <div>LinkedIn</div>
      </div>
    </div>
  );
};

export default Admin;
