"use client";

import React, {useState} from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion';
import motion
import { StaticImageData } from 'next/image'
import styles from "../../styles/ReUsables/imageplaceholder.module.scss"


const ImagePlaceholder = ({src, alt}: {src: StaticImageData, alt: string}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && <div className={styles.shimmerPlaceholder} />}
      <Image fill quality={100} alt={alt} src={src} onLoadingComplete={handleLoadingComplete}/>
    </>
  )
}

export default ImagePlaceholder