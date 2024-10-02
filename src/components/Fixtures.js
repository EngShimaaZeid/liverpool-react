import React from "react";
import Card3 from "../ui/Card3"

function App() {
  return (

    <div class="part2">
      <button class="blackHeadButton ">Fixtures</button>
      <ul>
        <li ><Card3  imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2022-04/Competition%3DMen_%20Premier%20League%2C%20Color%3DColor.webp?itok=DdkzpVUw"/></li>
        <li><Card3 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2022-06/womens-super-league-logo.webp?itok=d8ZVpAfO"/></li>
        <li ><Card3 imgSrc="https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2022-06/uefa-youth-league-logo.webp?itok=f0kSD64e"/></li>
       
      </ul>
    </div>
);
}

export default App;
