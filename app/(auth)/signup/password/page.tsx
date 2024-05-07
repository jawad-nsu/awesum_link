import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const Password = () => {
  return (
    <div className='flex flex-col pt-10 mx-auto'>
      <div className='flex-start'>
        <Button className='text-purple-700 font-bold bg-white'>
          <ChevronLeft />
          Back
        </Button>
      </div>
    </div>
  );
};

export default Password;
