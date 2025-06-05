import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Amazing experience! Highly recommend.",
    audio: "./src/audio/testimony-music.mp3", // dummy paths
  },
  {
    name: "Jane Smith",
    feedback: "The best travel service I have ever used.",
    audio: "./src/audio/testimony-music.mp3",
  },
  {
    name: "Ali Khan",
    feedback: "Exceptional service and great deals.",
    audio: "./src/audio/testimony-music.mp3",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(testimonials[0].audio));

  const handlePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.src = testimonials[index].audio;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
    audio.pause();
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
    audio.pause();
  };

  return (
    <section className="py-16 bg-yellow" id="testimonials">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              drag="x" // Swipeable on mobile
              dragConstraints={{ left: 0, right: 0 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-gray-100 rounded-lg shadow-md"
            >
              {/* Text */}
              <motion.p
                className="text-lg italic mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                "{testimonials[index].feedback}"
              </motion.p>

              {/* Name */}
              <motion.h3
                className="text-xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {testimonials[index].name}
              </motion.h3>

              {/* Audio Player */}
              <div className="flex items-center justify-center mt-4 space-x-3">
                <button
                  onClick={handlePlay}
                  className="text-white bg-primary p-2 rounded-full"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <div className="flex space-x-1">
                  {/* Dummy waveform animation */}
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="w-1 bg-primary rounded"
                      animate={{
                        height: isPlaying ? [12, 24, 12] : 12,
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 0.6,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center mt-6">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              <FaChevronCircleLeft size={32} />
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              <FaChevronCircleRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
