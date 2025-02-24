"use client";

import { useState, useRef, useEffect } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "../../styles/HomePage/videoplayer.module.scss";


interface VideoPlayerProps {
  src: string;
  fallbackSrc: StaticImageData;
}

const VideoPlayer = ({ src, fallbackSrc }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Handle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Handle video load event
  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <section className={`{styles.video__section`}>
      <div className={`container ${styles.video__container}`}>
        <div
          className={styles.videoContainer}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {!isLoaded && (
            <div className={styles.fallback}>
              <Image
                src={fallbackSrc}
                alt="Video loading..."
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}

          <video
            ref={videoRef}
            className={`${styles.video} ${isLoaded ? styles.show : ""}`}
            src={src}
            autoPlay
            loop
            muted
            onLoadedData={handleLoadedData}
          />

          {showControls && (
            <button className={styles.playPauseButton} onClick={togglePlay}>
              {isPlaying ? "❚❚" : "▶"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
