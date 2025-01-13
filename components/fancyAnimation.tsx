import { motion } from "framer-motion";

export default function FancyAnimation() {
  const fancyAnimation = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-64 h-64">
      {/* Outer Glow Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-800 via-gray-500 to-white"
        style={{
          boxShadow: "0 0 30px 20px rgba(255, 255, 255, 0.2)",
        }}
        {...fancyAnimation}
      />

      {/* Inner Moving Layers */}
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 opacity-80"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          scale: [1, 1.05, 1],
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          backgroundSize: "200%",
          filter: "blur(4px)",
        }}
      />

      {/* Central Glowing Core */}
      <motion.div
        className="absolute inset-8 rounded-full bg-gradient-to-r from-gray-500 via-white to-gray-300"
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [1, 0.9, 1],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          boxShadow: "0 0 40px 30px rgba(255, 255, 255, 0.6)",
        }}
      />

      {/* Text in the Center */}
      <motion.div
        className="relative flex justify-center items-center w-full h-full rounded-full bg-transparent"
        animate={{
          rotate: [-15, 15, -15],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <h1 className="text-2xl font-extrabold text-gray-100 glow">
          Fancy AF!
        </h1>
      </motion.div>
    </div>
  );
}
