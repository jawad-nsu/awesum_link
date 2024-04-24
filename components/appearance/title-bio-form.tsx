'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  profile_title: z.string().min(2).max(50),
  bio: z.string().min(2).max(80),
});

const TitleBioForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profile_title: 'Jawad Rahim',
      bio: 'IndieHacker in making',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='p-5'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 flex flex-col'
        >
          <FormField
            control={form.control}
            name='profile_title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-gray-500'>Profile Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder=''
                    className='rounded-xl bg-gray-100 border-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-gray-500'>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=''
                    className='bg-gray-100 border-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className='py-6 bg-purple-700 rounded-full md:text-lg font-bold hover:bg-purple-800'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TitleBioForm;
