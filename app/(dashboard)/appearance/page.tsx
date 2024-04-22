import MobilePreview from '@/components/admin/mobile-preview';
import { Button } from '@/components/ui/button';

const Appearance = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-7'>
      <div className='col-span-5 p-6 bg-inherit'>
        <div className='max-w-2xl mx-auto px-4 '>
          <h3 className='font-bold text-lg'>Profile</h3>
          <div className='md:w-9/12 py-6 rounded-3xl bg-white'>
            <div className='flex space-x-6 p-3 bg-purple-50'>
              <img
                src='/navbar/avatar1.jpg'
                className='h-[6rem] w-[6rem] rounded-[50%]'
              />
              <div className='flex flex-col flex-1 space-y-2'>
                <Button className='py-2 bg-purple-700 rounded-full font-bold hover:bg-purple-800'>
                  Pick an image
                </Button>
                <Button className='py-2 bg-white border- rounded-full font-bold hover:bg-purple-800'></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Preview */}
      <div className='hidden md:grid col-span-2 m-auto'>
        <MobilePreview />
      </div>
    </div>
  );
};

export default Appearance;
