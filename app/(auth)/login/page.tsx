'use client'

import React from 'react';
import { Button, Circle, Divider, HStack, Icon, Image, Input, Link, Stack, Text } from '@chakra-ui/react';
import { FaGoogle, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import NextLink from 'next/link'

const Login = () => {
  return (
    <div className='bg-blue-2 min-h-screen flex items-center justify-center lg:p-6 md:p-4 p-3'>
      <div className='container shadow-lg flex sm:flex-row flex-col lg:w-4/6 w-100 rounded-2xl overflow-hidden'>
        <div className='sm:w-1/2 w-100 bg-blue-3 md:p-10 p-6'>
          <Stack spacing={4}>
            <h1 className='font-black text-white text-3xl'>Project Kaki: Join the Journey, Share the Success</h1>
            <p className='font-medium text-white text-md'>Join our platform to connect and collaborate on exciting projects. Share your ideas, gather a team, and make success a collective achievement. Let's innovate together!</p>
            <Image
              src='/images/landing.png'
              alt='landing image'
              boxSize={300}
              objectFit="contain"
              alignSelf="center"
            />
          </Stack>
        </div>
        <div className='sm:w-1/2 w-100 md:p-6 p-4 bg-blue-1 flex flex-col justify-center'>
          <Stack spacing={3}>
            <h1 className='font-bold text-2xl self-center'>Log In</h1>
            <Input placeholder='Email' className='bg-body' />
            <Input placeholder='Password' className='bg-body' />
            <Button className='bg-blue-3 hover:bg-blue-2 text-white' size='lg'>
              Log In
            </Button>
            <HStack spacing={3}>
              <Divider orientation='horizontal' borderColor='grey' />
              <p>OR</p>
              <Divider orientation='horizontal' borderColor='grey' />
            </HStack>
            <HStack spacing={5} justifyContent="center">
              <Circle size='40px' className='bg-blue-3 hover:bg-blue-2 cursor-pointer' color='white'>
                <Icon as={FaGoogle} />
              </Circle>
              <Circle size='40px' className='bg-blue-3 hover:bg-blue-2 cursor-pointer' color='white'>
                <Icon as={FaGithub} />
              </Circle>
              <Circle size='40px' className='bg-blue-3 hover:bg-blue-2 cursor-pointer' color='white'>
                <Icon as={FaLinkedinIn} />
              </Circle>
            </HStack>
            <Text textAlign="center">
              Don't have an account yet?{' '}
              <Link as={NextLink} href='/signup' className='text-blue-2'>
                Create one here!
              </Link>
            </Text>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Login