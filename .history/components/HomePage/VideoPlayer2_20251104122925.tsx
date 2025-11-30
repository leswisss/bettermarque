// "use client";

// import { useState, useRef, useEffect } from "react";
// import { StaticImageData } from "next/image";
// import Image from "next/image";
// import gsap from "gsap";
// import Play from "@/utils/Icons/Play";
// import Pause from "@/utils/Icons/Pause";
// import { useGSAP } from "@gsap/react";
// import { useInView } from "react-intersection-observer";
// import { ScrollTrigger } from "gsap/all";
// import styles from "../../styles/HomePage/videoplayer.module.scss";
// import Volume from "@/utils/Icons/Volume";
// import Muted from "@/utils/Icons/Muted";

// interface VideoPlayerProps {
//   src: string;
//   fallbackSrc: StaticImageData;
// }

// const VideoPlayer2 = ({ src, fallbackSrc }: VideoPlayerProps) => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const [isLoaded, setIsLoaded] = useState<boolean>(false);
//   const [isMuted, setIsMuted] = useState<boolean>(true);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const loaderTimeoutRef = useRef<number | null>(null);

//   const { ref: sectionRef, inView } = useInView({
//     threshold: 0.4,
//     triggerOnce: true,
//   });

//   // autoplay when visible (best-effort)
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     if (inView) {
//       const p = v.play();
//       if (p && typeof p.then === "function") {
//         p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(!v.paused));
//       } else {
//         setIsPlaying(!v.paused);
//       }
//     }
//   }, [inView]);

//   const togglePlay = async () => {
//     const v = videoRef.current;
//     if (!v) return;
//     if (v.paused) {
//       try {
//         await v.play();
//         setIsPlaying(true);
//       } catch {
//         setIsPlaying(!v.paused);
//       }
//     } else {
//       v.pause();
//       setIsPlaying(false);
//     }
//   };

//   const toggleMute = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.muted = !v.muted;
//     setIsMuted(v.muted);
//   };

//   // central handler to hide spinner when video is ready enough
//   const markAsLoaded = () => {
//     if (!isLoaded) {
//       console.log("[video] marking loaded");
//       setIsLoaded(true);
//       // clear fallback timeout if set
//       if (loaderTimeoutRef.current) {
//         window.clearTimeout(loaderTimeoutRef.current);
//         loaderTimeoutRef.current = null;
//       }
//     }
//   };

//   // attach native event listeners + fallback timer
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     const onLoadedMetadata = () => {
//       console.log("[video event] loadedmetadata");
//       // metadata available — we can show UI but keep waiting for first frame/play readiness
//     };
//     const onLoadedData = () => {
//       console.log("[video event] loadeddata (first frame)");
//       markAsLoaded();
//     };
//     const onCanPlay = () => {
//       console.log("[video event] canplay (ready to play)");
//       markAsLoaded();
//     };
//     const onPlay = () => setIsPlaying(true);
//     const onPause = () => setIsPlaying(false);
//     const onVolumeChange = () => setIsMuted(Boolean(v.muted));

//     v.addEventListener("loadedmetadata", onLoadedMetadata);
//     v.addEventListener("loadeddata", onLoadedData);
//     v.addEventListener("canplay", onCanPlay);
//     v.addEventListener("play", onPlay);
//     v.addEventListener("pause", onPause);
//     v.addEventListener("volumechange", onVolumeChange);

//     // fallback: if nothing fired within X seconds, remove spinner (avoid stuck UX)
//     loaderTimeoutRef.current = window.setTimeout(() => {
//       console.warn(
//         "[video] loader timeout reached — hiding spinner as fallback"
//       );
//       markAsLoaded();
//     }, 8000); // 8s fallback - adjust to taste

//     // ensure initial state matches video props
//     setIsMuted(Boolean(v.muted));
//     setIsPlaying(!v.paused);

//     return () => {
//       v.removeEventListener("loadedmetadata", onLoadedMetadata);
//       v.removeEventListener("loadeddata", onLoadedData);
//       v.removeEventListener("canplay", onCanPlay);
//       v.removeEventListener("play", onPlay);
//       v.removeEventListener("pause", onPause);
//       v.removeEventListener("volumechange", onVolumeChange);
//       if (loaderTimeoutRef.current) {
//         window.clearTimeout(loaderTimeoutRef.current);
//       }
//     };
//   }, []);

//   // GSAP scroll reveal
//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     if (!containerRef.current) return;
//     gsap.to(containerRef.current, {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top+=100px bottom",
//         end: "bottom bottom",
//         scrub: 1,
//       },
//     });
//   });

//   return (
//     <section className={`section ${styles.video__section}`}>
//       <div className={`container ${styles.video__container}`} ref={sectionRef}>
//         <div className={styles.videoContainer} ref={containerRef}>
//           <div className={styles.control__buttons}>
//             <button
//               className={styles.pause__play}
//               onClick={togglePlay}
//               aria-label={isPlaying ? "Pause video" : "Play video"}
//               type="button"
//             >
//               {isPlaying ? <Pause /> : <Play />}
//             </button>

//             <button
//               className={styles.vol__mute}
//               onClick={toggleMute}
//               aria-label={isMuted ? "Unmute video" : "Mute video"}
//               type="button"
//             >
//               {isMuted ? <Muted /> : <Volume />}
//             </button>
//           </div>

//           {/* spinner overlay - hides when isLoaded true */}
//           {!isLoaded && (
//             <div
//               className={styles.spinnerOverlay}
//               role="status"
//               aria-live="polite"
//             >
//               <div className={styles.spinner} aria-hidden="true">
//                 <span className={styles.dot}></span>
//                 <span className={styles.dot}></span>
//                 <span className={styles.dot}></span>
//               </div>
//               <div className={styles.fallbackk}>
//                 <div className={styles.backdropfilter}></div>
//                 <Image
//                   fill
//                   quality={100}
//                   src={fallbackSrc}
//                   alt="Loading Video..."
//                   placeholder="blur"
//                 />
//               </div>
//             </div>
//           )}

//           <video
//             ref={videoRef}
//             className={`${styles.video} ${isLoaded ? styles.show : ""}`}
//             src={src}
//             loop
//             muted={isMuted}
//             playsInline
//             preload="metadata"
//             // we keep onLoadedData but native listener above already handles it
//             onLoadedData={() => {
//               console.log("[onLoadedData prop] fired");
//               markAsLoaded();
//             }}
//             onCanPlay={() => {
//               console.log("[onCanPlay prop] fired");
//               markAsLoaded();
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoPlayer2;
