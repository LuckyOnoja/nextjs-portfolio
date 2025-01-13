import { motion } from "framer-motion";

export default function SnakeAnimation() {
  const colors = ["#ffffff", "#e0e0e0", "#a9a9a9", "#707070", "#4a4a4a"];

  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      {/* Snake Path */}
      <motion.div
        className="absolute w-[500px] "
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array.from({ length: colors.length }, (_, index) => (
          <motion.div
            key={index}
            className="absolute w-8 h-8 rounded-full"
            style={{
              backgroundColor: colors[index],
              boxShadow: `0 0 15px ${colors[index]}`,
            }}
            animate={{
              x: [
                50 * Math.cos((index * Math.PI) / 3),
                100 * Math.sin((index * Math.PI) / 3),
                -50 * Math.cos((index * Math.PI) / 3),
              ],
              y: [
                -50 * Math.sin((index * Math.PI) / 3),
                100 * Math.cos((index * Math.PI) / 3),
                50 * Math.sin((index * Math.PI) / 3),
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              delay: index * 0.3, // Staggered movement
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
