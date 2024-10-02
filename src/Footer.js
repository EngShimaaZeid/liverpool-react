import React from "react";
import "./css/Footer.css" 

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
  const footer0 = [
    { id: 1, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/league_title.svg' },
    { id: 2, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/european_cup.svg' },
    { id: 3, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/fa_cup.svg' },
    { id: 4, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/uefa_cup.svg'  },
    { id: 3, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/fa_cup.svg' },
    { id: 6, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/uefa_super_cup.svg' },
    { id: 7, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/fifa_club_world_cup.svg' }
  ];
  const footer = [
    { id: 1, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_SCB_White.svg'},
    { id: 2, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_SCB_White.svg' },
    { id: 3, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/fa_cup.svg' },
    { id: 4, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/uefa_cup.svg' }
    
  ];
  const footer1 = [
    { id: 1, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-05/logo-carlsberg.svg', alt: 'Carlsberg' },
    { id: 2, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_Nike_White.svg', alt: 'EA Sports' },
    { id: 3, src: 'https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_AXA_White.svg', alt: 'Extreme Networks' },
    { id: 4, src: 'https://backend.liverpoolfc.com/sites/default/files/2023-05/Expedia%20Logo%202023.svg', alt: 'Google Pixel' }
    
  ];
  const footer00 = [
    { id: 1, src: 'https://www.liverpoolfc.com/memorial-1989-desktop.svg', alt: 'Carlsberg' },
    { id: 2, src: 'https://www.liverpoolfc.com/memorial-1985-desktop.svg', alt: 'EA Sports' },
   
  ];
function App() {
  return (
    <div>
       <div class="footer00">
    <div className="logoContainer">
      <ul className="logoList">
        {footer00.map(logo => (
          <li key={logo.id}>
            <img src={logo.src}  className="logoImage" />
          </li>
        ))}
      </ul>
    </div>
    </div>
      <div class="footer0">
    <div className="logoContainer">
      <ul className="logoList">
        {footer0.map(logo => (
          <li key={logo.id}>
            <img src={logo.src}  className="logoImage" />
          </li>
        ))}
      </ul>
    </div>
    </div>
    
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
    <div class="footer3">
        <p class="copyRights">
        © Copyright 2024 The Liverpool Football Club and Athletic Grounds Limited. All rights reserved. Match Statistics supplied by Opta Sports Data Limited. Reproduced under licence from Football DataCo Limited. All rights reserved.
         </p>


    </div>
    </div>
);
}

export default App;
