import React from "react";


  const footer0 = [
    { id: 1, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/league_title.svg', alt:"image" },
    { id: 2, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/european_cup.svg', alt:"image" },
    { id: 3, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/fa_cup.svg' , alt:"image"},
    { id: 4, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/uefa_cup.svg'  , alt:"image"},
    { id: 3, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/fa_cup.svg' , alt:"image"},
    { id: 6, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/uefa_super_cup.svg' , alt:"image"},
    { id: 7, src: 'https://backend.liverpoolfc.com/sites/default/files/2022-05/fifa_club_world_cup.svg', alt:"image" }
  ];
function Footer0() {
  return (
   
      <div class="footer0">
    <div className="logoContainer">
      <ul className="logoList">
        {footer0.map(logo => (
          <li key={logo.id}>
            <img src={logo.src}  className="logoImage"  alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
    </div>
    
);
}

export default Footer0;
