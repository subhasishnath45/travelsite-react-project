import { motion } from 'framer-motion';
import { useState } from 'react';
import mapImg from '../assets/map-placeholder.jpg';

const locations = [
  { name: 'Burj Khalifa', top: '30%', left: '50%' },
  { name: 'Palm Jumeirah', top: '60%', left: '70%' },
  { name: 'Dubai Mall', top: '40%', left: '55%' },
];

const Map = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-16 bg-blue" id="map">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-sky-400">Explore Dubai</h2>

        {/* Zoomable map container using overflow and transform */}
        <div className="relative w-full h-96 bg-blue-200 rounded-lg overflow-hidden group">
          {/* Static Map Image */}
          <motion.img
            src={mapImg}
            alt="Dubai Map"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            whileInView={{ scale: 1 }}
          />

          {/* Animated location pins with hover popups */}
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              className="absolute z-10 w-4 h-4 bg-red-500 rounded-full cursor-pointer"
              style={{ top: loc.top, left: loc.left }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.3 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Popup on hover */}
              {hovered === index && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -top-10 bg-white px-3 py-1 rounded-md shadow text-sm text-gray-800 whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {loc.name}
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Optional scroll-triggered animated path (simulated with line for demo) */}
          <motion.div
            className="absolute border-l-2 border-dashed border-primary"
            style={{ top: '30%', left: '50%', height: '30%' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            origin="top"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;


