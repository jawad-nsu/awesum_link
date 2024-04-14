import {
  Cloud,
  CircleDollarSign,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  CircleAlert,
  User,
  MessagesSquare,
  Info,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar
          className='h-9 w-9'
          style={{
            cursor: 'pointer',
          }}
        >
          <AvatarImage alt='User avatar' src='/navbar/avatar2.jpg' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-full rounded-[1.25rem] p-5'>
        <div className='flex items-center space-x-4 mb-2'>
          <Avatar className='w-[3rem] h-[3rem]'>
            <AvatarImage src='' alt='@shadcn' />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <p className='text-base font-bold'>Jawad Rahim</p>
            <p className='text-sm font-light text-zinc-600'>linktr.ee/jrahim</p>
          </div>
        </div>
        <Button className='rounded-full border px-[4rem] py-[1.5rem] my-[1rem] bg-white text-gray-800 font-bold text-base hover:bg-neutral-100 transition duration-150 ease-in-out'>
          Create a new Linktree
        </Button>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className='mr-2 h-4 w-4' />
            <span>My account</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CircleDollarSign className='mr-2 h-4 w-4' />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CircleAlert className='mr-2 h-4 w-4' />
            <span>Cookie preference</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Support</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Info className='mr-2 h-4 w-4' />
            <span>Ask a Question</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User className='mr-2 h-4 w-4' />
            <span>Help Topics</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessagesSquare className='mr-2 h-4 w-4' />
            <span>Submit feedback</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className='mr-2 h-4 w-4 transform rotate-180' />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
