import ProjectForm from '@/components/ProjectForm'
import React from 'react'

const CreateProject = () => {
  return (
    <div className='flex flex-col items-center'>
      <ProjectForm title="Create Project" isEdit={false} />
    </div>
  )
}

export default CreateProject