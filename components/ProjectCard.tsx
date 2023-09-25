import React from 'react'
import { Avatar, Button, Icon } from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';
import Link from 'next/link';

const ProjectCard = () => {
  return (
    <Link href='/project/123'>
      <div className='p-6 shadow-md rounded-lg cursor-pointer bg-blue-1 hover:transform hover:scale-105 transition-transform'>
        <div className='flex gap-2'>
          <Avatar
            name='project image'
            size='md'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiJOnqlf9NW6B83CcHoIVtr85N6zytMlrZw&usqp=CAU"
          />
          <div>
            <p className='font-bold text-xl'>Title</p>
            <p>tag, tag</p>
          </div>
          <div className='flex ml-auto gap-1 items-center'>
            <Icon as={BsFillPersonFill} />
            <p className="text-sm">2/9</p>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-400 my-4"></div>
        <p>
          Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </Link>
  )
}

export default ProjectCard