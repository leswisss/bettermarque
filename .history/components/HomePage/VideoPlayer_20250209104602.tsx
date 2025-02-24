"use client";

import { useState, useRef, useEffect } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react";
import Cursor from "../ReUsables/Cursor";
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

  //Cursor animations
  const [cursor, setCursor] = useState(false);
  const cursorText = isPlaying ? "Pause" : "Play";
  const pauseplayRef = useRef(null);

  // Button Visibility State with 5s delay
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [isActiveButton, setIsActiveButton] = useState(false);
  let timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle button click
  const handleButtonClick = () => {
    // If the button is already active (playing), reset timeout and stay visible
    if (isActiveButton) {
      clearTimeout(timeoutRef.current as NodeJS.Timeout);
      setButtonVisible(true); // Keep the button visible
    }
    setIsActiveButton((prev) => !prev); // Toggle play/pause state
  };

  // Automatically hide the button after 5 seconds of inactivity
  useEffect(() => {
    if (isActiveButton) {
      timeoutRef.current = setTimeout(() => {
        setButtonVisible(false); // Hide button after 5s
      }, 5000);
    }

    // Clean up the timeout on component unmount or state change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isActiveButton]);

  return (
    <>
      <section className={`section ${styles.video__section}`}>
        <div className={`container ${styles.video__container}`}>
          <div className={styles.videoContainer} ref={containerRef}>
            {!isLoaded && (
              <div className={styles.fallback}>
                <Image
                  src={fallbackSrc}
                  alt="Video loading..."
                  fill
                  quality={100}
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
            <div className={styles.playPauseButton} onClick={handleButtonClick}>
              {isButtonVisible && (
                <span
                  onClick={togglePlay}
                  className={`${styles.ppb__span} ${
                    isActiveButton ? styles.activeButton : ""
                  }`}
                >
                  {isPlaying ? (
                    <Icon icon="mdi:pause" />
                  ) : (
                    <Icon icon="mdi:play" />
                  )}
                </span>
              )}
            </div>
            <div
              className={styles.playPauseFill}
              onClick={togglePlay}
              ref={pauseplayRef}
              onMouseEnter={() => {
                setCursor(true);
              }}
              onMouseLeave={() => {
                setCursor(false);
              }}
            ></div>
          </div>
        </div>
      </section>
      <Cursor text={cursorText} boundary={pauseplayRef} activeState={cursor} />
    </>
  );
};

export default VideoPlayer;
