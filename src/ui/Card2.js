
import React from 'react';

function Card2({ imgSrc, altText }) {
  return (
    <a  >
    <img class="card2Img" src={imgSrc} alt={altText}/>
    <div>
        <p class="cardBody">
            <span>
            LFC Nike Mens 24/25 Gilet Vest Black
            </span>
            <br/><br/><br/>
            <span class="price">
            £100.00
            </span>
            <br/>
            <button class="buyButton">
                <span class="title">
                Buy Now 
                </span>
            </button>

        </p>
    </div>
  </a>
  
  );
}
export default Card2;
