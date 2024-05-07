// icons
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

import { z } from 'zod';

import { Button } from '@/components/ui/button';

import _Form from './../common/form';

const SignupForm = () => {
  const emailUsernameSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    username: z.string().min(1).max(32),
  });

  // Define default values
  const defaultValues = {
    email: '',
    username: '',
  };

  // Define fields array
  const fields = [
    { name: 'email', label: 'Email', placeholder: 'Enter your email' },
    { name: 'username', label: 'Username', placeholder: 'Enter your username' },
  ];

  // Define onSubmit function
  const handleSubmit = (formData: Record<string, string | number>) => {
    console.log('Form data:', formData);
    // Handle form submission logic here
  };

  return (
    <div className='p-5 max-w-[35rem] mx-auto'>
      <_Form
        formSchema={emailUsernameSchema}
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
        fields={fields}
        submitBtnText={'Create account'}
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
