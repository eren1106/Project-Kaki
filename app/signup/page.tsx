import { Button, Divider, Image, Input, Stack } from '@chakra-ui/react'
import React from 'react'

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
          <Divider orientation='horizontal' borderColor='grey' />
        </Stack>
      </div>
    </div>
  )
}

export default SignUp