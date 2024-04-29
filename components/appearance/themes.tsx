import Image from 'next/image';
import { cn } from '@/lib/utils';

const Themes = () => {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-xl'>Themes</h3>
      <div className='md:w-9/12 p-6 rounded-3xl bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4'>
        {themes.map((theme, index) => (
          <Theme key={index} {...theme} />
        ))}
      </div>
    </div>
  );
};

export default Themes;

interface ThemeProps {
  bgColor: string;
  button: string;
  profilePic: string;
}

const Theme = ({ bgColor, button, profilePic }: ThemeProps) => {
  return (
    <div
      className={cn(
        'max-w-36 min-w-32 rounded-lg flex flex-col justify-center px-5 pb-16 pt-5 cursor-pointer',
        bgColor
      )}
    >
      <div className={cn('mx-auto mb-4', profilePic)}>
        <Image
          src='/navbar/avatar2.jpg'
          width={35}
          height={35}
          alt='profile image'
          className='rounded-[50%]'
        />
      </div>
      <div className='mx-auto space-y-1.5 w-11/12'>
        <Btn />
        <Btn />
        <Btn />
      </div>
    </div>
  );
};

const Btn = () => {
  return <div className='rounded-full bg-white h-5 text-white'></div>;
};

const themes = [
  {
    bgColor: 'bg-[#c8ecef]',
    button: '#000000',
    profilePic: '',
  },
  {
    bgColor: 'bg-[#f4e6af]',
    button: '#000000',
    profilePic: 'invisible',
  },
  {
    bgColor: 'bg-[#f9d9f9]',
    button: '#000000',
    profilePic: '',
  },
  {
    bgColor: 'bg-[#ae98f0]',
    button: '#000000',
    profilePic: '',
  },
  {
    bgColor: 'bg-[#e1f6fe]',
    button: '#000000',
    profilePic: 'invisible',
  },
  {
    bgColor: 'bg-[#e0fbef]',
    button: '#000000',
    profilePic: 'invisible',
  },
  {
    bgColor: 'bg-[#de33ee]',
    button: '#000000',
    profilePic: '',
  },
];
