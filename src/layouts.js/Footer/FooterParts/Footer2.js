import React from "react";



const footer2 = [
  { id: 1, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-05/logo-carlsberg.svg', alt: 'Carlsberg' },
  { id: 2, src: 'https://backend.liverpoolfc.com/sites/default/files/2023-04/EAS_PRIMARY_LOGO_WHT_PNG%20clear.svg', alt: 'EA Sports' },
  { id: 3, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-11/Extreme-Networks-WH.svg', alt: 'Extreme Networks' },
  { id: 4, src: 'https://backend.liverpoolfc.com/sites/default/files/2024-08/logo_Pixel_2024Q1_Print_Logo_Lockup_CMYK_grey_900_vertical.svg', alt: 'Google Pixel' },
  { id: 5, src: 'https://backend.liverpoolfc.com/sites/default/files/2024-07/husqvarna-white.svg', alt: 'Husqvarna' },
  { id: 6, src: 'https://backend.liverpoolfc.com/sites/default/files/2024-06/JAL%20logo%20all%20white.svg', alt: 'Japan Airlines' },
  { id: 7, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-07/kodansha_logo_horizontal_lockup_fixed.svg', alt: 'Japan Airlines' },
  { id: 8, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-11/Extreme-Networks-WH.svg', alt: 'Kodansha' },
  { id: 9, src: 'https://backend.liverpoolfc.com/sites/default/files/2023-12/Orion_Logo_Registered_White%201.svg', alt: 'Orion' },
  { id: 10, src: 'https://backend.liverpoolfc.com/sites/default/files/2023-07/Peloton.svg', alt: 'Peloton' },
  { id: 11, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-05/logo-carlsberg.svg', alt: 'Bird logo' },
  { id: 12, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-11/Extreme-Networks-WH.svg', alt: 'UPS' },
  { id: 13, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-02/wasabi-logo-stacked-white.svg', alt: 'Wasabi' }
 
];
function Footer2() {
  return (
   
      <div class="footer2">
    <div className="logoContainer">
      <ul className="logoList">
        {footer2.map(logo => (
          <li key={logo.id}>
            <img src={logo.src}  className="logoImage" />
          </li>
        ))}
      </ul>
    </div>
    </div>
    
);
}

export default Footer2;
