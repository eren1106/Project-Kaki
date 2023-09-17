import { Avatar } from '@chakra-ui/react'
import React from 'react'

const Topbar = () => {
  return (
    <div className='flex p-3 bg-blue-3'>
      <h1 className='text-2xl font-black text-white cursor-pointer'>
        Project Kaki
      </h1>
      <div className="ml-auto">
        <Avatar
          name='project image'
          size='sm'
          src="https://mfiles.alphacoders.com/988/988122.jpg"
          className='cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Topbar