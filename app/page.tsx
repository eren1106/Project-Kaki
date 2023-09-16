'use client'

import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const Home = () => {
  return (
    <div className='container p-10 min-h-screen bg-body'>
      <div className='mx-auto grid grid-cols-3 gap-4'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Home
