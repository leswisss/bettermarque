import React from 'react'
import { getPlaiceholder } from 'plaiceholder'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import fs from "node:fs/promises"

const async ImagePlaceholder = ({src, alt}: {src: StaticImport, alt: string}) => {
  const buffer = await fs.readFile(src.)
  return (
    <>
      <Image fill quality={100} alt={alt} src={src} placeholder="blur"/>
    </>
  )
}

export default ImagePlaceholder