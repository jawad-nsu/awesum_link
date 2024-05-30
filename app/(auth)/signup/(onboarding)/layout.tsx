import Image from 'next/image';

import { SiLinktree } from 'react-icons/si';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {/* Auth */}
      <section className='col-span-2'>
        {/* Logo */}
        <div className='flex items-center justify-start m-6'>
          <h1 className='font-bold text-xl tracking-tight'>Linktree</h1>
          <SiLinktree size={16} className='text-green-500' />
        </div>
        {children}
      </section>
      {/* Image */}
      <section className='hidden md:grid col-span-1 bg-[#d7a337] h-screen place-items-center'>
        <Image
          src='/analytics/upgrade-banner.png'
          width={350}
          height={350}
          alt='multi variant cards'
        />
      </section>
    </div>
  );
};

export default MainLayout;
