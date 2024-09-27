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

      // Starting position at 10% from the top of FloatPart
      const startPosition = floatPartTop + floatPartHeight * 0.10;

      // Calculate the range for the position (10% above and below the start position)
      const minPosition = startPosition - (floatPartHeight * 0.0); // 10% above
      const maxPosition = startPosition + (floatPartHeight * 0.60); // 10% below

      // Set initial position
      if (boxPosition === 0) {
        setBoxPosition(startPosition);
      }

      // Determine new position based on scroll direction
      if (currentScrollY > scrollY) {
        // Scrolling down
        setBoxPosition(prev => Math.max(minPosition, prev - 5)); // Move up, but not below min
      } else {
        // Scrolling up
        setBoxPosition(prev => Math.min(maxPosition, prev + 5)); // Move down, but not above max
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
