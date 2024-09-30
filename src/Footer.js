import React from "react";
import "./css/Footer.css" 

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
    { id: 13, src: './imgs/f23.png', alt: 'Wasabi' }
   
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
    { id: 1, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/league_title.svg'},
    { id: 2, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/european_cup.svg' },
    { id: 3, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/fa_cup.svg' },
    { id: 4, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/uefa_cup.svg' },
    { id: 5, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/league_cup.svg' },
    { id: 5, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/uefa_super_cup.svg' },
    { id: 5, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/fifa_club_world_cup.svg' }
  ];
function App() {
  return (
    <div>
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
    
    

    <div class="footer2">
    <div className="logoContainer">
      <ul className="logoList">
        {logos.map(logo => (
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
