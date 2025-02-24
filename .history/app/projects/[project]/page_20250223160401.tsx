import React from 'react'
import Proje
import { DetailsPageWrapper } from '@/components'


export function generateStaticParams() {
  const projects = ProjectsContent;

  return projects.map((post) => ({
    project: post.slug,
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