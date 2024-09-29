import React, { useRef } from 'react';
import FloatPart from './FloatPart';
import FloatingBox from './FloatingBox';

const App = () => {
  const floatPartRef = useRef(null); // Create a ref for FloatPart

  return (
    <div>
      <FloatPart ref={floatPartRef} />
      <FloatingBox floatPartRef={floatPartRef} />
    </div>
  );
};

export default App;
