import React, { useEffect, useRef, useState } from "react";
import Card5 from "../ui/Card5";
import "../css/Carousel.css";

function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const carouselVpRef = useRef(null);
  const cCarouselInnerRef = useRef(null);
  
  const [leftValue, setLeftValue] = useState(0);
  
  useEffect(() => {
    const prev = prevRef.current;
    const next = nextRef.current;
    const cCarouselInner = cCarouselInnerRef.current;
    const carouselVp = carouselVpRef.current;

    if (!prev || !next || !cCarouselInner || !carouselVp) return;

    const handlePrevClick = () => {
      if (leftValue < 0) {
        setLeftValue(prevLeftValue => Math.min(prevLeftValue + 300, 0)); 
      }
    };

    const handleNextClick = () => {
      const carouselVpWidth = carouselVp.getBoundingClientRect().width;
      const cCarouselInnerWidth = cCarouselInner.getBoundingClientRect().width;
      if (cCarouselInnerWidth + leftValue > carouselVpWidth) {
        setLeftValue(prevLeftValue => prevLeftValue - 300); 
      }
    };

    prev.addEventListener("click", handlePrevClick);
    next.addEventListener("click", handleNextClick);

    return () => {
      prev.removeEventListener("click", handlePrevClick);
      next.removeEventListener("click", handleNextClick);
    };
  }, [leftValue]);

  return (
    <div className="part2">
      <button className="blackHeadButton">Top Scores 2024-25</button>
      <button class="card5Button">All Players Profiles
      <a class="moreArrow"> &gt;</a>
      </button>
      <section>
        <div id="cCarousel">
          <div className="arrow left" ref={prevRef}>
          &lt;
                    </div>
          <div className="arrowRight" ref={nextRef}>
            &gt;
          </div>

          <div id="carousel-vp" ref={carouselVpRef}>
            <div
              id="cCarousel-inner"
              ref={cCarouselInnerRef}
              style={{
                left: `${leftValue}px`,
                transition: "left 0.3s ease-in", 
                position: 'relative', 
              }}
            >
              
              <Card5 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-06/luis-diaz-profile-headshot-202425.webp?itok=WkV90Wpr" title1="Luis Dias" />
              <Card5 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/mohamed-salah-headshot-v3-2024.webp?itok=sPITcM67" title1="Mo. Salah" />
              <Card5 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-06/diogo-jota-profile-headshot-202425.webp?itok=CsWBVQ4v" title1="Diogo Jota" />
              <Card5 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-06/cody-gakpo-profile-headshot-202425.webp?itok=cNZegchA" title1="Cody Gakpo" />
              <Card5 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-06/ibrahima-konate-headshot-202425.webp?itok=yiRHwd3c" title1="Ibrahim Konate" />
            </div>
            
          </div>
          
        </div>
        
      </section>
     
    </div>
  );
}

export default App;
