"use client";

import { useState, useRef, useEffect } from "react";
import { StaticImageData } from "next/image";
import gsap from "gsap";
import Play from "@/utils/Icons/Play";
import Pause from "@/utils/Icons/Pause";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";
import { ScrollTrigger } from "gsap/all";
import styles from "../../styles/HomePage/videoplayer.module.scss";
import Volume from "@/utils/Icons/Volume";
import Muted from "@/utils/Icons/Muted";

interface VideoPlayerProps {
  src: string;
  fallbackSrc: StaticImageData;
}

const VideoPlayer2 = ({ src, fallbackSrc }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { ref: sectionRef, inView: inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Play or pause video based on inView status
  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [inView]);

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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate clip-path on scroll
    gsap.to(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Reveal the full video
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=100px bottom",
        end: "bottom bottom",
        scrub: 1, // Smooth transition
      },
    });
  });

  return (
    <>
      <section className={`section ${styles.video__section}`}>
        <div
          className={`container ${styles.video__container}`}
          ref={sectionRef}
        >
          <div className={styles.videoContainer} ref={containerRef}>
            <div className={styles.control__buttons}>
              <div className={styles.pause__play}>
                <div className={styles.play}>

                </div>
              </div>
              <div className={styles.vol__mute}>
                <div className={styles.}>

                </div>
              </div>
            </div>
            <video
              ref={videoRef}
              className={`${styles.video} ${isLoaded ? styles.show : ""}`}
              src={src}
              loop
              muted
              onLoadedData={handleLoadedData}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPlayer2;
