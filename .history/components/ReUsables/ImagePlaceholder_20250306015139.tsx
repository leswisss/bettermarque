import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

const ImagePlaceholder = ({src}: {src: StaticImport}) => {
  return (
    <>
      <Image/>
    </>
  )
}

export default ImagePlaceholder