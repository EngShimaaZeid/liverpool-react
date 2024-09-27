import React, { useEffect, useState } from 'react';
import './css/FloatingBox.css';
import Card1 from './Card1';

const FloatingBox = ({ floatPartRef }) => {
  const [scrollY, setScrollY] = useState(0);
  const [boxPosition, setBoxPosition] = useState(0); // Initialize position

  useEffect(() => {
    const handleScroll = () => {
      if (!floatPartRef.current) return; // Guard clause

      const currentScrollY = window.scrollY;
      const floatPartTop = floatPartRef.current.getBoundingClientRect().top + currentScrollY;
      const floatPartHeight = floatPartRef.current.offsetHeight;

      // Set initial position to be at the top of FloatPart
      if (boxPosition === 0) {
        setBoxPosition(floatPartTop);
      }

      // Calculate the maximum position with 8% padding
      const maxPosition = floatPartTop + floatPartHeight * 0.80; // 92% of the height to leave 8% padding

      // Determine new position based on scroll direction
      if (currentScrollY > scrollY) {
        // Scrolling down
        setBoxPosition(prev => Math.max(floatPartTop, prev - 5)); // Move up
      } else {
        // Scrolling up
        setBoxPosition(prev => Math.min(maxPosition, prev + 5)); // Move down
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [floatPartRef, scrollY, boxPosition]);

  return (
    <div className="floating-box" style={{ top: `${boxPosition}px`, position: 'absolute', right: '0' }}>
      <Card1 />
      <br />
      <Card1 />
      <br />
      <Card1 />
    </div>
  );
};

export default FloatingBox;
