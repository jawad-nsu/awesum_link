'use client';

// default imports
import Link from 'next/link';
import { default as Img } from 'next/image';
import { useState } from 'react';

// icons
import {
  Info,
  Plus,
  Upload,
  Trash2,
  Star,
  LockKeyhole,
  Image,
  CalendarCheck2,
  BarChart,
} from 'lucide-react';
import { GoGrabber } from 'react-icons/go';

// shadcn ui
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

//dnd
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import MobilePreview from '@/components/admin/mobile-preview';

// constants
const initialStateTodos = [
  {
    id: 1,
    title: 'Instagram',
    completed: false,
  },
  {
    id: 2,
    title: 'Thread',
    completed: false,
  },
  {
    id: 3,
    title: 'Twitter',
    completed: true,
  },
];

const Admin = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const handleDragEnd = (result: any) => {
    console.log(result);
    if (!result.destination) return;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const copyTodos = [...todos];
    const [reorderTodo] = copyTodos.splice(startIndex, 1);
    copyTodos.splice(endIndex, 0, reorderTodo);
    setTodos(copyTodos);
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-7'>
      <div className='col-span-5 p-6 bg-inherit'>
        {/* Link URL */}
        <div className='flex justify-between bg-[#e4edff] px-3 py-4 rounded-[1.25rem] shadow-sm shadow-[#e0e2d9]'>
          <div className='flex items-center space-x-2'>
            <Info className='mr-2 h-4 w-4' />
            <span>
              <span className='font-semibold text-base'>
                Your Linktree is live:{' '}
              </span>
              <Link className='underline' href='#'>
                linktr.ee/jrahim
              </Link>
            </span>
          </div>

          <div className='space-x-2'>
            <span className='tracking-tight text-[0.9rem] text-zinc-800 font-medium'>
              Share your Linktree to your socials
            </span>
            <Button className='rounded-full text-black bg-white font-bold md:text-lg tracking-tight md:py-6 md:px-4 shadow-sm border hover:bg-gray-100'>
              Copy URL
            </Button>
          </div>
        </div>

        <div className='flex flex-col max-w-2xl m-auto'>
          {/* Add Link Btn */}
          <Button className='mt-10 py-6 bg-purple-700 rounded-full font-bold text-lg hover:bg-purple-800'>
            <Plus className='mr-2 h-5 w-5' /> Add link
          </Button>

          {/* List of Social Links */}
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='todos'>
              {(droppableProvider) => (
                <ul
                  className=' '
                  ref={droppableProvider.innerRef}
                  {...droppableProvider.droppableProps}
                >
                  {todos.map((todo, index) => (
                    <Draggable
                      index={index}
                      key={todo.id}
                      draggableId={`${todo.id}`}
                    >
                      {(draggableProvider) => (
                        <Card
                          className='mt-5 rounded-3xl px-2'
                          ref={draggableProvider.innerRef}
                          {...draggableProvider.draggableProps}
                        >
                          <div className='flex flex-auto gap-4'>
                            <div
                              className='flex-none my-auto'
                              {...draggableProvider.dragHandleProps}
                            >
                              <GoGrabber size={24} />
                            </div>
                            <div className='grow'>
                              {/* link and toggle */}
                              <div className='flex md:px-6 pt-4 justify-between '>
                                {/* link */}
                                <div className='flex flex-col space-y-1.5'>
                                  <h5 className='font-bold'>{todo.title}</h5>
                                  <h6 className='w-44 md:w-auto font-semibold tracking-tight truncate'>
                                    https://www.instagram.com/jawadur_rahim
                                  </h6>
                                </div>

                                {/* toggle and share */}
                                <div className='flex space-x-3 items-center'>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Upload
                                          size={20}
                                          strokeWidth={1}
                                          color='#4b5563'
                                          className='cursor-pointer'
                                        />
                                      </TooltipTrigger>
                                      <TooltipContent className='bg-black'>
                                        <p className='text-white font-semibold'>
                                          <h6>Share this link now</h6>
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                  <Switch />
                                </div>
                              </div>

                              {/* social and delete icons */}
                              <div className='flex justify-between md:px-9 pb-5 pt-5'>
                                {/* social */}
                                <div className='flex space-x-2 md:space-x-6 '>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          width='24'
                                          height='24'
                                          viewBox='0 0 24 24'
                                          fill='none'
                                          stroke='currentColor'
                                          strokeWidth='1'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          className='lucide lucide-instagram cursor-pointer'
                                        >
                                          <rect
                                            width='20'
                                            height='20'
                                            x='2'
                                            y='2'
                                            rx='5'
                                            ry='5'
                                          />
                                          <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                                          <line
                                            x1='17.5'
                                            x2='17.51'
                                            y1='6.5'
                                            y2='6.5'
                                          />
                                        </svg>
                                      </TooltipTrigger>
                                      <TooltipContent className='bg-black'>
                                        <p className=' text-white font-semibold'>
                                          <h6>Instagram Profile Link</h6>
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <svg
                                          fill='none'
                                          stroke='currentColor'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          viewBox='0 0 24 24'
                                          className='h-5 w-5 stroke-1 cursor-pointer'
                                        >
                                          <path
                                            stroke='none'
                                            d='M0 0h24v24H0z'
                                          />
                                          <path d='M12 21V8a4 4 0 10-4 4h13' />
                                          <path d='M17 16l4-4-4-4' />
                                        </svg>
                                      </TooltipTrigger>
                                      <TooltipContent className='bg-black'>
                                        <p className=' text-white font-semibold'>
                                          Redirect
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Image className='h-5 w-5 stroke-1 cursor-pointer' />
                                      </TooltipTrigger>
                                      <TooltipContent className='bg-black'>
                                        <p className=' text-white font-semibold'>
                                          Thumbnail
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Star className='h-5 w-5 stroke-1 cursor-pointer' />
                                      </TooltipTrigger>
                                      <TooltipContent className='bg-black'>
                                        <p className=' text-white font-semibold'>
                                          Prioritize
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <CalendarCheck2 className='h-5 w-5 stroke-1 cursor-pointer' />
                                      </TooltipTrigger>
                                      <TooltipContent className='bg-black'>
                                        <p className=' text-white font-semibold'>
                                          Schedule
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <LockKeyhole className='h-5 w-5 stroke-1 cursor-pointer' />
                                      </TooltipTrigger>
                                      <TooltipContent className='bg-black'>
                                        <p className=' text-white font-semibold'>
                                          Lock
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <BarChart className='h-5 w-5 stroke-1 cursor-pointer' />
                                      </TooltipTrigger>
                                      <TooltipContent className='bg-black'>
                                        <p className=' text-white font-semibold'>
                                          Analytics
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                                {/* delete */}
                                <div className=''>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Trash2
                                          size={18}
                                          strokeWidth={1}
                                          color='#000101'
                                          className='cursor-pointer'
                                        />
                                      </TooltipTrigger>
                                      <TooltipContent className='bg-black'>
                                        <p className=' text-white font-semibold'>
                                          Delete
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {droppableProvider.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>

      {/* Mobile Preview */}
      <div className='hidden md:grid col-span-2 m-auto'>
        <MobilePreview />
      </div>
    </div>
  );
};

export default Admin;
