import React from "react";
import Card2 from "../ui/Card2"

function App() {
  return (

    <div class="part2">
        <button class="blackHeadButton title">LFC Retail</button>

     <ul>
        <li><Card2 imgSrc="../imgs/2-1.jpg"/></li>
        <li><Card2 imgSrc="../imgs/2-2.jpg"/></li>
        <li><Card2 imgSrc="../imgs/2-3.jpg"/></li>
        <li><Card2 imgSrc="../imgs/2-4.jpg"/></li>
        <li><Card2 imgSrc="../imgs/2-5.jpg"/></li>

     </ul>
     <center>
     <button class="button2">
     Visit the LFC Store now
     </button>
     </center>

    </div>
);
}

export default App;
