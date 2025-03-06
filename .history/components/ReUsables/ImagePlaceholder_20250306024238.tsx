"use server";

import React from 'react'
import { getPlaiceholder } from 'plaiceholder'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import fs from "node:fs/promises"

const ImagePlaceholder = async ({src, alt}: {src: StaticImageData, alt: string}) => {
  const buffer = await fs.readFile("./public/images/brinovo/brinovo11.jpg");
  const { base64 } = await getPlaiceholder(buffer);

  "use client"
  return (
    <>
      <Image fill quality={100} alt={alt} src={src} placeholder="blur" blurDataURL={base64}/>
    </>
  )
}

export default ImagePlaceholder