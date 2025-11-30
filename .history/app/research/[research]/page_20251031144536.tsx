import React from 'react'
import { ResearchContent } from '@/research';
import { DetailsPageWrapper } from '@/components'


export function generateStaticParams() {
  const researches = ResearchContent;

  return researches.map((post) => ({
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