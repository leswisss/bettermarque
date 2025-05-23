"use client"l

import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import styles from "../../styles/ReUsables/imageplaceholder.module.scss"


const ImagePlaceholder = async ({src, alt}: {src: StaticImageData, alt: string}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      <Image fill quality={100} alt={alt} src={src}/>
    </>
  )
}

export default ImagePlaceholder