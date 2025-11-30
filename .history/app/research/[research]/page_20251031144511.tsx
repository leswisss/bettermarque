import React from 'react'
import { ResearchContent } from '@/research';
import { DetailsPageWrapper } from '@/components'


export function generateStaticParams() {
  const projects = ResearchContent;

  return projects.map((post) => ({
    research: post.projectBox.slug,
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