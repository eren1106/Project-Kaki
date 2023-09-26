import MemberCard from '@/components/MemberCard'
import { Avatar, Tag } from '@chakra-ui/react'
import React from 'react'

const ProjectDetail = () => {
  return (
    <div className='flex flex-col gap-6 h-full'>
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

      <div className='flex flex-col md:flex-row gap-5 h-full'>
        <div className='flex flex-col bg-blue-1 rounded-lg p-5 gap-5 w-8/12'>
          Content
        </div>
        <div className='flex flex-col flex-3 gap-5 w-4/12'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-2xl'>Founder</p>
            <MemberCard name="John Cina" />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-2xl'>Joined Members</p>
            <MemberCard name="Eren Yeager" />
            <MemberCard name="Obito Uchiha" />
            <MemberCard name="Chrollo Lucifer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail