
import React from 'react';
import '../css/Card5.css'
function Card5({ imgSrc, title1 }) {
  return (
 
    <div class="card5">
        <div class="border">
        <div class="cardBody">
            <span>

                <div class="title1">
                {title1}
                </div>
                <div class="title2">ForWard</div>
            </span>

            <span>
                <img  class="card3Logo" src={imgSrc}/>
            </span>
        </div>
        <div class="cardTable">
        <div class="title3">Season 2024-25</div>

        <div class="cardTableItem">
            <span>      
                <div >Appearance</div>
            </span>

            <span>
            <div >8</div>
            </span>
        </div>
        <div class="cardTableItem">
            <span>             
                <div >Time Played</div>
            </span>

            <span>
            <div >624</div>
            </span>
        </div>
        <div class="cardTableItem">
            <span>

                
                <div>Goals</div>
            </span>

            <span>
            <div>5</div>
            </span>
        </div>
        
        </div>
        <div>
            <button class="card5Button">Buy Shirt</button>
            <button class="card5Button">View Profile </button>

        </div>
        </div>
        
      
        
        
           
    </div>
   

  
  
  );
}
export default Card5;
