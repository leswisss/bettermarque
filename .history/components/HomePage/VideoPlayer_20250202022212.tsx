"use client";

import { useState, useRef, useEffect} from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../styles/HomePage/videoplayer.module.scss";


interface VideoPlayerProps {
  src: string;
  fallbackSrc: StaticImageData;
}

const VideoPlayer = ({ src, fallbackSrc }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

   useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate clip-path on scroll
    gsap.to(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Reveal the full video
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom+=", 
        end: "bottom bottom", 
        scrub: 2, // Smooth transition
        markers: true
      },
    });
  }, []);

  return (
    <section className={`section ${styles.video__section}`}>
      <div className={`container ${styles.video__container}`}>
        <div
          className={styles.videoContainer}
          ref={containerRef}
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
            <div className={styles.playPauseButton} onClick={togglePlay}>
              <span>
                {isPlaying ? "Pause Video" : "Play Video"}
              </span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
