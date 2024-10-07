import React from "react";



const footer1 = [
    { id: 1, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-05/logo-carlsberg.svg', alt: 'Carlsberg' },
    { id: 2, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_Nike_White.svg', alt: 'EA Sports' },
    { id: 3, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_AXA_White.svg', alt: 'Extreme Networks' },
    { id: 4, src: 'https://backend.liverpoolfc.com/sites/default/files/2023-05/Expedia%20Logo%202023.svg', alt: 'Google Pixel' }
    
  ];
function Footer1() {
  return (
   
      <div class="footer1">
    <div className="logoContainer">
      <ul className="logoList">
        {footer1.map(logo => (
          <li key={logo.id}>
            <img src={logo.src}  className="logoImage" />
          </li>
        ))}
      </ul>
    </div>
    </div>
    
);
}

export default Footer1;
