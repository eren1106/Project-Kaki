import { Avatar } from '@chakra-ui/react'
import React from 'react'

interface Props {
  name: string;
}

const MemberCard = ({ name }: Props) => {
  return (
    <div className='flex gap-3 cursor-pointer items-center'>
      <Avatar
        name='member image'
        size='md'
        src="https://mfiles.alphacoders.com/988/988122.jpg"
      />
      <p className='text-xl font-bold'>{name}</p>
    </div>
  )
}

export default MemberCard