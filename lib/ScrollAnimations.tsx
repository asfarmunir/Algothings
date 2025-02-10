'use client';
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface ScrollingAnimationProps {
  children: React.ReactNode; // Content to be animated
  baseDuration?: number; // Base duration for slower scroll (default: 30s)
  className?: string; // Custom class for styling
  gap?: string; // Gap between items (default: 20px)
}

export default function ScrollingAnimation({
  children,
  baseDuration = 60, // Default slow scrolling duration
  className = "",
  gap = "20px",
}: ScrollingAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      setContainerHeight(height);
    }
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="flex flex-col"
        style={{ gap }} // Set gap between items
        initial={{ y: 0 }}
        animate={{ y: `-${containerHeight}px` }}
        transition={{
          duration: baseDuration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate children to create a seamless loop */}
        {React.Children.toArray(children).concat(React.Children.toArray(children))}
      </motion.div>
    </motion.div>
  );
}
