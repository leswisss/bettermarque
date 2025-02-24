// "use client";

// import { useState, useRef, useEffect } from "react";
// import { StaticImageData } from "next/image";
// import Image from "next/image";
// import styles from "../../styles/HomePage/videoplayer.module.scss";

// interface VideoPlayerProps {
//   src: string;
//   fallbackSrc: StaticImageData;
// }

// const VideoPlayer = ({ src, fallbackSrc }: VideoPlayerProps) => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [showControls, setShowControls] = useState(false);

//   // Handle play/pause
//   const togglePlay = () => {
//     if (!videoRef.current) return;
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   // Handle video load event
//   const handleLoadedData = () => {
//     setIsLoaded(true);
//   };

//   return (
//     <div className={styles.videoContainer} onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
//       {!isLoaded && (
//         <div className={styles.fallback}>
//           <Image src={fallbackSrc} alt="Video loading..." layout="fill" objectFit="cover" />
//         </div>
//       )}

//       <video
//         ref={videoRef}
//         className={`${styles.video} ${isLoaded ? styles.show : ""}`}
//         src={src}
//         autoPlay
//         loop
//         muted
//         onLoadedData={handleLoadedData}
//       />

//       {showControls && (
//         <button className={styles.playPauseButton} onClick={togglePlay}>
//           {isPlaying ? "❚❚" : "▶"}
//         </button>
//       )}
//     </div>
//   );
// };

// export default VideoPlayer;

import React, { useState, useRef, useEffect } from 'react';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = ({ src, fallbackImage }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsLoading(false));
      video.addEventListener('ended', () => video.play()); // Loop the video
    }

    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => setIsLoading(false));
        video.removeEventListener('ended', () => video.play());
      }
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className={styles.videoContainer}>
      {isLoading && <img src={fallbackImage} alt="Loading" className={styles.fallbackImage} />}
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        onClick={togglePlayPause}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.controls} onClick={togglePlayPause}>
        {!isPlaying && <button className={styles.playButton}>▶</button>}
        {isPlaying && <button className={styles.pauseButton}>⏸</button>}
      </div>
    </div>
  );
};

export default VideoPlayer;