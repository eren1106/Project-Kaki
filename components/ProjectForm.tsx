'use client'

import React, { useState } from 'react'
import { Button, FormControl, FormLabel, HStack, IconButton, Input, Stack, Switch, Textarea } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from './ImageUploader';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const quillModules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', , 'blockquote', 'code'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

const ProjectForm = () => {
  const [quillValue, setQuillValue] = useState('');
  const [needApprove, setNeedApprove] = useState(false);

  return (
    <div className="w-full max-w-3xl">
      <Stack spacing={3}>
        <h1 className='font-bold text-2xl'>Create Project</h1>
        <FormControl id="maxPersonNum">
          <FormLabel>Project Image</FormLabel>
          <ImageUploader />
        </FormControl>
        <FormControl id="title">
          <FormLabel>Project Title</FormLabel>
          <Input
            placeholder='Project Title'
            className='bg-white border-gray-300'
          />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder='Description'
            className='bg-white border-gray-300'
            resize="none"
          />
        </FormControl>
        <FormControl id="maxPersonNum">
          <FormLabel>Number of members required</FormLabel>
          <Input
            type="number"
            placeholder="Number of members required (Max 20)"
            min={1}
            max={20}
            className='bg-white border-gray-300'
          />
        </FormControl>

        <FormControl display='flex' alignItems='center'>
          <FormLabel htmlFor='needApproval' mb='0'>
            Need Approval?
          </FormLabel>
          <Switch
            id='needApproval'
            isChecked={needApprove}
            onChange={() => {
              setNeedApprove(!needApprove);
            }}
          />
        </FormControl>

        {/* QUESTIONS THAT FOUNDER WANT TO ASK APPLICANT */}
        {
          needApprove &&
          <Stack spacing={3}>
            <HStack>
              <p>Questions you would like to ask applicant</p>
              <Button
                leftIcon={<AddIcon />}
                className='bg-blue-3 hover:bg-blue-2 text-white'
                size="sm"
              >
                Add Question
              </Button>
            </HStack>
            <HStack>
              <Input
                placeholder='Write your question here'
                className='bg-white border-gray-300'
              />
              <IconButton
                aria-label='Delete question'
                icon={<DeleteIcon />}
                className='bg-red-600 hover:bg-red-500 text-white'
              />
            </HStack>
          </Stack>
        }

        <FormControl id="details">
          <FormLabel>Details</FormLabel>
          <ReactQuill
            modules={quillModules}
            value={quillValue}
            onChange={(value: string) => {
              console.log(value);
              setQuillValue(value);
            }}
            placeholder='Details'
            className='bg-white border-gray-300'
          />
          {/* <div dangerouslySetInnerHTML={{__html: value}}></div> */}
        </FormControl>
      </Stack>
    </div>
  )
}

export default ProjectForm