
import React from 'react';
import '../css/Card3.css'
function Card3({ imgSrc, altText }) {
  return (
 
    <div class="card3">
        <div class="cardBody">
            <span>
                <div class="title">
                    Premier League
                </div>
                <div class="time">Sat 28 September — 19:30</div>
            </span>

            <span>
                <img  class="card3Logo" src={imgSrc} />
            </span>
        </div>
        <div class="cardBody cardTable">
        <div class="team">
            <div class="teamDiv">
            <img  class="leftLogo"src="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2022-06/wolverhampton-wanderers-crest.webp?itok=-aZQAqCf" />
    
            <h4>Wolves</h4>
           </div>
           <div class="teamDiv">
            <img  class="leftLogo" src="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2022-06/west-ham-united-crest.webp?itok=Irb5nARg" />
    
            <h4>Liverpool</h4>
           </div>
        </div>
           <div class="score">
            <div>
            <h4>1</h4>
           </div>
           <div>
            <h4>1</h4>
           </div>
           </div>
        </div>
           
        <div>
        <button class="blackButton">
                <span class="title">
                Match Report
                </span>
            </button>
        </div>
        
    </div>
   

  
  
  );
}
export default Card3;
