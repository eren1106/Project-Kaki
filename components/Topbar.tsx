'use client'

import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Button, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoNotifications } from 'react-icons/io5'

const Topbar = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/profile/123');
  };

  return (
    <div className='flex p-3 bg-blue-3'>
      <Link href='/'>
        <h1 className='text-2xl font-black text-white cursor-pointer'>
          ProjectKaki
        </h1>
      </Link>
      <div className="ml-auto flex gap-4 items-center cursor-pointer">
        <Icon as={IoNotifications} color='white' boxSize={5} />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            className='text-white bg-blue-3'
            _hover={{ bg: 'inherit' }}
            _expanded={{ bg: 'inherit' }}
          >
            <Avatar
              size='sm'
              src="https://mfiles.alphacoders.com/988/988122.jpg"
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleNavigate} className='hover:bg-gray-200'>Profile</MenuItem>
            <MenuItem className='hover:bg-gray-200'>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

export default Topbar