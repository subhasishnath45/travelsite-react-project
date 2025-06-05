import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Newsletter Section */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
          <p className="mb-4 text-gray-400">
            Get updates on exclusive travel deals and Dubai experiences.
          </p>

          {/* Input and Button with Motion */}
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <motion.input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 rounded-md text-white border-2 border-white  focus:outline-none bg-transparent"
              whileFocus={{ scale: 1.02, borderColor: '#00AEEF', }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-white border-2 border-white rounded-md"
            >
              Subscribe
            </motion.button>
          </form>
        </div>

        {/* Social Icons Section */}
        <div className="flex space-x-6 text-2xl mt-4 md:mt-0">
          {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-primary transition"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Dubai Luxe Travel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
