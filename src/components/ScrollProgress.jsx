import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setWidth(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    // İlk yüklemede de hesapla
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${width}%` }} />
    </div>
  );
}
