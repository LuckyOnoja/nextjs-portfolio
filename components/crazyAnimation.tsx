import { motion } from "framer-motion";

export default function CrazyAnimation({name}:any) {
  const crazyAnimation = {
    animate: {
      scale: [1, 1.1, 0.9, 1],
      x: [0, 100, -100, 0], // Tiles move horizontally
      y: [0, 100, -100, 0], // Tiles move vertically
      rotate: [0, 180, 360], // Rotation to give a sense of disorientation as the tiles move
      backgroundColor: [
        "#0a0a0a", // Very Dark Black
        "#111111", // Darker Gray-Black
        "#181818", // Almost Black
        "#1f1f1f", // Dark Gray
        "#000000", // Solid Black
      ],
      transition: {
        duration: 6, // Slightly longer transition for smoother movement
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gray-800 flex items-center justify-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5rem",
        borderRadius: "8px",
      }}
      {...crazyAnimation}
    >
      <motion.span
        className="text-white font-bold text-xs sm:text-sm md:text-base"
        animate={{
          rotate: [0, -360], // Smooth rotation of text
          transition: { repeat: Infinity, duration: 3 },
        }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
}
