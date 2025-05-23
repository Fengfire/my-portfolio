import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, []);

  const handleAnimationComplete = () => {
    setTimeout(() => setLoading(false), 500); // 0.5s sonra içeriğe geç
  };

  return loading ? (
    <motion.div
      className="preloader"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={handleAnimationComplete}
    >
      <h1 style={{ color: '#58A6FF', fontSize: '4rem' }}>OnurDEV</h1>
    </motion.div>
  ) : (
    <motion.div
      className="page-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children({ onComplete: handleAnimationComplete })}
    </motion.div>
  );
}