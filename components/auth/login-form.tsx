import Link from 'next/link';

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

import _Form from '@/components/common/form';

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8).max(32).regex(passwordValidation, {
    message: 'Your password is not valid',
  }),
});

const LoginForm = () => {
  const emailPasswordSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z
      .string()
      .min(8)
      .max(32)
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
  });

  // Define default values
  const defaultValues = {
    email: '',
    password: '',
  };

  // Define fields array
  const fields = [
    { name: 'email', label: 'Email', placeholder: 'Enter your email' },
    { name: 'password', label: 'Password', placeholder: 'Enter your password' },
    // Add more fields as needed
  ];

  // Define onSubmit function
  const handleSubmit = (formData: Record<string, string | number>) => {
    console.log('Form data:', formData);
    // Handle form submission logic here
  };

  return (
    <div className='p-5 max-w-[35rem] mx-auto'>
      <_Form
        formSchema={emailPasswordSchema}
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
        fields={fields}
        submitBtnText={'Log in'}
      />
      <h3 className='text-gray-600 text-center py-2'>OR</h3>
      <div className='flex flex-col space-y-4'>
        <Button
          className='py-6 bg-white rounded-full md:text-lg font-bold text-black border hover:bg-gray-100'
          type='submit'
        >
          <FcGoogle className='m-4' /> Continue with Google
        </Button>
        <Button
          className='py-6 bg-white rounded-full md:text-lg font-bold text-black border hover:bg-gray-100'
          type='submit'
        >
          <BsApple className='m-4' /> Continue with Apple
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
