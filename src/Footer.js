import React from "react";
import Card1 from "./ui/Card1"
const logos = [
    { id: 1, src: './imgs/f24.png', alt: 'Carlsberg' },
    { id: 2, src: './imgs/f22.png', alt: 'EA Sports' },
    { id: 3, src: './imgs/f23.png', alt: 'Extreme Networks' },
    { id: 4, src: './imgs/f24.png', alt: 'Google Pixel' },
    { id: 5, src: './imgs/f23.png', alt: 'Husqvarna' },
    { id: 6, src: './imgs/f22.png', alt: 'Japan Airlines' },
    { id: 7, src: './imgs/f23.png', alt: 'Kodansha' },
    { id: 8, src: './imgs/f24.png', alt: 'Lucozade' },
    { id: 9, src: './imgs/f22.png', alt: 'Orion' },
    { id: 10, src: './imgs/f23.png', alt: 'Peloton' },
    { id: 11, src: './imgs/f24.png', alt: 'Bird logo' },
    { id: 12, src: './imgs/f22.png', alt: 'UPS' },
    { id: 13, src: './imgs/f24.png', alt: 'Wasabi' }
  ];
function App() {
  return (
    <div>
    <div class="footer1" >
    <ul class="image-list">
            <li><img src="./imgs/f11.png"></img></li>
            <li><img src="./imgs/f12.png"></img></li>
            <li><img src="./imgs/f13.png"></img></li>
            <li><img src="./imgs/f14.png"></img></li>

        </ul>
    
    </div>
    

    <div class="footer2">
    <div className="logo-container">
      <ul className="logo-list">
        {logos.map(logo => (
          <li key={logo.id}>
            <img src={logo.src} alt={logo.alt} className="logo-image" />
          </li>
        ))}
      </ul>
    </div>
    </div>
    <div class="footer3">
        <p class="copyrights">
        © Copyright 2024 The Liverpool Football Club and Athletic Grounds Limited. All rights reserved. Match Statistics supplied by Opta Sports Data Limited. Reproduced under licence from Football DataCo Limited. All rights reserved.

        </p>


    </div>
    </div>
);
}

export default App;
