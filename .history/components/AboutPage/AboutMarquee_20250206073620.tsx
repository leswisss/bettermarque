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

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import IMAGE from "../../public/images/sparkler.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "../../styles/AboutPage/aboutmarquee.module.scss";

const AboutMarquee = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const sliderRef = useRef(null);
  const imageWrappers = useRef([]); // Use useRef for image__wrapper elements
  const directionRef = useRef(-1); // Use useRef for mutable direction value
  let xPercent = 0;
  let rotation = 0;
  const speed = 0.1; // Adjust speed of movement
  const rotationSpeedRef = useRef({
    current: 0.5,
    timeout: null, // Initialize timeout property
  }); // Initial rotation speed

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    xPercent += speed * directionRef.current; // Update marquee position
    rotation += rotationSpeedRef.current.current * directionRef.current; // Update rotation

    gsap.set([firstText.current, secondText.current], { xPercent });
    imageWrappers.current.forEach((wrapper) =>
      gsap.set(wrapper, { rotation })
    );

    requestAnimationFrame(animation);
  };

  // Use useGSAP hook to handle gsap animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered adjustments
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        directionRef.current = self.direction * -1; // Update direction

        // Calculate new rotation speed based on scroll velocity
        const scrollVelocity = self.getVelocity();
        const newRotationSpeed = Math.min(Math.abs(scrollVelocity) / 100, 5); // Cap the speed

        // Smoothly transition rotation speed
        gsap.to(rotationSpeedRef.current, {
          current: newRotationSpeed,
          duration: 0.2,
          overwrite: true,
          ease: "power2.out",
        });

        // Reset rotation speed after scrolling stops
        clearTimeout(rotationSpeedRef.current.timeout);
        rotationSpeedRef.current.timeout = setTimeout(() => {
          gsap.to(rotationSpeedRef.current, {
            current: 0.5,
            duration: 1,
            ease: "power2.out",
          });
        }, 100);
      },
    });

    requestAnimationFrame(animation);
  });

  // Collect image__wrapper references
  useEffect(() => {
    imageWrappers.current = Array.from(
      document.querySelectorAll(`.${styles.image__wrapper}`)
    );
  }, []);

  return (
    <div className={styles.aboutsliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        <div ref={firstText} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper} ref={(el) => imageWrappers.current.push(el)}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper} ref={(el) => imageWrappers.current.push(el)}>
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
              <div className={styles.image__wrapper} ref={(el) => imageWrappers.current.push(el)}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper} ref={(el) => imageWrappers.current.push(el)}>
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



