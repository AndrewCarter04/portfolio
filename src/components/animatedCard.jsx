import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '' }) => (
  <motion.div
    className={className}
    whileHover={{
      y: -6,
      boxShadow: '0 8px 30px rgba(170, 170, 221, 0.35)',
      transition: { duration: 0.2, ease: 'easeOut' },
    }}
    style={{ borderRadius: '0.375rem', height: '100%' }}
  >
    {children}
  </motion.div>
);

export default AnimatedCard;