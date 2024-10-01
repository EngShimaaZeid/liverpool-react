import React, { useRef, useState, useEffect } from 'react';
import FloatPart from './FloatPart';
import FloatingBox from './FloatingBox';

const App = () => {
  const floatPartRef = useRef(null); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <FloatPart ref={floatPartRef} />
      {!isMobile && <FloatingBox floatPartRef={floatPartRef} />}
    </div>
  );
};

export default App;
