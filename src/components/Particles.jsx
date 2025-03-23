import { motion } from "framer-motion";

const Particles = () => {
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    delay: `${Math.random() * 3}s`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-white opacity-20 rounded-full"
          style={{ top: particle.top, left: particle.left }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: parseFloat(particle.delay),
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
