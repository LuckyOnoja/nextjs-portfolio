import { motion } from "framer-motion";

export default function MasterpieceAnimation() {
  return (
    <div className="relative flex justify-center items-center w-72 h-72">
      {/* Outer Glow with Gradient Rotation */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: "conic-gradient(from 180deg, #ff7eb3, #ff758c, #ffdf5d, #b4ff9f, #79c4ff, #e17dff)",
          filter: "blur(15px)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Middle Pulsing Ring */}
      <motion.div
        className="absolute w-[90%] h-[90%] rounded-full border-[3px] border-dashed"
        style={{
          borderImage: "linear-gradient(90deg, #ffffff, #ff7eb3) 1",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner Gradient Core */}
      <motion.div
        className="absolute w-[75%] h-[75%] rounded-full"
        style={{
          background: "radial-gradient(circle, #ffffff, #ff7eb3, #ff758c, transparent)",
          boxShadow: "0 0 40px 20px rgba(255, 120, 180, 0.4)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glowing Text */}
      <motion.div
        className="absolute flex justify-center items-center text-2xl font-extrabold text-white"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Stunning UI
      </motion.div>
    </div>
  );
}
