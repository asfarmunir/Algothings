"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface AnimationSectionProps {
  children: ReactNode; // Type for children elements
}

const AnimationSection: React.FC<AnimationSectionProps> = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    try {
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
          scale: 1, // Final scale for the "pop" effect
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        });
      } else {
        controls.start({
          opacity: 0,
          y: 50,
          scale: 0.8, // Initial scale to make it appear to "pop" in
        });
      }
    } catch (error) {
      console.error("Error during animation controls:", error);
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={controls}
      style={{ overflow: "hidden" }} // Optional: prevents overflow during animation
    >
      {children}
    </motion.div>
  );
};

export default AnimationSection;
