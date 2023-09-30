'use client'

import React, { useState } from 'react'
import { Input, Stack, Textarea } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const quillModules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline',, 'blockquote', 'code'],
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
  const [quillValue, setQuillValue] = useState('')

  return (
    <div className="w-full max-w-3xl">
      <Stack spacing={3}>
        <h1 className='font-bold text-2xl'>Create Project</h1>
        <Input
          placeholder='Project Title'
          className='bg-white border-gray-300'
        />
        <Textarea
          placeholder='Description'
          className='bg-white border-gray-300'
          resize="none"
        />
        <ReactQuill
          modules={quillModules}
          value={quillValue}
          onChange={(value: string) => {
            console.log(value);
            setQuillValue(value);
          }}
          placeholder='Content'
          className='bg-white'
        />
        {/* <div dangerouslySetInnerHTML={{__html: value}}></div> */}
      </Stack>
    </div>
  )
}

export default ProjectForm