import { Avatar, Tag } from '@chakra-ui/react'
import React from 'react'

const ProjectDetail = () => {
  return (
    <div>
      <div className='flex bg-blue-1 rounded-lg p-5 gap-5'>
        <Avatar
          name='project image'
          size='xl'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiJOnqlf9NW6B83CcHoIVtr85N6zytMlrZw&usqp=CAU"
          className='border-blue-3 border-8'
        />
        <div className='flex flex-col gap-1'>
          <h1 className='text-2xl font-bold'>Project Name</h1>
          <div className='flex gap-3'>
            <Tag className='bg-blue-2 text-white cursor-pointer' size='lg'>
              Productivity
            </Tag>
            <Tag className='bg-blue-2 text-white cursor-pointer' size='lg'>
              ML
            </Tag>
          </div>
          <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, suscipit! Ad esse eum nesciunt atque nam fuga. Error, consequatur quam.</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail