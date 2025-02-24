
import React from 'react';

function Card1({ imgSrc, altText }) {
  return (
    <a href="/" class="cards">
    <img src={imgSrc} alt={altText}/>
    <div>
        <p class="cardBody">
            <p class="time"> 11 Hours ago</p>
            <span class="title">Videos:</span>
            <span>
            Liverpool 5-1 West Ham: Watch Carabao Cup highlights and full 90 minutes
            </span>
        </p>
    </div>
  </a>
  
  );
}
export default Card1;
