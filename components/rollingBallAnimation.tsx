import { motion } from "framer-motion";

export default function RollingBallAnimation() {
  return (
    <div className="w-full h-[15vh] relative overflow-hidden flex items-center justify-center">
      {/* Ball 1 */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-full" />
      </div>

      {/* Ball 2 */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 shadow-lg flex items-center justify-center mx-4">
        <div className="w-6 h-6 bg-white rounded-full" />
      </div>

      {/* Ball 3 */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 shadow-lg flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-full" />
      </div>
    </div>
  );
}
