import React from 'react'
import { getPlaiceholder } from 'plaiceholder'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import fs from "node:fs/promises"

const async ImagePlaceholder = ({src, alt}: {src: StaticImageData, alt: string}) => {
  const buffer = await fs.readFile(src.src);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <>
      <Image fill quality={100} alt={alt} src={src} placeholder="blur" blurDataURL={base}/>
    </>
  )
}

export default ImagePlaceholder