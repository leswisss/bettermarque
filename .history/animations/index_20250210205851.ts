const transition = { duration: 0.8, ease: [0.7, 0, 0.3, 1] };


export const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.5, ease: [0.3, 0, 0.7, 0] },
  },
};

export const sideBarAnim = {
  initial: {
    height: "0dvh",
  },
  entry: {
    height: "100dvh",
    transition: transition,
  },
  exit: {
    height: "0dvh",
    transition: transition,
  },
};


export const sideBarLinkAnim = {
  initial: {
    y: "100%",
    opacity: 0,
  },

  entry: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 0.2 + i * 0.2 },
  }),

  exit: (i: number) => ({
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: [0.7, 0, 0.3, 1],
      delay: -i * 0.2 + 0.4,
    },
  }),
};