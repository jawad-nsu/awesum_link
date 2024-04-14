import { Navbar } from '@/components/common/navbar';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className='bg-neutral-100'>
      <Navbar />
      <main className='h-full pt-[50px] lg:pt-0'>
        <div className='mx-auto pt-6 h-full'>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
