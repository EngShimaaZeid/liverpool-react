import React from "react";



const footer00 = [
    { id: 1, src: 'https://www.liverpoolfc.com/memorial-1989-desktop.svg', alt: 'Carlsberg' },
    { id: 2, src: 'https://www.liverpoolfc.com/memorial-1985-desktop.svg', alt: 'EA Sports' },
   
  ];
function Footer00() {
  return (
   
      <div class="footer00">
    <div className="logoContainer">
      <ul className="logoList">
        {footer00.map(logo => (
          <li key={logo.id}>
            <img src={logo.src}  className="logoImage" alt="football" />
          </li>
        ))}
      </ul>
    </div>
    </div>
    
);
}

export default Footer00;
