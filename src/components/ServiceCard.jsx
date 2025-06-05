import { motion } from "framer-motion";
import CountUp from 'react-countup';

const ServiceCard = ({ title, description, index, stat }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="text-green text-3xl font-bold font-opensans">
        <CountUp end={stat} duration={2} />+
      </div>
      <p className="text-xs text-gray-500">Bookings Available</p>
    </motion.div>
  );
};

export default ServiceCard;
