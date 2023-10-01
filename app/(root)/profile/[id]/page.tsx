'use client'

import { EmailIcon, LinkIcon, PhoneIcon } from '@chakra-ui/icons'
import { Avatar, Button, Divider, HStack, Icon, Link, Stack } from '@chakra-ui/react'
import React from 'react'
import { IoIosSend } from 'react-icons/io'
import { FaLocationDot, FaGithub, FaLinkedin } from 'react-icons/fa6'

const Profile = () => {
  return (
    <div className='max-w-6xl flex flex-col gap-5'>
      <div className='flex bg-blue-1 rounded-lg p-8 gap-5'>
        <Avatar
          size='2xl'
          src="https://mfiles.alphacoders.com/988/988122.jpg"
          className='border-blue-3 border-4'
        />
        <Stack spacing={3} className='w-6/12'>
          <h1 className='font-bold text-2xl'>Eren Yeager</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae magnam eos incidunt vero perferendis possimus delectus magni! Neque, veritatis!</p>
          <Button
            leftIcon={<IoIosSend />}
            className='bg-blue-3 hover:bg-blue-2 text-white max-w-min'
          >
            Invite
          </Button>
        </Stack>
        <div className='h-100'>
          <Divider orientation='vertical' borderColor='grey' />
        </div>
        <Stack spacing={3} className='w-6/12'>
          <HStack>
            <EmailIcon />
            <p>erenyeager@gmail.com</p>
          </HStack>
          <HStack>
            <PhoneIcon />
            <p>+60123456789</p>
          </HStack>
          <HStack>
            <Icon as={FaLocationDot} />
            <p>Kuala Lumpur, Malaysia</p>
          </HStack>
          <HStack>
            <LinkIcon />
            <Link href="https://github.com/eren1106" isExternal>https://github.com/eren1106</Link >
          </HStack>
          <HStack>
            <Link href="https://github.com/eren1106" isExternal>
              <Icon as={FaGithub} boxSize={6} />
            </Link >
            <Link href="https://github.com/eren1106" isExternal>
              <Icon as={FaLinkedin} boxSize={6} color="#0a66c2" />
            </Link >
          </HStack>
        </Stack>
      </div>
      <div className='flex flex-col bg-blue-1 rounded-lg p-6 gap-5'>
        <Stack spacing={0}>
          <h1 className='font-bold text-lg'>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni maiores iure eos corrupti minima laboriosam? Molestias nesciunt illum numquam sapiente provident, laborum eveniet autem qui! Incidunt, similique! Doloribus, illum itaque consequuntur distinctio velit culpa quas optio architecto! Possimus laudantium rem in ducimus facilis dolorem laboriosam sunt neque doloremque nam.</p>
        </Stack>
        <Stack spacing={0}>
          <h1 className='font-bold text-lg'>Past Projects</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni maiores iure eos corrupti minima laboriosam? Molestias nesciunt illum numquam sapiente provident, laborum eveniet autem qui! Incidunt, similique! Doloribus, illum itaque consequuntur distinctio velit culpa quas optio architecto! Possimus laudantium rem in ducimus facilis dolorem laboriosam sunt neque doloremque nam.</p>
        </Stack>
        <Stack spacing={0}>
          <h1 className='font-bold text-lg'>Current Projects</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni maiores iure eos corrupti minima laboriosam? Molestias nesciunt illum numquam sapiente provident, laborum eveniet autem qui! Incidunt, similique! Doloribus, illum itaque consequuntur distinctio velit culpa quas optio architecto! Possimus laudantium rem in ducimus facilis dolorem laboriosam sunt neque doloremque nam.</p>
        </Stack>
      </div>
    </div>
  )
}

export default Profile