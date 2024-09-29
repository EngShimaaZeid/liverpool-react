
import React from 'react';

function LongCard({ imgSrc, altText }) {
  return (
    <a  >
    <div class="longCard">
        <p class="card-body">
            <span class="title">LFC Online Store</span>
            <span>
            Shop the latest LFC label fashion, souvenirs and more. LFC Official Members and season ticket holders get 10% off!
            </span>
        </p>
        <button class="buyButton">
                <span class="title">
                Buy Now 
                </span>
            </button>
    </div>
   

  </a>
  
  );
}
export default LongCard;
