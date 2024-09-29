import React, { useEffect, useState } from 'react';
import '../css/FloatingBox.css';
import Card1 from '../ui/Card1';

const FloatingBox = ({ floatPartRef }) => {
  const [scrollY, setScrollY] = useState(0);
  const [boxPosition, setBoxPosition] = useState(null); // Initialize as null

  useEffect(() => {
    const handleScroll = () => {
      if (!floatPartRef.current) return; // Guard clause

      const currentScrollY = window.scrollY;
      const floatPartTop = floatPartRef.current.getBoundingClientRect().top + currentScrollY;
      const floatPartHeight = floatPartRef.current.offsetHeight;

      // Starting position at 10% from the top of FloatPart
      const startPosition = floatPartTop + floatPartHeight * 0.10;

      // Set initial position if it hasn't been set
      if (boxPosition === null) {
        setBoxPosition(startPosition);
      }

      // Calculate the range for the position
      const minPosition = startPosition - (floatPartHeight * 0.0); // 10% above
      const maxPosition = startPosition + (floatPartHeight * 0.40); // 10% below

      // Determine new position based on scroll direction
      if (currentScrollY > scrollY) {
        // Scrolling down
        setBoxPosition(prev => Math.max(minPosition, prev - 10)); // Move up, but not below min
      } else {
        // Scrolling up
        setBoxPosition(prev => Math.min(maxPosition, prev + 10)); // Move down, but not above max
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [floatPartRef, scrollY, boxPosition]);

  // Only render the FloatingBox if boxPosition has been set
  if (boxPosition === null) return null;

  return (
    <div className="floating-box" style={{ top: `${boxPosition}px`, position: 'absolute', right: '0' }}>
      <Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/inside-anfield-west-ham-26092024_0.webp?itok=NDdpyUFb&width=1680"/>
      <br />
      <Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/u18s-live-promo-27092024.webp?itok=99curLPx&width=1680"/>
      <br />
      <Card1 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/carabao-cup-trophy-250924.webp?itok=iDTOEmXt&width=1680"/>
    </div>
  );
};

export default FloatingBox;
