// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import IMAGE from "../../public/images/sparkler.png";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
// import styles from "../../styles/AboutPage/aboutmarquee.module.scss";

// const AboutMarquee = () => {
//   const firstText = useRef(null);
//   const secondText = useRef(null);
//   const sliderRef = useRef(null);
//   const directionRef = useRef(-1); // Use useRef for mutable direction value
//   let xPercent = 0;
//   const speed = 0.1; // Adjust speed of movement

//   const animation = () => {
//     if (xPercent <= -100) xPercent = 0;
//     if (xPercent > 0) xPercent = -100;
//     gsap.set(firstText.current, { xPercent });
//     gsap.set(secondText.current, { xPercent });
//     xPercent += speed * directionRef.current; // Use directionRef's current property
//     requestAnimationFrame(animation);
//   };

//   // Use useGSAP hook to handle gsap animations
//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(sliderRef.current, {
//       scrollTrigger: {
//         trigger: document.documentElement,
//         start: 0,
//         end: window.innerHeight,
//         scrub: 1,
//         onUpdate: (e) => (directionRef.current = e.direction * -1), // Update directionRef's current property
//       },
//       x: "-150px",
//     });
//     requestAnimationFrame(animation);
//   });

//   return (
//     <div className={styles.aboutsliderContainer}>
//       <div className={styles.slider} ref={sliderRef}>
//         <div ref={firstText} className={styles.image__mainwrapper}>
//           <div className={styles.image__overwrapper}>
//             <div className={styles.content__wrapper}>
//               <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
//               <div className={styles.image__wrapper}>
//                 <Image fill quality={100} alt="Better Marque" src={IMAGE} />
//               </div>
//             </div>
//             <div className={styles.content__wrapper}>
//               <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
//               <div className={styles.image__wrapper}>
//                 <Image fill quality={100} alt="Better Marque" src={IMAGE} />
//               </div>
//             </div>
//           </div>
//           <span></span>
//         </div>
//         <div ref={secondText} className={styles.image__mainwrapper}>
//           <div className={styles.image__overwrapper}>
//             <div className={styles.content__wrapper}>
//               <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
//               <div className={styles.image__wrapper}>
//                 <Image fill quality={100} alt="Better Marque" src={IMAGE} />
//               </div>
//             </div>
//             <div className={styles.content__wrapper}>
//               <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
//               <div className={styles.image__wrapper}>
//                 <Image fill quality={100} alt="Better Marque" src={IMAGE} />
//               </div>
//             </div>
//           </div>
//           <span></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMarquee;

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import IMAGE from "../../public/images/sparkler.png"; // Replace with your image path
import styles from "../../styles/AboutPage/aboutmarquee.module.scss";

const AboutMarquee = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const sliderRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const directionRef = useRef(-1); // Use useRef for mutable direction value
  const rotationSpeedRef = useRef(1); // For adjusting rotation speed dynamically

  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement
  const rotationSpeed = 5; // Base rotation speed

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    // Animate x position of text
    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });
    
    // Apply rotation based on the scroll movement
    if (imageWrapperRef.current) {
      gsap.set(imageWrapperRef.current, {
        rotation: xPercent * rotationSpeed rotationSpeedRef.current, // Rotate based on x position
      });
    }

    xPercent += speed * directionRef.current; // Use directionRef's current property
    requestAnimationFrame(animation);
  };

  // Use useGSAP hook to handle gsap animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Horizontal movement of the slider based on scroll
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 1,
        onUpdate: (e) => {
          directionRef.current = e.direction * -1; // Update directionRef's current property
          rotationSpeedRef.current = e.direction * 2; // Temporary change of rotation speed during scroll
        },
      },
      x: "-150px",
    });

    // Animate based on scroll position and start the animation
    requestAnimationFrame(animation);
  });

  return (
    <div className={styles.aboutsliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        <div ref={firstText} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper} ref={imageWrapperRef}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper} ref={imageWrapperRef}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
          </div>
          <span></span>
        </div>

        <div ref={secondText} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper} ref={imageWrapperRef}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper} ref={imageWrapperRef}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AboutMarquee;

