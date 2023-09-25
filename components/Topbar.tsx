'use client'

import { Avatar, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { IoNotifications } from 'react-icons/io5'

const Topbar = () => {
  return (
    <div className='flex p-3 bg-blue-3'>
      <Link href='/'>
        <h1 className='text-2xl font-black text-white cursor-pointer'>
          Project Kaki
        </h1>
      </Link>
      <div className="ml-auto flex gap-4 items-center cursor-pointer">
        <Icon as={IoNotifications} color='white' boxSize={5} />
        <Avatar
          name='profile image'
          size='sm'
          src="https://mfiles.alphacoders.com/988/988122.jpg"
          className='cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Topbar