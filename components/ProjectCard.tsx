import React from 'react'
import { Avatar, Button, Icon } from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';

const ProjectCard = () => {
  return (
    <div className='p-4 shadow-md rounded-lg cursor-pointer'>
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
        <div className='flex ml-auto gap-1'>
          <Icon as={BsFillPersonFill} />
          <p className="text-sm">2/9</p>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>
      <p>
        Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  )
}

export default ProjectCard