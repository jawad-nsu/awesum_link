'use client';

// icons
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8).max(32),
});

const LoginForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='p-5 max-w-[35rem] mx-auto'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 flex flex-col'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-gray-500'>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder=''
                    className=' bg-gray-100 border-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-gray-500'>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder=''
                    className=' bg-gray-100 border-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ul className='flex space-x-7 list-disc'>
            <div className=''>
              <a href='#' className='text-purple-700 underline tracking-tight'>
                Forgot password?
              </a>
            </div>
            <li>
              <a href='#' className='text-purple-700 underline tracking-tight'>
                Forgot username?
              </a>
            </li>
          </ul>
          <Button
            className='py-6 bg-purple-700 rounded-full md:text-lg font-bold hover:bg-purple-800'
            type='submit'
          >
            Log in
          </Button>
        </form>
      </Form>
      <h3 className='text-gray-600 text-center py-2'>OR</h3>
      <div className='flex flex-col space-y-4'>
        <Button
          className='py-6 bg-white rounded-full md:text-lg font-bold text-black border hover:bg-purple-800'
          type='submit'
        >
          <FcGoogle className='m-4' /> Continue with Google
        </Button>
        <Button
          className='py-6 bg-white rounded-full md:text-lg font-bold text-black border hover:bg-purple-800'
          type='submit'
        >
          <BsApple className='m-4' /> Continue with Apple
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
