'use client'

import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-4 gap-5'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Home
