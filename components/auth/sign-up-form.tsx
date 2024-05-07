// icons
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

import { z } from 'zod';

import { Button } from '@/components/ui/button';

import _Form from './../common/form';

const SignupForm = () => {
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
      />
      <h3 className='text-gray-600 text-center py-2'>OR</h3>
      <div className='flex flex-col space-y-4'>
        <Button
          className='py-6 bg-white rounded-full md:text-lg font-bold text-black border hover:bg-gray-100'
          type='submit'
        >
          <FcGoogle className='m-4' /> Sign up with Google
        </Button>
        <Button
          className='py-6 bg-white rounded-full md:text-lg font-bold text-black border hover:bg-gray-100'
          type='submit'
        >
          <BsApple className='m-4' /> Sign up with Apple
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
