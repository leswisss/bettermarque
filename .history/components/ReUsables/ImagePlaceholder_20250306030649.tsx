import React from 'react'
import Image from 'next/image'
import styles from "../../styles/"


const ImagePlaceholder = async ({src, alt}: {src: StaticImageData, alt: string}) => {
  return (
    <>
      <Image fill quality={100} alt={alt} src={src} placeholder="blur" blurDataURL={base64}/>
    </>
  )
}

export default ImagePlaceholder