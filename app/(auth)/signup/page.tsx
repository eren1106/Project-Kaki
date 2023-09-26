'use client'

import React from 'react';
import { Button, Circle, Divider, HStack, Icon, Image, Input, Stack } from '@chakra-ui/react';
import { FaGoogle, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const SignUp = () => {
  return (
    <div className='flex py-6 px-10'>
      <div className='w-8/12'>
        <Image
          src='/images/landing.png'
          alt='landing image'
          boxSize={500}
        />
      </div>
      <div className='w-4/12 p-6 shadow-lg rounded-lg bg-blue-1'>
        <Stack spacing={3}>
          <h1 className='font-bold text-2xl'>Sign Up</h1>
          <Stack spacing={3} direction='row'>
            <Input placeholder='First Name' size='md' className='bg-body' />
            <Input placeholder='Last Name' size='md' className='bg-body' />
          </Stack>
          <Input placeholder='Email' size='md' className='bg-body' />
          <Input placeholder='Password' size='md' className='bg-body' />
          <Input placeholder='Confirm Password' size='md' className='bg-body' />
          <Button className='bg-blue-3 hover:bg-blue-2 text-white' size='lg'>
            Sign Up
          </Button>
          <HStack spacing={3}>
            <Divider orientation='horizontal' borderColor='grey' />
            <p>OR</p>
            <Divider orientation='horizontal' borderColor='grey' />
          </HStack>
          <HStack spacing={5} justifyContent="center">
            <Circle size='40px' className='bg-blue-3' color='white'>
              <Icon as={FaGoogle} />
            </Circle>
            <Circle size='40px' className='bg-blue-3' color='white'>
              <Icon as={FaGithub} />
            </Circle>
            <Circle size='40px' className='bg-blue-3' color='white'>
              <Icon as={FaLinkedinIn} />
            </Circle>
          </HStack>
        </Stack>
      </div>
    </div>
  )
}

export default SignUp