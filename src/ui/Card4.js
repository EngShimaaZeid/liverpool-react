
import React from 'react';

function Card1({ imgSrc, altText }) {
  return (
    <a class="card4">
    <img src={imgSrc} alt={altText}/>
    <div>
        <p class="cardBody">
            <span class="title">Videos:</span>
            <span>
            Liverpool 5-1 West Ham: Watch Carabao Cup highlights and full 90 minutes
            </span>
        </p>
    </div>
    <img src={imgSrc} alt={altText}/>
  </a>
  
  );
}
export default Card1;
