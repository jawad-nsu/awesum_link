import MobilePreview from '@/components/admin/page';

const Appearance = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-7'>
      <div className='col-span-5 p-6 bg-inherit'></div>

      {/* Mobile Preview */}
      <div className='hidden md:grid col-span-2 m-auto'>
        <MobilePreview />
      </div>
    </div>
  );
};

export default Appearance;
