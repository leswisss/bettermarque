import React from 'react'
import { ProjectsContent } from '@/projects';
import { DetailsPageWrapper } from '@/components'


export function generateStaticParams() {
  const projects = ProjectsContent;

  return projects.map((post) => ({
    project: post.projectBox.slug,
  }));
}

const HomePage = () => {
  return (
    <div className='main'>
      <DetailsPageWrapper/>
    </div>
  )
}

export default HomePage