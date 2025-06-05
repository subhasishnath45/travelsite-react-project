import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const RippleButton = ({
  children,
  className = '',
  onClick = () => {},
  bgColor = 'bg-primary',
  textColor = 'text-white',
  hoverColor = 'hover:bg-blue-600',
  rippleColor = 'bg-white',
  rippleOpacity = 'opacity-30',
}) => {
  const [ripple, setRipple] = useState({ show: false, x: 0, y: 0 });

  const handleRipple = (e) => {
    const rect = e.target.getBoundingClientRect();
    setRipple({
      show: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    // Hide ripple after animation
    setTimeout(() => {
      setRipple({ show: false, x: 0, y: 0 });
    }, 500);

    onClick(e); // Optional external click handler
  };

  return (
    <motion.button
      onClick={handleRipple}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden px-6 py-3 font-semibold rounded-full transition-all duration-300 ${bgColor} ${textColor} ${hoverColor} ${className}`}
    >
      {children}
      {ripple.show && (
        <span
          className={`absolute rounded-full animate-ripple ${rippleColor} ${rippleOpacity}`}
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
            width: 100,
            height: 100,
          }}
        />
      )}
    </motion.button>
  );
};

RippleButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverColor: PropTypes.string,
  rippleColor: PropTypes.string,
  rippleOpacity: PropTypes.string,
};

export default RippleButton;
