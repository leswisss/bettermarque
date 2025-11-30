import React from 'react'
import { ResearchContent } from '@/research';
import { DetailsPageWrapper } from '@/components'
import ResearchDetailsWrapper from '@/components/DetailsPage/ResearchDetailsWrapper';


export function generateStaticParams() {
  const researches = ResearchContent;

  return researches.map((post) => ({
    research: post.projectBox.slug,
  }));
}

const HomePage = () => {
  return (
    <div className='main'>
      <ResearchDetailsWrapper/>
    </div>
  )
}

export default HomePage