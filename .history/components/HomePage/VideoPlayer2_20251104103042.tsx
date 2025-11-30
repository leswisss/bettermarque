"use client";

import { useState, useRef, useEffect } from "react";
import { Suspense } from "react";
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
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true); // matches initial muted attribute
  const containerRef = useRef<HTMLDivElement>(null);

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Sync play state when element comes into view
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (inView) {
      // attempt autoplay when in view
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(!v.paused));
      } else {
        setIsPlaying(!v.paused);
      }
    }
  }, [inView]);

  // Toggle play / pause
  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      try {
        await v.play();
        setIsPlaying(true);
      } catch {
        // play blocked (autoplay policy), update state conservatively
        setIsPlaying(!v.paused);
      }
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  // Toggle mute / volume
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  // Handle loaded data
  const handleLoadedData = () => {
    setIsLoaded(true);
    // ensure state matches actual video
    const v = videoRef.current;
    if (v) {
      setIsMuted(Boolean(v.muted));
      setIsPlaying(!v.paused);
    }
  };

  // Keep local states synced with native video events (in case of external control)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolumeChange = () => setIsMuted(Boolean(v.muted));

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("volumechange", onVolumeChange);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("volumechange", onVolumeChange);
    };
  }, []);

  // GSAP scroll reveal
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=100px bottom",
        end: "bottom bottom",
        scrub: 1,
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
              <button
                className={styles.pause__play}
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                type="button"
              >
                {isPlaying ? <Pause /> : <Play />}
              </button>

              <button
                className={styles.vol__mute}
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                type="button"
              >
                {isMuted ? <Muted /> : <Volume />}
              </button>
            </div>
            <Suspense>
              <video
                ref={videoRef}
                className={`${styles.video} ${isLoaded ? styles.show : ""}`}
                src={src}
                loop
                muted={isMuted}
                onLoadedData={handleLoadedData}
                playsInline
                preload="metadata"
              />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPlayer2;
