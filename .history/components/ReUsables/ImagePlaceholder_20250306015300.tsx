import React from 'react'
import get
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

const ImagePlaceholder = ({src, alt}: {src: StaticImport, alt: string}) => {
  return (
    <>
      <Image fill quality={100} alt={alt} src={src} placeholder="blur"/>
    </>
  )
}

export default ImagePlaceholder