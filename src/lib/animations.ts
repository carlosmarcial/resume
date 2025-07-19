import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const slideInFromBottom: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const textReveal: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const glitchAnimation: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const pulseAnimation: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const rotateAnimation: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const bounceAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 1,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const typewriterAnimation: Variants = {
  initial: { width: 0 },
  animate: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export const matrixRainAnimation: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: '100vh',
    opacity: [0, 1, 0],
    transition: {
      duration: 3,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};