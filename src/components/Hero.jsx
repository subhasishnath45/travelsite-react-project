import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import dubaiAnimation from "../assets/dubai.json"; // Lottie file
import RippleButton from "./RippleButton";

const Hero = () => {
  const [rippleOne, setRippleOne] = useState({ show: false, x: 0, y: 0 });
  const [rippleTwo, setRippleTwo] = useState({ show: false, x: 0, y: 0 });

  const handleRipple = (e, setRipple) => {
    const rect = e.target.getBoundingClientRect();
    setRipple({
      show: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setTimeout(() => setRipple({ show: false, x: 0, y: 0 }), 500);
  };
  return (
    <section className="h-dvh w-dvw max-w-full relative flex items-center justify-center bg-white text-black overflow-x-hidden overflow-y-hidden">
      <Lottie
        animationData={dubaiAnimation}
        loop
        className="absolute inset-0 w-full max-w-full h-dvh object-contain z-0 scale-120 overflow-hidden"
      />
      <div className="container mx-auto">
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold font-opensans text-green"
          >
            Discover Premium Dubai Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="my-4 text-lg md:text-xl"
          >
            Discover the magic of Dubai with our premium travel experiences —
            where golden deserts meet futuristic skylines, luxury blends with
            tradition, and every journey is a story worth telling. From iconic
            landmarks like the Burj Khalifa and Palm Jumeirah to vibrant souks,
            thrilling desert safaris, and world-class dining, our curated
            packages unlock the best of this dazzling city.!
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <RippleButton
              bgColor="bg-red"
              textColor="text-white"
              hoverColor="hover:bg-red-600"
              rippleColor="bg-white"
              rippleOpacity="opacity-50"
            >
              Book Now
            </RippleButton>
            <RippleButton
              bgColor="bg-blue"
              textColor="text-white"
              hoverColor="hover:bg-blue-600"
              rippleColor="bg-white"
              rippleOpacity="opacity-50"
            >
              Explore Packages
            </RippleButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
