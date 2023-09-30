import ProjectForm from '@/components/ProjectForm'
import React from 'react'

const EditProject = () => {
  return (
    <div className='flex flex-col items-center'>
      <ProjectForm title="Edit Project" isEdit={true} />
    </div>
  )
}

export default EditProject