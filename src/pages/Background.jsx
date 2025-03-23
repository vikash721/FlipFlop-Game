import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      {/* Glassmorphic Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-[90%] max-w-5xl h-[80vh] bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg"
      >
        {/* Light glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-200/10 to-gray-500/5" />
      </motion.div>
    </div>
  );
};

export default Background;
