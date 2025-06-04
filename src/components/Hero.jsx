import { motion } from "framer-motion";
import Lottie from "lottie-react";
import dubaiAnimation from "../assets/dubai.json"; // Lottie file

const Hero = () => {
  console.log("Rendering Hero component");
  return (
    <section className="h-screen w-full relative flex items-center justify-center bg-black text-white">
      <Lottie
        animationData={dubaiAnimation}
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Discover Premium Dubai Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg md:text-xl"
        >
          Book flights, villas, clubs, and more!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-primary text-white rounded-full transition-all"
        >
          Explore Packages
        </motion.button>
        <div className="bg-blue-500 text-white mt-6 p-4 rounded">
          Test Block — Should have top margin
        </div>
      </div>
    </section>
  );
};

export default Hero;
