import { motion } from "framer-motion";

export default function CrazyAnimation() {
  const crazyAnimation = {
    animate: {
      scale: [1, 1.2, 0.8, 1],
      rotate: [0, 90, 180, 270, 360],
      borderRadius: ["20%", "50%", "10%", "50%", "20%"],
      x: [0, 50, -50, 0],
      y: [0, -50, 50, 0],
      backgroundColor: [
        "#f5f5f5", // Light Gray
        "#d3d3d3", // Silver
        "#808080", // Gray
        "#4f4f4f", // Dark Gray
        "#000000", // Black
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="w-40 h-40 bg-gray-500"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...crazyAnimation}
    >
      <motion.span
        className="text-white font-bold"
        animate={{
          rotate: [0, -360],
          transition: { repeat: Infinity, duration: 3 },
        }}
      >
        WOW!
      </motion.span>
    </motion.div>
  );
}
