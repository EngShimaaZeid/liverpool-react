import React, { forwardRef } from "react";

const FloatPart = forwardRef((props, ref) => {
  return (
    <div className="floatPart" ref={ref} style={{ position: 'relative' }}>
      <button class="blackHeadButton title">Have you seen?</button>

      <h3>
        <span className="title">Explained</span>
        How Arne Slot's 'spectacular' coaching is helping Luis Diaz score more goals
      </h3>
      <img
        src="https://backend.liverpoolfc.com/sites/default/files/styles/md/public/2024-09/arne-slot-liverpool-fc-280924.webp?itok=w1paQy-o&width=1680"
        alt="Luis Diaz"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
});

export default FloatPart;
