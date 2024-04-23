// Custom components
import MobilePreview from '@/components/admin/mobile-preview';
import TitleBioForm from '@/components/appearance/title-bio-form';
import UpgradeCta from '@/components/appearance/upgrade-cta';

// Shadcn-ui
import { Button } from '@/components/ui/button';

const Appearance = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-7'>
      <div className='col-span-5 p-6 bg-inherit gap-y-0'>
        {/* Profile */}
        <div className='max-w-2xl mx-auto px-4 '>
          <h3 className='font-bold text-lg'>Profile</h3>
          <div className='md:w-9/12 py-6 rounded-3xl bg-white space-y-8'>
            {/* Profile Image */}
            <div className='flex space-x-6 p-5'>
              <img
                src='/navbar/avatar1.jpg'
                className='h-[6rem] w-[6rem] rounded-[50%] items-center'
              />
              <div className='flex flex-col flex-1 space-y-2'>
                <Button className='py-6 bg-purple-700 rounded-full md:text-lg font-bold hover:bg-purple-800'>
                  Pick an image
                </Button>
                <Button className='py-6 bg-white border-2 border-gray-100 rounded-full md:text-lg text-black font-bold hover:bg-gray-100 '>
                  Remove
                </Button>
              </div>
            </div>
            {/* Title & Bio */}
            <TitleBioForm />
          </div>
        </div>

        {/* Upgrade CTA */}
        <div className='max-w-2xl mx-auto px-4 bg-lime-300'>
          <UpgradeCta />
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
