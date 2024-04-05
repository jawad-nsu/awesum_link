import { Navbar } from '@/components/common/navbar';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className='lg:pl-[256px] h-full pt-[50px] lg:pt-0'>
        <div className='max-w-[1056px] mx-auto pt-6 h-full'>{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
