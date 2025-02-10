// CardAnimation.tsx
import { motion } from "framer-motion";

interface CardAnimationProps {
  children: React.ReactNode;
  direction: "left" | "right";  // Determines from which side the element will come
  delay?: number;  // Optional delay for animation
}

const CardAnimation: React.FC<CardAnimationProps> = ({ children, direction, delay = 0 }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100, // Left or right sliding
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is in view
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
