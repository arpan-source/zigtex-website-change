export const fadeUpBlurVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const fadeBlurVariant = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
