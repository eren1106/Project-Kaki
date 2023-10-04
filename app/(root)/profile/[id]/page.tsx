'use client'

import { EmailIcon, LinkIcon, PhoneIcon } from '@chakra-ui/icons'
import { Avatar, Button, Divider, FormControl, FormLabel, HStack, Icon, Input, Link, Stack, Textarea, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { IoIosSend } from 'react-icons/io'
import { FaEdit } from 'react-icons/fa'
import { FaLocationDot, FaGithub, FaLinkedin } from 'react-icons/fa6'
import CustomModal from '@/components/CustomModal'
import ImageUploader from '@/components/ImageUploader'

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          {/* <Button
            leftIcon={<IoIosSend />}
            className='bg-blue-3 hover:bg-blue-2 text-white max-w-min'
          >
            Invite
          </Button> */}
          <Button
            leftIcon={<FaEdit />}
            className='bg-blue-3 hover:bg-blue-2 text-white max-w-min'
            onClick={onOpen}
          >
            Edit
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
      <CustomModal
        title="Edit Profile"
        isOpen={isOpen}
        onAction={() => { console.log("OI") }}
        onClose={onClose}
      >
        <ProfileForm />
      </CustomModal>
    </div>
  )
}

const ProfileForm = () => {
  return (
    <Stack spacing={3}>
      <FormControl id="maxPersonNum">
        <FormLabel>Profile Picture</FormLabel>
        <ImageUploader />
      </FormControl>
      <HStack>
        <FormControl id="firstName">
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder='First Name'
            className='bg-white border-gray-300'
          />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input
            placeholder='Last Name'
            className='bg-white border-gray-300'
          />
        </FormControl>
      </HStack>
      <FormControl id="bio">
        <FormLabel>Bio</FormLabel>
        <Textarea
          placeholder='Bio'
          className='bg-white border-gray-300'
          resize="none"
        />
      </FormControl>
      <FormControl id="about">
        <FormLabel>About</FormLabel>
        <Textarea
          placeholder='About'
          className='bg-white border-gray-300'
          resize="none"
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Email'
          className='bg-white border-gray-300'
          type='email'
        />
      </FormControl>
      <FormControl id="phone">
        <FormLabel>Phone</FormLabel>
        <Input
          placeholder='Phone'
          className='bg-white border-gray-300'
        />
      </FormControl>
      <FormControl id="location">
        <FormLabel>Location</FormLabel>
        <Input
          placeholder='Location'
          className='bg-white border-gray-300'
        />
      </FormControl>
      <FormControl id="portfolio">
        <FormLabel>Portfolio (optional)</FormLabel>
        <Input
          placeholder='Portfolio'
          className='bg-white border-gray-300'
        />
      </FormControl>
      <FormControl id="github">
        <FormLabel>Github (optional)</FormLabel>
        <Input
          placeholder='Github'
          className='bg-white border-gray-300'
        />
      </FormControl>
      <FormControl id="linkedin">
        <FormLabel>Linkedin (optional)</FormLabel>
        <Input
          placeholder='Linkedin'
          className='bg-white border-gray-300'
        />
      </FormControl>
    </Stack>
  )
}

export default Profile