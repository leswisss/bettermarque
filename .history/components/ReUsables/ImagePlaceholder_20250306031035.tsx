"use client";

import React, {useState} from 'react'
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
      <Image fill quality={100} alt={alt} src={src} onLoadingComplete={handleLoadingComplete}/>
      <div className={styles.shimmerPlaceholder} />
    </>
  )
}

export default ImagePlaceholder