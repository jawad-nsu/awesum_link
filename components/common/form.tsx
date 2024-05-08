import { z, ZodObject } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm, Control } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Define a generic type for form schema
type FormSchemaType<T extends ZodObject<any>> = T;

// Define props type for _Form component
type FormProps<T extends ZodObject<any>> = {
  formSchema: FormSchemaType<T>;
  onSubmit: (formData: Record<string, string | number>) => void;
  defaultValues: Record<string, string | number>;
  fields: { name: string; label: string; placeholder: string }[];
  submitBtnText: string;
};

const _Form = ({
  formSchema,
  onSubmit,
  defaultValues,
  fields,
  submitBtnText,
}: FormProps<any>) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 flex flex-col'
      >
        {fields.map(({ name, label, placeholder }, index) => (
          <_FormField
            key={index}
            control={form.control}
            name={name}
            label={label}
            placeholder={placeholder}
          />
        ))}
        <Button
          className='py-6 bg-purple-700 rounded-full md:text-lg font-bold hover:bg-purple-800'
          type='submit'
        >
          {submitBtnText}
        </Button>
      </form>
    </Form>
  );
};

export default _Form;

type FormFieldProps = {
  control: Control;
  name: string;
  label: string;
  placeholder: string;
};

const _FormField = ({ control, name, label, placeholder }: FormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-gray-500'>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className=' bg-gray-100 border-0'
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
